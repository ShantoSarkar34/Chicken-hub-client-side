import React, { use, useEffect, useRef, useState } from "react";
import blog_1 from "../../assets/about/about-img3.jpg";
import { NavLink, useNavigate } from "react-router";
import { FaAngleRight, FaMinus, FaPlus } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { toast } from "react-toastify";
import { Fade } from "react-awesome-reveal";
import { AuthContext } from "../../authProvider/AuthProvider";
import { FaPray } from "react-icons/fa";
import loading_chicken from "../../assets/lotti-animation/loading_chicken.json";
import Lottie from "lottie-react";

const AddFood = () => {
  const { user, loading } = use(AuthContext);
  const [quantity, setQuantity] = useState(1);
  const quantityRef = useRef();
  const plus = () => setQuantity((q) => q + 1);
  const minus = () => setQuantity((q) => (q > 1 ? q - 1 : 1));
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Chicken-Hub | Add-Foods";
  }, [user]);

  const handleUploadFood = (e) => {
    e.preventDefault();
    const form = e.target;
    const foodName = form.name.value;
    const foodPhoto = form.photo.value;
    const expireDate = form.expDate.value;
    const description = form.description.value;
    const quantity = quantityRef.current?.textContent;
    const category = form.category.value;
    const currnDate = new Date();
    const formattedDate = currnDate.toISOString().split("T")[0];
    const currentDate = formattedDate;
    const userEmail = user.email;
    const newFood = {
      foodName,
      foodPhoto,
      expireDate,
      description,
      quantity,
      currentDate,
      category,
      userEmail,
    };

    fetch("https://chicken-hub-server-side-public.onrender.com/all-foods", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newFood),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Your Food added to Database !");
          e.target.reset();
          setQuantity(1);
          navigate("/my-items");
        }
      });
  };

  if (loading) {
    return (
      <div className="flex justify-center min-h-screen items-center ">
        <Lottie animationData={loading_chicken} className=" w-24 lg:w-30" />
      </div>
    );
  }

  return (
    <div>
      {/* add Foods banner section  */}
      <div className="add_food_banner w-full py-20 lg:py-44 relative">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-1">
            <NavLink to="/" className="flex items-center gap-1 text-white">
              <p>Home</p>
              <FaAngleRight className="text-sm mt-[2px]" />
            </NavLink>
            <p className="text-secondary">Add Food</p>
          </div>
          <div className="relative overflow-hidden">
            <Fade direction="up" duration={1500}>
              <h1 className=" uppercase font-semibold text-[40px] lg:text-[60px] text-secondary mb-2 lg:mb-4 ">
                Add Foods
              </h1>
              <p className="text-white text-[17px] leading-[19px]">
                Transform Your Food Exprience into a Personal Paradise!
              </p>
            </Fade>
          </div>
        </div>
      </div>
      {/* add Food input section  */}
      <div className="bg-white w-full py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-primary font-medium text-[24px] lg:text-[30px] mb-5">
                Add Your Foods Here
              </h2>
              <p className="text-[#999999] tracking-[.5px] mb-10">
                Whether you have a question, a suggestion, or just want to say
                hello, this is the place to do it. Please fill out the form
                below with your details and message, and we'll get back to you
                as soon as possible
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* blog image here */}
                <div className="">
                  <img src={blog_1} alt="blog_img" className="w-full" />
                </div>
                {/* blog content start  */}
                <div className="bg-[#E1EBE2] p-10 lg:p-8">
                  <h2 className="text-[#202529] text-lg font-medium lg:text-xl mb-4">
                    Creative Garden Layouts for Every space
                  </h2>
                  <p className="text-[#999999]">
                    This month has been bustling with exciting developments in
                    the world of Foods. From groundbreaking new devices to
                    innovative...
                  </p>
                </div>
              </div>
            </div>
            {/* input  */}
            <div className="bg-[#E1EBE2] w-full rounded-sm p-4 lg:px-8">
              <h2 className="text-secondary font-medium text-[24px] lg:text-[30px] mb-5 text-center">
                Food Details Input
              </h2>
              <form onSubmit={handleUploadFood}>
                {/* user email  */}
                <div className="mb-3">
                  <label className="text-[#212529]">User Email:</label>
                  <br />
                  <input
                    type="email"
                    name="userEmail"
                    value= {user?.email}
                    className="mt-1 bg-[#F8Fbf3] border border-[#999999] rounded-sm focus:outline-none py-2 px-3 w-full text-[#999999] placeholder:text-[#999999]"
                  />
                </div>
                {/* food title  */}
                <div className="mb-3">
                  <label className="text-[#212529]">Food Title:</label>
                  <br />
                  <input
                    type="name"
                    name="name"
                    required
                    placeholder="Your Food Name"
                    className="mt-1 bg-[#F8Fbf3] border border-[#999999] rounded-sm focus:outline-none py-2 px-3 w-full text-[#999999] placeholder:text-[#999999]"
                  />
                </div>
                {/* food photo url  */}
                <div className="mb-3">
                  <label className="text-[#212529]">Food Photo URL:</label>
                  <br />
                  <input
                    type="text"
                    name="photo"
                    required
                    placeholder="Your Food Photo URL"
                    className="mt-1 bg-[#F8Fbf3] border border-[#999999] rounded-sm focus:outline-none py-2 px-3 w-full text-[#999999] placeholder:text-[#999999]"
                  />
                </div>

                {/* category  */}
                <div className="mb-3">
                  <label className="text-[#212529]">Select Category</label>
                  <select
                    name="category"
                    required
                    defaultValue="Select Category"
                    className="w-full mt-1 select border-[#999999] bg-[#F8Fbf3] focus:outline-none text-[#212529] font-medium"
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
                <div className="grid grid-cols-2 gap-4 pt-1 mb-3">
                  {/* Food quantity  */}
                  <div>
                    <label className="text-[#212529]">Quantity :</label>
                    <br />
                    <div className="relative flex items-center gap-1 mt-1  w-full bg-[#F8Fbf3] border border-[#999999] rounded-sm py-2 justify-center">
                      <button
                        type="button"
                        className="p-1 cursor-pointer rounded-full text-sm text-white absolute left-3 bg-gray-300"
                        onClick={minus}
                      >
                        <FaMinus />
                      </button>
                      <p
                        ref={quantityRef}
                        className="text-[#212529] font-medium"
                      >
                        {quantity}
                      </p>
                      <button
                        type="button"
                        className="p-1 cursor-pointer rounded-full text-sm text-white absolute right-3 bg-gray-300"
                        onClick={plus}
                      >
                        <FaPlus />
                      </button>
                    </div>
                  </div>

                  {/* expire date  */}
                  <div className="">
                    <label className="text-[#212529]">Expire Date:</label>
                    <br />
                    <div className="relative">
                      <input
                        type="date"
                        name="expDate"
                        required
                        className="mt-1 w-full bg-[#F8Fbf3] border border-[#999999] rounded-sm focus:outline-none py-2 px-3 text-[#999999] placeholder:text-[#999999] appearance-none"
                      />
                      <div className="pointer-events-none absolute right-5 top-1/2 -translate-y-2/5 text-[#999999]">
                        <SlCalender />
                      </div>
                    </div>
                  </div>
                </div>
                {/* description  */}
                <div className="mb-5 lg:mb-10">
                  <label className="text-[#212529]">Food Description :</label>
                  <br />
                  <textarea
                    name="description"
                    rows={5}
                    required
                    placeholder="Your Food Description"
                    className="mt-1 bg-[#F8Fbf3] border border-[#999999] rounded-sm focus:outline-none py-2 px-3 w-full text-[#999999] placeholder:text-[#999999]"
                  ></textarea>
                </div>
                {/* submit button  */}
                <div className="flex justify-center mb-5">
                  <button
                    type="submit"
                    className="btn w-[90%] bg-primary border-none"
                  >
                    {" "}
                    Upload Food
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFood;
