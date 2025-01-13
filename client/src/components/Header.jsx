import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { delay, motion } from "motion/react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
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
    <motion.div
      className="flex flex-col justify-center items-center text-center my-20"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transistion={{ duration: 5 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transistion={{ delay: 0.2, duration: 0.8 }}
      >
        <p>Best Text to image Generator</p>
        <img src={assets.star_icon} alt="" />
      </motion.div>

      <motion.h1
        className="text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 2 }}
      >
        Turn text to <span className="text-blue-600">image</span>,in seconds.
      </motion.h1>
      <motion.p
        className="text-center max-w-xl mx-auto mt-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Unleash your creativity with AI. Turn your imagination into visual art
        in seconds - just, and watch the magic happen.
      </motion.p>

      <motion.button
        onClick={onClickHandelar}
        className="sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full "
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          default: { duration: 0.5 },
          opacity: { delay: 0.8, duration: 1 },
        }}
      >
        Generate Images
        <img src={assets.star_group} className="h-6" alt="" />
      </motion.button>

      <div className="flex flex-wrap justify-center mt-16 gap-3">
        {Array(6)
          .fill("")
          .map((_, i) => (
            <img
              className="rounded hover:scale-105 transistion-all duration-300 cursor-pointer max-sm:w-10"
              src={i % 2 == 0 ? assets.sample_img_1 : assets.sample_img_2}
              key={i}
              width={70}
              alt=""
            />
          ))}
      </div>

      <p className="mt-2 text-neutral-600">Generated Images from imagify</p>
    </motion.div>
  );
};

export default Header;
