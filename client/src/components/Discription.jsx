import React from "react";
import { assets } from "../assets/assets";

const Discription = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center my-24 p-6 md:px-28">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-2">
          Create AI Images
        </h1>
        <p className="text-gray-500 mb-8">Turn your imagination into cisuals</p>
        <div className="flex flex-col gap-5 md:gap-14 md:flex-row items-center ">
          <img
            src={assets.sample_img_1}
            className="w-80 xl:w-96 rounded-lg "
            alt=""
          />
          <div className="">
            <h2 className="text-3xl font-medium max-w-lg mb-4">
              Introducing the AI-Powered Text to Image Generator
            </h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
              error impedit magnam velit voluptate numquam laborum soluta, vitae
              ut et aliquam omnis necessitatibus molestiae quam possimus
              delectus tempore temporibus modi? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quibusdam, ad.
            </p>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
              pariatur ipsum consequuntur odit itaque beatae necessitatibus
              earum nemo modi, ducimus rem, quidem iste inventore ut debitis
              voluptatum nostrum magni doloribus. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Obcaecati, pariatur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discription;
