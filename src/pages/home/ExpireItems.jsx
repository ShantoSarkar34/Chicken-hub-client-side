import React, { useEffect, useState } from "react";
import loading_chicken from "../../assets/lotti-animation/loading_chicken.json";
import Lottie from "lottie-react";
import { useNavigate } from "react-router";
import axios from "axios";
import Countdown from "react-countdown";

const ExpireItems = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        "https://chicken-hub-server-side-public.onrender.com/nearly-expired-foods"
      )
      .then((res) => {
        setData(res.data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center min-h-screen items-center">
        <Lottie animationData={loading_chicken} className="w-24 lg:w-30" />
      </div>
    );
  }

  const handleDetails = (id) => {
    navigate(`/all-foods/${id}`);
  };

  // Countdown renderer
  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <p className="text-gray-600 font-medium">
        ⏳ Expire after :{" "}
        <span className="text-primary">
          {" "}
          {days !== 0 ? `${days}day` : <></>} {hours}h {minutes}m {seconds}s
        </span>
      </p>
    );
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
            return (
              <div
                key={food._id}
                className="flex flex-col items-center border border-[#bfccc0] rounded-md overflow-hidden py-4 relative"
              >
                <div className="bg-green-600 rounded-md text-white text-[10px] py-1 px-2 absolute top-3 right-3">
                  In Stock
                </div>
                <div className="border-secondary border text-primary backdrop-filter rounded-md text-sm py-1 px-1 absolute top-3 left-3">
                  {/* Countdown Animation */}
                  <Countdown
                    date={new Date(food.expireDate).getTime()}
                    renderer={renderer}
                  />
                </div>
                <div className="mb-4">
                  <img
                    src={food.foodPhoto}
                    alt="Seller-Img"
                    className="w-40 h-40 lg:w-60 lg:h-60 object-cover rounded-md"
                  />
                </div>
                <div className="text-center border-t border-[#bfccc0] border-dashed w-full">
                  <h3 className="text-[#212529] font-medium text-lg lg:text-2xl py-2">
                    {food.foodName}
                  </h3>
                  <p className="text-[#999999] text-lg font-normal">
                    Expire Date:{" "}
                    <span className="text-[#212529]">{food.expireDate}</span>
                  </p>
                  <p className="text-[#999999] text-lg font-normal">
                    Category:{" "}
                    <span className="text-[#212529]">{food.category}</span>
                  </p>
                  <p className="text-[#999999] text-lg font-normal">
                    Quantity:{" "}
                    <span className="text-[#212529]">{food.quantity}</span>
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
