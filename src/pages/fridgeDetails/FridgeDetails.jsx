import React, { use, useEffect, useState } from "react";
import loading_chicken from "../../assets/lotti-animation/loading_chicken.json";
import { Fade } from "react-awesome-reveal";
import { FaAngleRight, FaMinus, FaPlus } from "react-icons/fa";
import { GoStarFill } from "react-icons/go";
import Lottie from "lottie-react";
import { NavLink, useLoaderData, useParams } from "react-router";
import { AuthContext } from "../../authProvider/AuthProvider";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const FridgeDetails = () => {
  const { user } = use(AuthContext);
  const { id } = useParams();
  const data = useLoaderData();
  const [food, setFood] = useState();
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const currnDate = new Date();
  const formattedDate = currnDate.toISOString().split("T")[0];
  const currentDate = formattedDate;
  const userEmail = user?.email;

  useEffect(() => {
    const filterData = data.filter((res) => res._id === id);
    setFood(filterData);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center min-h-screen items-center ">
        <Lottie animationData={loading_chicken} className=" w-24 lg:w-30" />
      </div>
    );
  }

  const handleAddNote = () => {
    toast.success("Note added seccessfully!");
    setShowModal(false);
  };

  return (
    <div>
      {/* details banner section  */}
      <div className="my_items_banner w-full py-20 lg:py-32 relative">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-1">
            <NavLink to="/" className="flex items-center gap-1 text-white">
              <p>Home</p>
              <FaAngleRight className="text-sm mt-[2px]" />
            </NavLink>
            <p className="text-secondary">Food Details</p>
          </div>
          <div className="relative overflow-hidden">
            <Fade direction="up" duration={1500}>
              <h1 className=" uppercase font-semibold text-[40px] lg:text-[60px] text-secondary mb-2 lg:mb-4 ">
                Food Details
              </h1>
              <p className="text-white text-[17px] leading-[19px]">
                Transform Your Food Exprience into a Personal Paradise!
              </p>
            </Fade>
          </div>
        </div>
      </div>
      {/* food details  */}
      <div className="bg-[#f6f6f6] py-20 lg:py-28 w-full">
        <div className="container mx-auto px-4">
          {food.map((singleFood) => (
            <div
              key={singleFood._id}
              className="grid grid-cols-1 lg:grid-cols-5 gap-5 lg:gap-10"
            >
              <div className="bg-white p-10 flex justify-center items-center lg:col-span-2 ">
                <img
                  src={singleFood.foodPhoto}
                  alt="singleFood_photo"
                  className="lg:w-[80%] lg:h-[80%] object-cover"
                />
              </div>
              <div className="lg:col-span-3">
                <div className=" my-2 flex items-center  gap-2">
                  <div className="flex items-center gap-1 justify-center text-lg ">
                    <GoStarFill className="text-[#F2B827]" />
                    <GoStarFill className="text-[#F2B827]" />
                    <GoStarFill className="text-[#F2B827]" />
                    <GoStarFill className="text-[#F2B827]" />
                    <GoStarFill className="text-[#F2B827]" />
                  </div>
                </div>
                <h1 className="text-primary font-normal text-[40px] lg:text-[52px] mb-4">
                  {singleFood.foodName}
                </h1>
                <p className="text-[#0F0F0F80] lg:w-[80%] ">
                  {singleFood.description}
                </p>
                <div className="flex items-center gap-3 my-4">
                  <h3 className="text-[#292929] font-medium text-[17px]">
                    Expire Date :
                    <span className="text-[#0F0F0F80]">
                      {" "}
                      {singleFood.expireDate}
                    </span>
                  </h3>
                </div>
                <div>
                  <div className="">
                    <button
                      disabled={!userEmail}
                      onClick={() => setShowModal(true)}
                      className={`px-4 py-2 rounded text-white ${
                        userEmail
                          ? "bg-primary cursor-pointer"
                          : "bg-gray-300 cursor-not-allowed"
                      }`}
                    >
                      Add note
                    </button>
                  </div>

                  {showModal && (
                    <dialog className="modal modal-open ">
                      <div className="modal-box bg-white">
                        <h3 className="font-bold text-xl mb-3 text-primary">
                          Add Note
                        </h3>
                        <div className="mb-5">
                          <p className="text-[#292929] mb-2 border-b border-dotted border-[#bfccc0] pb-2">
                            Adding Date :{" "}
                            <span className="text-primary text-sm">
                              {currentDate}
                            </span>
                          </p>
                          <p className="mb-2  text-[#292929]">
                            Write your note
                          </p>
                          <form onSubmit={handleAddNote} className="realative">
                            <textarea
                              name="note"
                              required
                              rows={3}
                              placeholder="Write your note..."
                              className="border border-[#bfccc0] rounded-md w-full p-4 "
                            ></textarea>
                            <button
                              type="submit"
                              className="btn btn-primary border-none shadow-none text-white absolute left-6 bottom-6"
                            >
                              Add Note
                            </button>
                          </form>
                        </div>
                        <div className="flex items-center justify-end">
                          <button
                            className="btn border-none shadow-none text-white"
                            onClick={() => setShowModal(false)}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </dialog>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FridgeDetails;
