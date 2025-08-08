import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { FaAngleRight } from "react-icons/fa6";
import { NavLink, useNavigate } from "react-router";
import loading_chicken from "../../assets/lotti-animation/loading_chicken.json";
import Lottie from "lottie-react";
import axios from "axios";

const Fridge = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const navigate = useNavigate();
  const currnDate = new Date();
  const formattedDate = currnDate.toISOString().split("T")[0];
  const currentDate = formattedDate;
  const [category, setCategory] = useState("");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    document.title = "Chicken-Hub | Fridge";
    axios
      .get("http://localhost:3000/all-foods")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      });
  }, []);

  const handleDetails = (id) => {
    navigate(`/fridge/${id}`);
  };

  if (loading) {
    return (
      <div className="flex justify-center min-h-screen items-center ">
        <Lottie animationData={loading_chicken} className=" w-24 lg:w-30" />
      </div>
    );
  }

  const handleSearchChange = (e) => {
    setCategory(e.target.value);
  };
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const filteredFoods = data.filter((food) => {
    const matchesCategory = category ? food.category === category : true;
    const matchesSearch = food.foodName
      .toLowerCase()
      .includes(searchText.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Fridge banner section  */}
      <div className="fridge_banner w-full py-20 lg:py-32 relative">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-1">
            <NavLink to="/" className="flex items-center gap-1 text-white">
              <p>Home</p>
              <FaAngleRight className="text-sm mt-[2px]" />
            </NavLink>
            <p className="text-secondary">Fridge</p>
          </div>
          <div className="relative overflow-hidden">
            <Fade direction="up" duration={1500}>
              <h1 className=" uppercase font-semibold text-[40px] lg:text-[60px] text-secondary mb-2 lg:mb-4 ">
                Fridge
              </h1>
              <p className="text-white text-[17px] leading-[19px]">
                Transform Your Food Exprience into a Personal Paradise!
              </p>
            </Fade>
          </div>
        </div>
      </div>

      {/* Fridge section  */}

      <div className="bg-white py-20 w-full">
        <div className="container mx-auto px-4">
          <h1 className=" uppercase text-center text-primary font-semibold text-lg lg:text-2xl mb-2">
            All Fridge
          </h1>
          <p className="text-sm text-[#292929] text-center mb-5 lg:mb-8 border-b border-dotted border-[#bfccc0] pb-5 lg:pb-8">
            This month has been bustling with exciting developments in the world
            of Foods.
          </p>
          <div className="mb-10 lg:mb-20 w-full">
            <div className="flex flex-col gap-4 lg:flex-row-reverse lg:justify-between">
              {/* search input  */}
              <div className="flex items-center gap-0">
                <fieldset className="w-full space-y-1 text-gray-800">
                  <label htmlFor="Search" className="hidden">
                    Search
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                      <svg
                        fill="currentColor"
                        viewBox="0 0 512 512"
                        className=" w-4 h-4 dark:text-gray-800"
                      >
                        <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                      </svg>
                    </span>
                    <input
                      type="search"
                      name="Search"
                      value={searchText}
                      onChange={(e) => setSearchText(e.target.value)}
                      placeholder="Search..."
                      className="w-full lg:w-80 py-[9px] pl-10 text-sm rounded-l-md rounded-r-none sm:w-auto focus:outline-none border border-secondary"
                    />
                  </div>
                </fieldset>
                <button className="btn btn-secondary text-white border-none shadow-none rounded-r-md rounded-l-none">
                  Search
                </button>
              </div>
              {/* filter seciton  */}
              <div className="flex items-center gap-2">
                <h6 className=" lg:text-lg font-medium text-[#212529]">
                  Filter By :
                </h6>

                {/* category  */}
                <div className="">
                  <select
                    name="category"
                    required
                    defaultValue="Select Category"
                    onChange={handleCategoryChange}
                    className="w-full select border-[#999999] bg-[#F8Fbf3] focus:outline-none text-[#212529] font-medium"
                  >
                    <option disabled={true} className="">
                      Select Category
                    </option>
                    <option value="dairy">Dairy</option>
                    <option value="meat">Meat</option>
                    <option value="vegetables">Vegetables</option>
                    <option value="snaks">Snacks</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            {filteredFoods.length ? (
              filteredFoods.map((food) => (
                <div
                  key={food._id}
                  className="flex flex-col items-center  border border-[#bfccc0] rounded-md overflow-hidden py-4 relative"
                >
                  {food.expireDate < currentDate ? (
                    <>
                      <div className="bg-secondary  rounded-lg text-white  text-sm  py-1 px-3 absolute  top-2 right-2">
                        Expired
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="bg-green-600  rounded-lg text-white  text-sm  py-1 px-3 absolute  top-2 right-2">
                        In Stock
                      </div>
                    </>
                  )}

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
              ))
            ) : (
              <p>No foods found in this Name.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fridge;
