import { redirect } from "react-router-dom";

export async function requireAuth(loaderFunction) {
  const isLoggedIn = true;

  if (!isLoggedIn) {
		const response = redirect("/login");
		response.body = true; 
		return response;
  }
	return loaderFunction ? loaderFunction : null;
}
