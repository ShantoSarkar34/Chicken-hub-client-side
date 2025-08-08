import React from "react";
import story_1 from "../../assets/about/about-img1.jpg";
import story_2 from "../../assets/about/about-img2.jpg";
import story_3 from "../../assets/about/about-img3.jpg";
import story_sign from "../../assets/about/about_sign.png";
import story_4 from "../../assets/about/story-1.jpg";

const OurStory = () => {
  return (
    <div className="bg-[#f6f6f6] py-20 w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8">
          {/* story images here  */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-6">
            <div className="space-y-5 lg:space-y-6">
              <img src={story_1} alt="story" className="rounded-md" />
              <img src={story_2} alt="story" className="rounded-md " />
            </div>
            <img src={story_3} alt="story" className="rounded-md lg:w-[48%]" />
          </div>
          {/* story content here  */}
          <div>
            <h5 className="text-primary font-medium lg:text-lg mb-2">
              Out Story
            </h5>
            <h1 className="text-[#212529] font-semibold text-2xl lg:text-4xl mb-5 lg:mb-8">
              Welcome to Laureel
            </h1>
            <p className="mb-3 lg:mb-5 text-[#999999] text-sm lg:text-[16px]">
              Quisque sit amet turpis et ipsum elementum facilisis. Quisque sed
              placerat libero. Pellentesque nec tellus sollicitudin,
              sollicitudin ligula non, tristique nibh Donec vitae turpis
              sagittis, cursus nunc ac, aliquet nunc. Donec viverra vel massa at
              posuere. Aliquam et fringilla augue consequat posuere sem, eu
              ornares viverra veleso massa at posuere. Aliquam et fringilla
              augue
            </p>
            <p className="text-[#999999] text-sm lg:text-[16px] mb-5 lg:mb-8">
              "Mauris tempor libero fringilla orci vivrra faucibue fringilla
              orci vivrra faucibus. Integer ullamcorper erat in tellus
              efficitur, quis porta sapien tincidunt. Nunc mattis lectus sed
              semper semper."
            </p>
            {/* sign and image  */}
            <div className="space-y-5">
              <img src={story_sign} alt="sign" />
              <div className="flex items-center gap-5">
                <img src={story_4} alt="story" className="rounded-full w-16" />
                <div className="">
                  <h5 className=" uppercase font-semibold text-primary">
                    John smith
                  </h5>
                  <p className="text-[#999999]">Master Chef</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
