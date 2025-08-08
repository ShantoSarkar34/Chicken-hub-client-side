import React, { use, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { AuthContext } from "../../authProvider/AuthProvider";

const SignUp = () => {
  const { createUser, setUser, updateUser, loginWithGoogle } = use(AuthContext);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [passError, setPassError] = useState("");
  const [nameError, setNameError] = useState("");

  useEffect(() => {
    document.title = "Chicken-Hub | SignUp";
  }, []);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    if (name.length < 5) {
      setNameError("Name should be more then 5 character");
      return;
    } else {
      setNameError("");
    }
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    if (password.length < 6) {
      setPassError("Password must be at least 6 characters long");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setPassError("Password must contain at least one uppercase letter");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setPassError("Password must contain at least one lowercase letter");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate("/");
            toast.success("SignUp successfuly");
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleSignIn = () => {
    loginWithGoogle()
      .then((result) => {
        const user = result.user;
        navigate("/");
        toast.success("SignUp successfuly");
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("google");
  };

  return (
    <div className="">
      <div className="py-10">
        <div className="flex flex-col max-w-md mx-auto p-6 rounded-md sm:p-10 bg-[#dde5de] text-gray-800">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold text-primary">Sign in</h1>
            <p className="text-sm text-[#292929]">
              Sign in to access your account
            </p>
          </div>

          <form onSubmit={handleSignUp} className="space-y-12">
            <div className="space-y-4">
              {/* name  */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm text-primary"
                >
                  Your Name
                </label>
                <input
                  type="name"
                  name="name"
                  required
                  placeholder="your name"
                  className="w-full placeholder:text-[#292929] focus:outline-primary px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                />

                {nameError ? (
                  <p className="text-sm text-red-500 mt-1">{nameError}</p>
                ) : (
                  <></>
                )}
              </div>
              {/* photo url  */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm text-primary"
                >
                  Your Photo URL
                </label>
                <input
                  type="text"
                  name="photo"
                  required
                  placeholder="photo url"
                  className="w-full placeholder:text-[#292929] focus:outline-primary px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                />
              </div>
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
                  id="email"
                  required
                  placeholder="leroy@jenkins.com"
                  className="w-full placeholder:text-[#292929] focus:outline-primary px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                />
              </div>
              {/* password */}
              <div>
                <div className="mb-2">
                  <label htmlFor="password" className="text-sm text-primary">
                    Password
                  </label>
                </div>
                <div className="relative">
                  <input
                    type={show ? "text" : "password"}
                    name="password"
                    placeholder="Your password"
                    className="w-full placeholder:text-[#292929] px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
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
                {passError ? (
                  <p className="pt-1 text-sm text-red-500 mt-1">{passError}</p>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <button type="submit" className="w-full btn btn-primary">
                  Sign in
                </button>
              </div>
              <p className="px-6 text-sm text-center text-[#292929]">
                Ardly have an account?
                <NavLink to="/login" className="underline pl-1 text-primary">
                  LogIn
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
              className="btn bg-white text-primary border-[#e5e5e5] shadow-none"
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
              SignIn with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
