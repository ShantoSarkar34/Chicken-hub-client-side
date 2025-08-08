import React, { use, useEffect, useState } from "react";
import loading_chicken from "../../assets/lotti-animation/loading_chicken.json";
import Lottie from "lottie-react";
import { useNavigate } from "react-router";
import axios from "axios";
import CountUp from "react-countup";

const ExpireItems = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const currnDate = new Date();
  const formattedDate = currnDate.toISOString().split("T")[0];
  const currentDate = formattedDate;

  useEffect(() => {
    axios
      .get("https://chicken-hub-server-side-public.onrender.com/nearly-expired-foods")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      });
  }, []);

  const calculateDaysLeft = (expireDate, currentDate) => {
    const expire = new Date(expireDate);
    const current = new Date(currentDate || new Date());
    const diffTime = expire - current;
    return Math.max(0, Math.ceil(diffTime / (1000 * 24 * 60 * 60)));
  };

  if (loading) {
    return (
      <div className="flex justify-center min-h-screen items-center ">
        <Lottie animationData={loading_chicken} className=" w-24 lg:w-30" />
      </div>
    );
  }

  const handleDetails = (id) => {
    navigate(`/all-foods/${id}`);
  };

  return (
    <div className="bg-white py-20 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 lg:mb-10">
          <h3 className="text-primary font-semibold mb-1 lg:mb-3">
            Stunning Things
          </h3>
          <h1 className="text-[#212529] text-2xl lg:text-3xl font-semibold">
            Nearly Expiry Items
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-7 lg:grid-cols-3">
          {data.map((food) => {
            const daysLeft = calculateDaysLeft(food.expireDate, currentDate);
            const initialTime = daysLeft * 24 * 60 * 60;

            const hours = Math.floor(initialTime / 3600);
            const minutes = Math.floor((initialTime % 3600) / 60);
            const seconds = initialTime % 60;

            return (
              <div
                key={food._id}
                className="flex flex-col items-center  border border-[#bfccc0] rounded-md overflow-hidden py-4 relative"
              >
                <div className="bg-green-600  rounded-md text-white  text-[10px]  py-1 px-2 absolute  top-3 right-3">
                  In Stock
                </div>
                <div className="border-[#bfccc0] border text-primary backdrop-filter rounded-md  text-sm  py-1 px-1 absolute top-3 left-3">
                  <span className="text-gray-600">⏳Expire after : </span>
                  {String(hours).padStart(2, "0")}:
                  {String(minutes).padStart(2, "0")}:
                  {String(seconds).padStart(2, "0")}
                  <p></p>
                </div>
                <div className="mb-4">
                  <img
                    src={food.foodPhoto}
                    alt="Seller-Img"
                    className=" w-40 h-40 lg:w-60 lg:h-60 object-cover rounded-md"
                  />
                </div>
                <div className="text-center border-t border-[#bfccc0] border-dashed w-full">
                  <h3 className="text-[#212529] font-medium text-lg lg:text-2xl py-2">
                    {food.foodName}
                  </h3>
                  <p className="text-[#999999] text-lg font-normal">
                    Expire Date :{" "}
                    <span className="text-[#212529]"> {food.expireDate}</span>{" "}
                  </p>
                  <p className="text-[#999999] text-lg font-normal">
                    Category :{" "}
                    <span className="text-[#212529]"> {food.category}</span>{" "}
                  </p>
                  <p className="text-[#999999] text-lg font-normal">
                    Quantity :{" "}
                    <span className="text-[#212529]"> {food.quantity}</span>{" "}
                  </p>
                  <div className="flex justify-center">
                    <button
                      onClick={() => {
                        handleDetails(food._id);
                      }}
                      className="btn bg-primary border-none mt-2 w-[80%] shadow-none text-white"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExpireItems;
