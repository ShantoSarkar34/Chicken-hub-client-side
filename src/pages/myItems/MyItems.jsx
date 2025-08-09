import React, { use, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { FaAngleRight } from "react-icons/fa6";
import { AuthContext } from "../../authProvider/AuthProvider";
import { LuDelete } from "react-icons/lu";
import { FaPenToSquare } from "react-icons/fa6";
import Swal from "sweetalert2";
import { Fade } from "react-awesome-reveal";
import loading_chicken from "../../assets/lotti-animation/loading_chicken.json";
import Lottie from "lottie-react";

const MyItems = () => {
  const { user } = use(AuthContext);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const currnDate = new Date();
  const formattedDate = currnDate.toISOString().split("T")[0];
  const currentDate = formattedDate;

  useEffect(() => {
    document.title = "Plant-BD | My-Plants";
    if (user?.email) {
      fetch(
        `https://chicken-hub-server-side-public.onrender.com/my-items?email=${user.email}`
      )
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          setData(data);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }
  }, [user]);

  if (loading) {
    return (
      <div className="flex justify-center min-h-screen items-center ">
        <Lottie animationData={loading_chicken} className=" w-24 lg:w-30" />
      </div>
    );
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://chicken-hub-server-side-public.onrender.com/all-foods/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((dat) => {
            if (dat.deletedCount) {
              const remainingUser = data.filter((data) => data._id !== id);
              setData(remainingUser);
            }
          });
        Swal.fire({
          title: "Deleted!",
          text: "Your plant has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const updateBtn = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You can update your information!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Go to update page",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate(`/updateInfo/${id}`);
      }
    });
  };

  return (
    <div>
      {/* My Items banner section  */}
      <div className="my_items_banner w-full py-20 lg:py-32 relative">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-1">
            <NavLink to="/" className="flex items-center gap-1 text-white">
              <p>Home</p>
              <FaAngleRight className="text-sm mt-[2px]" />
            </NavLink>
            <p className="text-secondary">My Items</p>
          </div>
          <div className="relative overflow-hidden">
            <Fade direction="up" duration={1500}>
              <h1 className=" uppercase font-semibold text-[40px] lg:text-[60px] text-secondary mb-2 lg:mb-4 ">
                MY items
              </h1>
              <p className="text-white text-[17px] leading-[19px]">
                Transform Your Food Exprience into a Personal Paradise!
              </p>
            </Fade>
          </div>
        </div>
      </div>
      {/* my items data  */}
      <div className="bg-white w-full py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-center  ">
            <div className=" w-full lg:w-[50%]">
              {/* user and data info  */}
              <div className="flex flex-col md:flex-row justify-between md:items-center mb-6 lg:mb-8 border-b border-dotted  pb-6 lg:pb-4 border-gray-200">
                <p className="text-[#292929] ">
                  Total Found :{" "}
                  <span className="text-[16px] font-semibold">
                    {data?.length ? data.length : 0} Foods{" "}
                  </span>
                </p>
                <h2 className="text-[#999999] text-[16px]  font-medium">
                  Added By :{" "}
                  <span className="text-[#292929]"> {user.displayName}</span>{" "}
                </h2>
              </div>
              {/* all plants  */}
              <div>
                {data.length !== 0 ? (
                  <div  className="overflow-x-auto">
                    <div className="min-w-full">
                    <div className="flex justify-between  border border-gray-300  ">
                      <h3 className="border-r border-gray-300 px-[13px] lg:px-8 p-4  font-medium text-[#292929]">
                        Images
                      </h3>
                      <h3 className="p-4  font-medium text-[#292929]">
                        Details
                      </h3>
                      <h3 className="border-l border-gray-300 px-[27px] lg:px-[42px]  p-4  font-medium text-[#292929]">
                        Button
                      </h3>
                    </div>
                    <div className="-mt-[1px] space-y-[-1px]">
                      {data?.map((food) => (
                        <div
                          key={food._id}
                          className="flex w-full border border-gray-300"
                        >
                          <div className="bg-white shadow-sm rounded-md m-2 lg:m-4 p-2 lg:p-4">
                            <img
                              src={food.foodPhoto}
                              alt="food_img"
                              className="w-16 h-14 object-cover rounded-sm"
                            />
                          </div>
                          <div className="flex w-full justify-between border-l border-gray-300 ">
                            <div className="p-3 relative w-full">
                              <h2 className="text-primary font-medium text-[13px] lg:text-[20px]">
                                {food.foodName}
                              </h2>
                              <h3 className="text-[#707070] text-[11px] lg:text-[16px]">
                                Category :{" "}
                                <span className="text-[#292929]">
                                  {" "}
                                  {food.category}
                                </span>
                              </h3>
                              <h3 className="text-[#707070] text-[11px] lg:text-[16px]">
                                Quantity :{" "}
                                <span className="text-[#292929]">
                                  {" "}
                                  {food.quantity}
                                </span>
                              </h3>
                              <h3 className="text-[#707070] text-[11px] lg:text-[16px]">
                                Upload Date :{" "}
                                <span className="text-[#292929]">
                                  {" "}
                                  {food.currentDate}
                                </span>
                              </h3>
                              {food.expireDate < currentDate ? (
                                <>
                                  <div className="bg-white border  rounded-full text-secondary px-2 text-[10px]  lg:text-sm  py-1 lg:px-3 absolute  top-1 lg:top-2 right-1 lg:right-2">
                                    Expired
                                  </div>
                                </>
                              ) : (
                                <></>
                              )}
                            </div>
                            {/* button are here  */}
                            <div className="border-l border-gray-300">
                              <div className="flex flex-col gap-2 lg:gap-4 items-center p-2 lg:p-4">
                                <button
                                  onClick={() => updateBtn(food._id)}
                                  className="cursor-pointer border-none shadow-none bg-[#29292995] btn text-[12px] lg:text-[14px]"
                                >
                                  <FaPenToSquare className="text-[10px] lg:text-[17px] " />
                                  Update
                                </button>
                                <button
                                  onClick={() => handleDelete(food._id)}
                                  className=" btn-primary border-none shadow-none cursor-pointer  btn text-[12px] lg:text-[14px]"
                                >
                                  <LuDelete className="text-[14px] lg:text-[22px]" />
                                  Delete
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    </div>
                  </div>
                ) : (
                  <div className="space-y-4 lg:space-y-5 mt-10 lg:mt-20">
                    <h4 className="text-secondary text-lg font-semibold text-center">
                      No Food Item Added by You..!
                    </h4>
                    <div className="flex justify-center">
                      <NavLink
                        to="/add-food"
                        className="bg-primary btn border-none w-40"
                      >
                        Add Food
                      </NavLink>
                    </div>
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

export default MyItems;
