import { redirect } from "react-router-dom";

export async function requireAuth(request) {
	console.log(request.id);
	const pathname = new URL(request.url).pathname
	console.log(pathname);

  const isLoggedIn = localStorage.getItem("isLoggedIn") ? true : false;

  if (!isLoggedIn) {
		const response = redirect(`/login?message=You must log in first&redirectTo=${pathname}`);
		response.body = true; 
		throw response;
  }
}
