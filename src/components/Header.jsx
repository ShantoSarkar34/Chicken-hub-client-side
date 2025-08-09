import React, { use } from "react";
import { NavLink } from "react-router";
import logo from "../assets/logo.png";
import { AuthContext } from "../authProvider/AuthProvider";
import { toast } from "react-toastify";

const Header = () => {
  const { user, logout } = use(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {
        toast.warn("Logout succesfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bg-[#f8fbf3] text-black shadow-none w-full fixed z-50">
      <div className="container mx-auto px-4 ">
        <div className="navbar p-0 py-2 lg:py-4   mx-auto ">
          <div className="navbar-start">
            <div className="dropdown ">
              <button
                tabIndex={0}
                role="button"
                className="pr-3 pt-2 cursor-pointer lg:hidden hover:text-primary focus:text-primary transition-all duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </button>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 pl-4 shadow bg-white space-y-[2px]"
              >
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    ` text-[14px] jakarta-font font-semibold hover:text-primary border-b pb-1 transition-all duration-200 ${
                      isActive
                        ? "text-primary border-primary "
                        : "text-[#0F0F0F80] border-white "
                    }`
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/fridge"
                  className={({ isActive }) =>
                    ` text-[14px] jakarta-font font-semibold hover:text-primary border-b pb-1 transition-all duration-200 ${
                      isActive
                        ? "text-primary"
                        : "text-[#0F0F0F80] border-white"
                    }`
                  }
                >
                  Fridge
                </NavLink>
                {user ? (
                  <>
                    <NavLink
                      to="/expired-food"
                      className={({ isActive }) =>
                        ` text-[14px] jakarta-font font-semibold hover:text-primary border-b pb-1 transition-all duration-200 ${
                          isActive
                            ? "text-primary"
                            : "text-[#0F0F0F80] border-white"
                        }`
                      }
                    >
                      Expired Food
                    </NavLink>
                    <NavLink
                      to="/add-food"
                      className={({ isActive }) =>
                        ` text-[14px] jakarta-font font-semibold hover:text-primary border-b pb-1 transition-all duration-200 ${
                          isActive
                            ? "text-primary"
                            : "text-[#0F0F0F80] border-white"
                        }`
                      }
                    >
                      Add Food
                    </NavLink>
                    <NavLink
                      to="/my-items"
                      className={({ isActive }) =>
                        ` text-[14px] jakarta-font font-semibold hover:text-primary border-b pb-1 transition-all duration-200 ${
                          isActive
                            ? "text-primary"
                            : "text-[#0F0F0F80] border-white"
                        }`
                      }
                    >
                      My Items
                    </NavLink>
                  </>
                ) : (
                  <></>
                )}
              </ul>
            </div>

            <a
              href="/"
              className=" text-sm lg:text-[28px] font-black text-primary flex items-center gap-1"
            >
              <img src={logo} alt="logo" className="w-22 lg:w-28" />
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-6">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-[14px] jakarta-font  font-semibold hover:text-primary transition-all duration-100 border-b-2 py-[1px] px-1 ${
                    isActive
                      ? "text-primary"
                      : "text-[#0F0F0F80] border-[#f8fbf3]"
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/fridge"
                className={({ isActive }) =>
                  ` text-[14px] jakarta-font font-semibold hover:text-primary  transition-all duration-100 border-b-2 py-[1px] px-1  ${
                    isActive
                      ? "text-primary"
                      : "text-[#0F0F0F80] border-[#f8fbf3]"
                  }`
                }
              >
                Fridge
              </NavLink>
              {user ? (
                <>
                  <NavLink
                    to="/expired-food"
                    className={({ isActive }) =>
                      ` text-[14px] jakarta-font font-semibold hover:text-primary pb-[1px] transition-all duration-100 border-b-2 py-[1px] px-1  ${
                        isActive
                          ? "text-primary "
                          : "text-[#0F0F0F80] border-[#f8fbf3]"
                      }`
                    }
                  >
                    Expired Food
                  </NavLink>
                  <NavLink
                    to="/add-food"
                    className={({ isActive }) =>
                      ` text-[14px] jakarta-font font-semibold hover:text-primary pb-[1px] transition-all duration-100 border-b-2 py-[1px] px-1  ${
                        isActive
                          ? "text-primary "
                          : "text-[#0F0F0F80] border-[#f8fbf3]"
                      }`
                    }
                  >
                    Add Food
                  </NavLink>
                  <NavLink
                    to="/my-items"
                    className={({ isActive }) =>
                      ` text-[14px] jakarta-font font-semibold hover:text-primary pb-[1px] transition-all duration-100 border-b-2 py-[1px] px-1  ${
                        isActive
                          ? "text-primary "
                          : "text-[#0F0F0F80] border-[#f8fbf3]"
                      }`
                    }
                  >
                    My Items
                  </NavLink>
                </>
              ) : (
                <></>
              )}
            </ul>
          </div>
          <div className="navbar-end">
            <div className="flex items-center gap-4">
              {/* profile photo is here  */}
              <div>
                {user ? (
                  <div className="relative flex cursor-pointer tooltip tooltip-bottom ">
                    <div className="tooltip-content bg-gray-200 backdrop-filter ">
                      <div className=" text-black p-2 ">
                        <h4 className="text-sm text-[#bc26cf] capitalize font-semibold">
                          {user.displayName}
                        </h4>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 transition-all duration-300 hover:border-[#bc26cf] border-[#19a831]">
                      <img src={user.photoURL} className=" object-cover" />
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </div>
              {/* buttons */}
              <div>
                {user ? (
                  <button
                    onClick={handleLogout}
                    className="py-3 px-5 lg:py-[12px] lg:px-[24px] rounded-[8px] text-white font-semibold text-[12px]  lg:text-[16px] cursor-pointer hover:shadow-sm shadow-primary bg-primary transition-all duration-200"
                  >
                    Log out
                  </button>
                ) : (
                  <div className="flex gap-4">
                    {/* log in button  */}
                    <NavLink
                      to="/login"
                      className="py-2 px-2 lg:py-[12px] lg:px-[24px] rounded-[8px] text-white font-semibold text-[12px]  lg:text-[16px] cursor-pointer hover:shadow-sm shadow-primary bg-primary transition-all duration-200"
                    >
                      Log In
                    </NavLink>
                    <NavLink
                      to="/signup"
                      className="py-2 px-2 lg:py-[12px] lg:px-[24px] rounded-[8px] text-white font-semibold text-[12px]  lg:text-[16px] cursor-pointer hover:shadow-sm shadow-primary bg-primary transition-all duration-200"
                    >
                      Register
                    </NavLink>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
