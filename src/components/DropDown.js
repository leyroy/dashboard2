import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { FaRegCircle } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function DropDown({
  isOpen,
  setIsOpen,
  data,
  title,
  Icon,
  tab,
  isColor,
}) {
  const [isDropOpen, setIsDropIsOpen] = useState(false);
  return (
    <div className={`${!isOpen && "px-2 "}`}>
      <div
        onClick={() => {
          setIsOpen(true);
          setIsDropIsOpen(!isDropOpen);
        }}
        className={`flex justify-start ${
          !isOpen ? "justify-center items-center" : "px-2"
        } rounded py-1 items-center  gap-1 ${
          isColor
            ? "bg-bluecolor text-white"
            : "hover:bg-textcolor hover:bg-opacity-20 text-textcolor hover:text-white"
        } cursor-pointer`}
      >
        <div className={`w-6 h-6 ml-1 text-2xl font-semibold`}>{Icon}</div>
        <h1
          className={`${isOpen ? "block whitespace-nowrap text-sm" : "hidden"}`}
        >
          {title}
        </h1>
        <div
          className={` transition-all duration-150 ${
            isDropOpen && "-rotate-90"
          } ${isOpen ? "block ml-auto" : "hidden"}`}
        >
          <IoIosArrowBack />
        </div>
      </div>
      <AnimatePresence>
        {isDropOpen && isOpen && (
          <motion.ul
            key="box"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`overflow-hidden px-2 box`}
          >
            {data.map((item, id) => (
              <Link
                to={`/?tab=${item.link}`}
                key={id}
                className={`px-2 hover:bg-textcolor hover:bg-opacity-10 duration-300  my-1 cursor-pointer hover:text-white ${
                  tab === item?.link && "bg-textcolor bg-opacity-25"
                } rounded duration-300 flex items-center py-0.5 justify-start text-sm ease-linear transition-opacity gap-1`}
              >
                <FaRegCircle className="w-4 h-4" />
                <li className="text-sm whitespace-nowrap">{item.lable}</li>
              </Link>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
