import { consola } from "consola";
export type UserState = {
	email: string;
	is_admin: boolean;
	token: string;
};
export async function useUser() {
	const { data, error } = await useAsyncState<UserState>("user", async () => {
		const token = getAuthCookie();
		if (!token) return {} as UserState;

		const user = await $fetch("/api/users/me", {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}).catch((e) => {
			consola.error(e);
			setAuthCookie(undefined);
			return undefined;
		});

		return user;
	});

	if (!data.value) {
		data.value = {} as UserState;
	}
	return { user: data as Ref<UserState>, error };
}
