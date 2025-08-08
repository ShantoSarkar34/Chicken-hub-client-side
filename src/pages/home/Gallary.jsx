import React from "react";
import { GiKnifeFork } from "react-icons/gi";

const Gallary = () => {
  const gallary = [
    { id: 1, image: "/gallary/gallary_1.jpg" },
    { id: 2, image: "/gallary/gallary_2.jpg" },
    { id: 3, image: "/gallary/gallary_3.jpg" },
    { id: 4, image: "/gallary/gallary_4.jpg" },
    { id: 5, image: "/gallary/gallary_5.jpg" },
    { id: 6, image: "/gallary/gallary_6.jpg" },
    { id: 7, image: "/gallary/gallary_7.jpg" },
    { id: 8, image: "/gallary/gallary_8.jpg" },
  ];

  return (
    <div className="bg-white py-20 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 lg:mb-10">
          <h3 className="text-primary font-semibold mb-1 lg:mb-3">
            Restaurant Gallery
          </h3>
          <h1 className="text-[#212529] text-2xl lg:text-3xl font-semibold mb-5 lg:mb-10">
            See Our Gallery
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {gallary.map((data) => (
              <div
                key={data.id}
                className="relative group overflow-hidden bg-cover bg-no-repeat cursor-pointer"
              >
                <img src={data.image} alt="image" />

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center ">
                  <div className="border-3 border-white p-2 rounded-full text-white hover:text-primary hover:border-primary transition-all duration-200">
                    <GiKnifeFork className=" text-4xl " />
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-white text-sm bg-primary w-full py-4">
                    Beefsteak
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallary;
