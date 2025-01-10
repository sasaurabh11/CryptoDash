import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../public/logo.jpg";
import Hamburger from "hamburger-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="lg:h-20 h-16 flex items-center justify-between shadow-[#1026490F]/10 shadow-md bg-[#FFFFFF] w-full"
    >
      <div>
        <img src={logo} alt="Logo" className="cursor-pointer w-24 h-6 lg:ml-14 ml-4"></img>
      </div>
      
      {/* For larger screens */}
      <motion.div className="hidden lg:flex items-center">
        <motion.div
          className="text-lg font-semibold text-[#0F1629] mr-6 hover:text-[#2870EA] transition duration-300"
          whileHover={{ scale: 1.1 }}
        >
          <button>Crypto Taxes</button>
        </motion.div>

        <motion.div
          className="text-lg font-semibold text-[#0F1629] mr-6 hover:text-[#2870EA] transition duration-300"
          whileHover={{ scale: 1.1 }}
        >
          <button>Free Tools</button>
        </motion.div>

        <motion.div
          className="text-lg font-semibold text-[#0F1629] mr-6 hover:text-[#2870EA] transition duration-300"
          whileHover={{ scale: 1.1 }}
        >
          <button>Resource Center</button>
        </motion.div>

        <motion.div whileHover={{ scale: 1.1 }}>
          <button className="bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] hover:from-[#1B4AEF] hover:to-[#2870EA] px-8 py-2 text-white rounded-lg mx-14 transition-all duration-300">
            Get Started
          </button>
        </motion.div>
      </motion.div>
      
      {/* For smaller screens */}
      <div className="lg:hidden mr-4">
        <Hamburger toggled={isOpen} toggle={toggleOpen} />
      </div>
      
      {/* Popup menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden absolute w-full top-[4em] border-zinc-100 z-10  right-0  h-full  bg-white rounded-md shadow-md py-5"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="text-lg text-center  font-semibold text-[#0F1629] px-4 py-2">
              <motion.div
                className="cursor-pointer mb-5 hover:text-[#2870EA] transition duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <button>Crypto Taxes</button>
              </motion.div>

              <motion.div
                className="cursor-pointer mb-5 hover:text-[#2870EA] transition duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <button>Free Tools</button>
              </motion.div>

              <motion.div
                className="cursor-pointer mb-5 hover:text-[#2870EA] transition duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <button>Resource Center</button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.1 }}>
                <button className="bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] px-8 py-2 text-white rounded-lg mx-14 mt-4">
                  Get Started
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
