import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import LoginLottie from "../public/loginLottie.json";
import Lottie from "lottie-react";
import axios from "axios";
import store from "../store/baseStore";
import Router, { useRouter} from "next/router";
import { loginUser } from "../store/loginStore";
import checkToken from "../utils/checkToken";

function login() {
  const router = useRouter();

  const [loginId, setloginId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(()=>{
    console.log("From login useeffect : ", store.getState().login.loggedIn);
    if(store.getState().login.loggedIn) Router.push("/ProblemSet");
  })

  const onLogin = () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const data = {
      loginId,
      password,
    };
    axios
      .post("http://localhost:5000/auth/login", data, config)
      .then((res) => {
        var next="/ProblemSet"
        console.log(res);
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('userName',res.data.userName);
        store.dispatch(loginUser(res.data.userName));
        console.log(store.getState().login.loggedIn);
        if(router.query["next"]) next = router.query["next"];
        Router.push(next);

      })
      .catch((err) => {
        // console.log(err);
        setError(err.response.data.error);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="container min-w-full mt-16 w-full flex justify-around items-center">
        <div className="login flex items-start w-3/12 flex-col">
          {error && <div className="alert alert-error shadow-lg">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>{error}</span>
            </div>
          </div>}
          <input
            type="text"
            className="input text-xl rounded-lg my-4 bg-inherit input-success h-16 w-full max-w-lg"
            value={loginId}
            placeholder="Email or Username"
            onChange={(e) => setloginId(e.target.value)}
          />{" "}
          <input
            type="password"
            className="input text-xl rounded-lg my-4 bg-inherit input-success h-16 w-full max-w-lg"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button
            className="btn btn-success btn-lg rounded-lg"
            onClick={onLogin}
          >
            Login
          </button>
        </div>
        <div className="lottie">
          <Lottie animationData={LoginLottie} className="w-10/12" />
        </div>
      </div>
    </div>
  );
}

export default login;
