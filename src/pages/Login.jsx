import {
  Link,
  useLoaderData,
  useSearchParams,
  Form,
  redirect,
  useActionData,
  useNavigation,
} from "react-router-dom";
import React, { useState } from "react";

import { loginUser } from "../app-components/api";
import Loading from "../app-components/Loading";

export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

export async function action({ request }) {
  const formData = await request.formData();
  const password = formData.get("password");
  const email = formData.get("email");
  try {
    const data = await loginUser({ email, password });
    localStorage.setItem("isLoggedIn", true);

		const pathname = new URL(request.url).searchParams.get("redirectTo")

    const response = redirect(pathname ? pathname : "/host");
    response.body = true;
    return response;
  } catch (err) {
    localStorage.clear();
    return err;
  }
}

export default function Login() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputFocus, setInputFocus] = useState(false);
  const status = useNavigation().state;
  const error = useActionData();
  const loaderData = useLoaderData();

  console.log(status);

  function handleButonClick() {
    searchParams.delete("message");
    setSearchParams(searchParams);
  }

  /*   function handleSubmitFormData(e) {
    setStatus("submitting");
    setError(null);
    e.preventDefault();
    console.log("data send", loginFormData);
    loginUser(loginFormData)
      .then((data) => console.log(data))
      .catch((err) => setError(err.message))
      .finally(() => setStatus("idle"))
      .finally(
        setSearchParams((prev) => {
          prev.delete("message");
          return prev;
        })
      );
  } */

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      // handleSubmitFormData(e);
      document.activeElement?.blur();
    }
  }

  return (
    <main className={inputFocus ? "login--input-focus login" : "login"}>
      <div className="login__input-focus"></div>
      <div className="login__container">
        <div className="login__title">
          <h2>Sign in to your account</h2>
          {error ? (
            <h3>{error.message}</h3>
          ) : (
            loaderData && <h3 className="login__message">{loaderData}</h3>
          )}
        </div>
        <Form
          replace
          method="post"
          className={`${
            inputFocus ? "login__form--input-focus login__form" : "login__form"
          }`}
        >
          <input
            tabIndex={1}
            placeholder="Email address"
            onFocus={() => setInputFocus(true)}
            onBlur={() => setInputFocus(false)}
            onKeyDown={handleKeyDown}
            type="text"
            name="email"
          />
          <input
            tabIndex={2}
            placeholder="Password"
            onFocus={() => setInputFocus(true)}
            onBlur={() => setInputFocus(false)}
            onKeyDown={handleKeyDown}
            type="password"
            name="password"
          />
          <button
            type="submit"
            onClick={handleButonClick}
            accessKey="Enter"
            className={status === "submitting" ? "--submitting" : undefined}
            disabled={status === "submitting"}
            tabIndex={3}
          >
            {status === "submitting" ? <Loading /> : "Sign in"}
          </button>
        </Form>
        <div className="login__registration">
          Don’t have an account? <Link>Create one now</Link>
        </div>
      </div>
    </main>
  );
}
