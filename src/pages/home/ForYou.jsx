import React from "react";
import { BiSolidBowlHot } from "react-icons/bi";
import { IoIosWine } from "react-icons/io";
import { GiChickenOven, GiChickenLeg } from "react-icons/gi";
import { PiChefHatDuotone } from "react-icons/pi";
import { LiaShippingFastSolid } from "react-icons/lia";

const ForYou = () => {
  return (
    <div className="bg-[#F6F6F6] py-20 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 lg:mb-10">
          <h3 className="text-primary font-semibold mb-1 lg:mb-3">
            For Your Comfort
          </h3>
          <h1 className="text-[#212529] text-2xl lg:text-3xl font-semibold">
            Stunning Things
          </h1>
        </div>
        {/* for you grid section  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3 lg:gap-10">
          <div className="bg-white rounded-md cursor-pointer p-6 md:p-4 lg:p-6 flex flex-col gap-2 lg:gap-5 text-center items-center border-b-2 border-white hover:border-primary transition-all duration-300 text-[#999999] hover:text-primary">
            <BiSolidBowlHot className="text-5xl" />
            <h4 className="text-xl font-medium text-[#212529]">
              High Quality Foods
            </h4>
            <p className="text-[#999999] text-sm lg:text-[16px]">
              Etiam feugiat eleifend est, sed luctus odio tempor vitae. Vivamus
              maximus scelerisque ipsum nec commodo.
            </p>
          </div>
          <div className="bg-white rounded-md cursor-pointer p-6 md:p-4 lg:p-6 flex flex-col gap-2 lg:gap-5 text-center items-center border-b-2 border-white hover:border-primary transition-all duration-300 text-[#999999] hover:text-primary">
            <IoIosWine className="text-5xl" />
            <h4 className="text-xl font-medium text-[#212529]">
              Inspiring Recipes
            </h4>
            <p className="text-[#999999] text-sm lg:text-[16px]">
              Etiam feugiat eleifend est, sed luctus odio tempor vitae. Vivamus
              maximus scelerisque ipsum nec commodo.
            </p>
          </div>
          <div className="bg-white rounded-md cursor-pointer p-6 md:p-4 lg:p-6 flex flex-col gap-2 lg:gap-5 text-center items-center border-b-2 border-white hover:border-primary transition-all duration-300 text-[#999999] hover:text-primary">
            <GiChickenOven className="text-5xl" />
            <h4 className="text-xl font-medium text-[#212529]">
              Salutary Meals
            </h4>
            <p className="text-[#999999] text-sm lg:text-[16px]">
              Etiam feugiat eleifend est, sed luctus odio tempor vitae. Vivamus
              maximus scelerisque ipsum nec commodo.
            </p>
          </div>
          <div className="bg-white rounded-md cursor-pointer p-6 md:p-4 lg:p-6 flex flex-col gap-2 lg:gap-5 text-center items-center border-b-2 border-white hover:border-primary transition-all duration-300 text-[#999999] hover:text-primary">
            <PiChefHatDuotone className="text-5xl" />
            <h4 className="text-xl font-medium text-[#212529]">
              Veteran Staff
            </h4>
            <p className="text-[#999999] text-sm lg:text-[16px]">
              Etiam feugiat eleifend est, sed luctus odio tempor vitae. Vivamus
              maximus scelerisque ipsum nec commodo.
            </p>
          </div>
          <div className="bg-white rounded-md cursor-pointer p-6 md:p-4 lg:p-6 flex flex-col gap-2 lg:gap-5 text-center items-center border-b-2 border-white hover:border-primary transition-all duration-300 text-[#999999] hover:text-primary">
            <GiChickenLeg className="text-5xl" />
            <h4 className="text-xl font-medium text-[#212529]">
              Pristine Ingredients
            </h4>
            <p className="text-[#999999] text-sm lg:text-[16px]">
              Etiam feugiat eleifend est, sed luctus odio tempor vitae. Vivamus
              maximus scelerisque ipsum nec commodo.
            </p>
          </div>
          <div className="bg-white rounded-md cursor-pointer p-6 md:p-4 lg:p-6 flex flex-col gap-2 lg:gap-5 text-center items-center border-b-2 border-white hover:border-primary transition-all duration-300 text-[#999999] hover:text-primary">
            <LiaShippingFastSolid className="text-5xl" />
            <h4 className="text-xl font-medium text-[#212529]">
              Express Delivery
            </h4>
            <p className="text-[#999999] text-sm lg:text-[16px]">
              Etiam feugiat eleifend est, sed luctus odio tempor vitae. Vivamus
              maximus scelerisque ipsum nec commodo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForYou;
