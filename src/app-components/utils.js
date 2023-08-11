import { redirect } from "react-router-dom";

export async function requireAuth(loaderFunction) {

  const isLoggedIn = localStorage.getItem("isLoggedIn") ? true : false;



  if (!isLoggedIn) {
		const response = redirect("/login?message=You must log in first");
		response.body = true; 
		return response;
  }
	return loaderFunction ? loaderFunction : null;
}
