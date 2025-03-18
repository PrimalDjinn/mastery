import { getUserByEmail } from "~~/server/api/users/utils/queries";
import { createToken } from "~~/server/api/auth/utils/queries";
import { z } from "zod";
import {consola} from "consola"

export async function sendPasswordResetLink(email: string, origin: string, token: string, redirect?: string) {
	const link = `${origin}/auth/update?email=${email}&token=${token}&redirect=${redirect}`;

	const message = "Click the link below to reset your password\n\n" + link;
	const options = {
		to: email,
		subject: "Reset your password",
		text: message
	};

	consola.info(`Sending message:\n${message}\nto: ${email}`);
	return await sendMail(options);
}

export default defineEventHandler(async (event) => {
	const qSchema = z.object({
		email: z.string(),
		origin: z.string(),
		redirect: z.string().optional(),
	});
	const { data, error } = await getValidatedQuery(event, qSchema.safeParse);
	if (error) {
		throw createError({
			statusCode: 400,
			message: error.message,
			data: error,
		});
	}

	const { email, origin, redirect } = data;
	const user = await getUserByEmail(email);
	if (!user) {
		throw createError({
			statusCode: 404,
			message: "User not found",
		});
	}
	const token = await createToken({ userUlid: user.ulid, email: user.email });
	sendPasswordResetLink(email, origin, token, redirect);
	return "OK";
});
