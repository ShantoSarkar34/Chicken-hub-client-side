import React, { useEffect, useState } from "react";
import loading_chicken from "../../assets/lotti-animation/loading_chicken.json";
import { Fade } from "react-awesome-reveal";
import { FaAngleRight, FaMinus, FaPlus } from "react-icons/fa";
import { GoStarFill } from "react-icons/go";
import Lottie from "lottie-react";
import { NavLink, useLoaderData, useParams } from "react-router";

const FoodDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [food, setFood] = useState();
  const [active, setActive] = useState(0);
  const [loading, setLoading] = useState(true);
  const [activePla, setActivePla] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const buttons = ["Small", "Medium", "Large"];
  const singleFooders = ["Fresh Water", "Lemon Juse", "Cocacola", "MoJo"];

  const plus = () => setQuantity((q) => q + 1);
  const minus = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

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
              className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10"
            >
              <div className="bg-white p-10 flex justify-center items-center">
                <img
                  src={singleFood.foodPhoto}
                  alt="singleFood_photo"
                  className="lg:w-[50%] lg:h-[50%] object-cover"
                />
              </div>
              <div className="">
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
                  <h3 className="text-[#292929] font-medium text-[22px] mb-3">
                    Select Size
                  </h3>
                  <div className="flex items-center gap-3 mb-5 flex-wrap">
                    {buttons.map((label, index) => (
                      <button
                        key={index}
                        onClick={() => setActive(index)}
                        className={`border rounded-sm p-2 px-4 cursor-pointer ${
                          active === index
                            ? "border-2 border-[#292929] text-[#292929]"
                            : "border-[#0F0F0F80] text-[#0F0F0F80]"
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-[#292929] font-medium text-[22px] mb-3">
                    Select Soft Drink
                  </h3>
                  <div className="flex items-center gap-3 mb-5 flex-wrap">
                    {singleFooders.map((label, index) => (
                      <button
                        key={index}
                        onClick={() => setActivePla(index)}
                        className={`border rounded-sm p-2 px-4 cursor-pointer ${
                          activePla === index
                            ? "border-2 border-[#292929] text-[#292929]"
                            : "border-[#0F0F0F80] text-[#0F0F0F80]"
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-primary font-medium text-[20px] mb-4">
                    Quantity
                  </h3>
                  <div className="flex items-center gap-4 mb-8">
                    <button
                      className="bg-[#E1EBE2] p-2 cursor-pointer rounded-full text-sm text-[#0F0F0F80]  "
                      onClick={minus}
                    >
                      <FaMinus />
                    </button>
                    <p className="text-[#292929] font-medium text-lg">
                      {quantity}
                    </p>
                    <button
                      className="bg-[#E1EBE2] p-2 cursor-pointer rounded-full text-sm text-[#0F0F0F80]  "
                      onClick={plus}
                    >
                      <FaPlus />
                    </button>
                  </div>
                  <div className="">
                    <button className="  bg-primary rounded-full py-2 px-6 text-white uppercase cursor-pointer font-semibold shadow transition-all duration-200">
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
