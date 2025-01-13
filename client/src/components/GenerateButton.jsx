import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const GenerateButton = () => {
  const { user, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();
  const onClickHandelar = () => {
    if (user) {
      navigate("/result");
    } else {
      setShowLogin(true);
    }
  };
  return (
    <div className="pb-16 text-center">
      <h1 className="text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-neutral-800 py-6 md:py-16">
        See the magic. Try now
      </h1>
      <button
        onClick={onClickHandelar}
        className="inline-flex items-center gap-2 px-12 py-3 rounded-full bg-black text-white m-auto hover:scale-105 transition-all duration-500"
      >
        Generate Images
        <img src={assets.star_group} alt="" className="h-6" />
      </button>
    </div>
  );
};

export default GenerateButton;
