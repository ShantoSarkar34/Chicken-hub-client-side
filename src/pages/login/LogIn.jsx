import React, { use, useEffect, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { app } from "../../firebase/firebase";
import { AuthContext } from "../../authProvider/AuthProvider";

export default function LogIn() {
  const { login, loginWithGoogle } = use(AuthContext);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const emailRef = useRef();
  const auth = getAuth(app);
  const location = useLocation();

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    setSuccess(false);
    setError("");
    login(email, password)
      .then((result) => {
        const user = result.user;
        navigate(`${location.state ? location.state : "/"}`);
        setSuccess(true);
        toast.success("LogIn successfuly");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorCode, errorMessage);
      });
  };

  const handleGoogleSignIn = () => {
    loginWithGoogle()
      .then((result) => {
        const user = result.user;
        navigate("/");
        toast.success("LogIn successfuly");
      })
      .catch((error) => {
        setError(error);
      });
  };

  const handlePassword = () => {
    const email = emailRef.current.value;
    setError("");
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("A password reset email is sent. Please check your email.");
      })
      .catch((error) => {
        setError(error);
      });
  };

useEffect(() => {
  document.title = "Chicken-Hub | LogIn";
  if (error) {
    toast.warn(error);
  }
}, [error]);

  return (
    <div className="">
      <div className="py-10 ">
        <div className="flex flex-col max-w-md mx-auto p-6 rounded-md sm:p-10 bg-[#dde5de] text-gray-800">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold text-primary">Log In</h1>
            <p className="text-sm text-[#292929]">
              Login to access your account
            </p>
          </div>
          <form onSubmit={handleLogIn} className="space-y-12">
            <div className="space-y-4">
              {/* email  */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm text-primary"
                >
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  ref={emailRef}
                  id="email"
                  placeholder="leroy@jenkins.com"
                  className="w-full px-3 placeholder:text-[#292929] py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                />
              </div>
              {/* password */}
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="password" className="text-sm text-primary">
                    Password
                  </label>
                  <button
                    onClick={handlePassword}
                    type="button"
                    className="text-xs hover:underline text-primary cursor-pointer"
                  >
                    Forgot password?
                  </button>
                </div>
                <div className="flex relative">
                  <input
                    type={show ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="*****"
                    className="w-full px-3 placeholder:text-[#292929] py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setShow(!show);
                    }}
                    className="cursor-pointer absolute right-4 top-[14px]"
                  >
                    {show ? (
                      <FaRegEyeSlash className="text-[#292929]" />
                    ) : (
                      <FaRegEye className="text-[#292929]" />
                    )}
                  </button>
                </div>
                {error && (
                  <p className="text-sm text-red-500 mt-2">
                    invalid email or password !
                  </p>
                )}
                {success && (
                  <p className="text-sm text-green-600 mt-2">
                    Login Successfuly
                  </p>
                )}
              </div>
            </div>
            <div className="space-y-2">
              {/* buttons  */}
              <div>
                <button type="submit" className="w-full btn btn-primary mb-1">
                  Log In
                </button>
              </div>
              <p className="px-6 text-sm text-center text-[#292929]">
                Don't have an account yet?
                <NavLink
                  to="/signup"
                  className="underline text-default-600 pl-1 text-primary"
                >
                  Sign up
                </NavLink>
                .
              </p>
            </div>
          </form>
          <div className="flex flex-col gap-4 mt-5">
            {/* Google */}
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="btn bg-white  border-[#e5e5e5] text-primary shadow-none"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
            {/* GitHub */}
            <button className="btn bg-black text-white border-black shadow-none">
              <svg
                aria-label="GitHub logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
                ></path>
              </svg>
              Login with GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
