import { Link, useLoaderData, useSearchParams } from "react-router-dom";
import React, { useState } from "react";

import { loginUser } from "../app-components/api";
import Loading from "../app-components/Loading";

export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

export default function Login() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputFocus, setInputFocus] = useState(false);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const loaderData = useLoaderData();
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  function handleChangeFormData(e) {
    setLoginFormData((prevLoginFormData) => ({
      ...prevLoginFormData,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmitFormData(e) {
    setStatus("submitting");
    setError(null);
    e.preventDefault();
    console.log("data send", loginFormData);
    loginUser(loginFormData)
      .then((data) => console.log(data))
      // .catch((err) => console.log("err",err))
      .catch((err) => setError(err.message))
      .finally(() => setStatus("idle"))
      .finally(
        setSearchParams((prev) => {
          prev.delete("message");
          return prev;
        })
      );
  }

	console.log(error);

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleSubmitFormData(e);
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
            <h3>{error}</h3>
          ) : (
            loaderData && <h3 className="login__message">{loaderData}</h3>
          )}
        </div>
        <form
          className={`${
            inputFocus ? "login__form--input-focus login__form" : "login__form"
          }`}
          onSubmit={handleSubmitFormData}
        >
          <input
            tabIndex={1}
            placeholder="Email address"
            onFocus={() => setInputFocus(true)}
            onBlur={() => setInputFocus(false)}
            onKeyDown={handleKeyDown}
            onChange={handleChangeFormData}
            value={loginFormData.email}
            type="text"
            name="email"
          />
          <input
            tabIndex={2}
            placeholder="Password"
            onFocus={() => setInputFocus(true)}
            onBlur={() => setInputFocus(false)}
            onKeyDown={handleKeyDown}
            onChange={handleChangeFormData}
            value={loginFormData.password}
            type="password"
            name="password"
          />
          <button
            className={status === "submitting" ? "--submitting" : undefined}
            disabled={status === "submitting" ? true : false}
            tabIndex={3}
          >
            {status === "submitting" ? <Loading /> : "Sign in"}
          </button>
        </form>
        <div className="login__registration">
          Don’t have an account? <Link>Create one now</Link>
        </div>
      </div>
    </main>
  );
}
