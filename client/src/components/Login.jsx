import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const [state, setState] = useState("Login");
  const { setShowLogin, backendUrl, setToken, setUser } =
    useContext(AppContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (state === "Login") {
        const { data } = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem("token", data.token);
          setShowLogin(false);
          toast.success("Login Successfully");
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });

        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem("token", data.token);
          setShowLogin(false);
          toast.success("Registered Successfully");
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 backdrop-blur-sm z-10 bg-black/30 flex justify-center items-center ">
      <form
        onSubmit={onSubmitHandler}
        className="relative  bg-white p-10  w-[95vw]  sm:w-1/2 md:w-1/3 rounded-xl text-slate-500 "
      >
        <h1 className="text-center text-2xl text-neutral-700 font-medium">
          {state}
        </h1>
        <p className="text-sm text-center mt-3 mb-5">
          Welcome back! Please sign in to continue
        </p>
        {state !== "Login" && (
          <div className="border px-4 py-1 flex items-center gap-2 rounded-md mt-4">
            <img src={assets.profile_icon} alt="" width={22} />
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="outline-none text-sm"
              placeholder="Full name"
              required
            />
          </div>
        )}

        <div className="border px-4 py-1 flex items-center gap-2 rounded-md mt-4">
          <img src={assets.email_icon} alt="" />
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="outline-none text-sm"
            placeholder="test@test.com"
            required
          />
        </div>
        <div className="border px-4 py-1 flex items-center gap-2 rounded-md mt-4">
          <img src={assets.lock_icon} alt="" />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="outline-none text-sm"
            placeholder="Password"
            required
          />
        </div>
        <p className="text-xs text-blur-600 my-4 cursor-pointer">
          Forgot Password?
        </p>
        <button className="bg-blue-600 w-full text-white py-2 rounded-full">
          {state === "Login" ? "Login" : " Create Account"}
        </button>
        {state === "Login" ? (
          <p className="mt-5 text-center">
            Don't have an account?{" "}
            <span
              onClick={() => setState("Sign Up")}
              className="text-blue-600 cursor-pointer"
            >
              Sign Up
            </span>
          </p>
        ) : (
          <p className="mt-5 text-center">
            Already have an account?{" "}
            <span
              onClick={() => setState("Login")}
              className="text-blue-600 cursor-pointer"
            >
              Login
            </span>
          </p>
        )}

        <img
          src={assets.cross_icon}
          onClick={() => setShowLogin(false)}
          className="absolute top-5 right-5 cursor-pointer"
          alt=""
        />
      </form>
    </div>
  );
};

export default Login;
