import React, { useState } from "react";
import Slider from "react-slick";
import { FaChevronRight } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fade } from "react-awesome-reveal";

const NextArrow = ({ onClick }) => (
  <div
    className="absolute z-10 right-4 top-1/2 transform -translate-y-1/2 cursor-pointer "
    onClick={onClick}
  >
    <FaChevronRight className="text-primary text-xl" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute z-10 left-4 top-1/2 transform -translate-y-1/2 cursor-pointer "
    onClick={onClick}
  >
    <FaChevronRight className="text-primary rotate-180 text-xl" />
  </div>
);

const BannerSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    { id: 1, image: "/images/banner_1.webp" },
    { id: 2, image: "/images/banner_2.jpg" },
    { id: 3, image: "/images/banner_3.jpg" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    swipe: true,
    draggable: true,
    beforeChange: (_, next) => setActiveSlide(next),
  };

  const currentBg = slides[activeSlide]?.image;
  return (
    <div
      className="banner w-full py-10 lg:py-14 relative overflow-hidden transition-all duration-500"
      style={{
        backgroundImage: `linear-gradient(to bottom, #29292995, #29292980), url(${currentBg})`,
      }}
    >
      <Slider {...settings}>
        {slides.map((item, index) => (
          <div key={index}>
            <div className="container mx-auto px-4">
              <div className="w-full">
                {/* Banner text */}
                <div className="text-center">
                  <div className="flex mb-4 lg:mb-0">
                    <p className="border text-[#FCB819] py-1 px-4 rounded-full uppercase text-[9px] lg:text-sm">
                      Best Quality Foods
                    </p>
                  </div>
                  <div className="relative overflow-hidden">
                    <Fade direction="up" duration={1500}>
                      <h1 className="uppercase text-white jakarta-font text-[42px] leading-[52px] md:text-[42px] lg:text-[70px]  md:leading-[42px] lg:leading-[85px] ">
                        Discover <br /> amazing{" "}
                        <span className="text-secondary">
                          variety <br /> of Foods
                        </span>
                      </h1>
                    </Fade>
                  </div>

                  <p className="text-white text-sm lg:text-[18px] font-normal my-5 lg:my-6 ">
                    From vibrant flowering plants to lush tropical greens, we
                    offer an <br /> incredible variety to turn your space into a
                    living paradise.
                  </p>

                  <button className="lg:mt-3 bg-primary rounded-full py-2 px-8 text-white uppercase cursor-pointer font-semibold heebo-font">
                    Order now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSlider;
