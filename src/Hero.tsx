import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

function Hero() {
  return (
    <div className="w-full h-auto bg-black flex flex-col items-center justify-center p-6 text-white font-inter">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="navbar w-4/5 h-12 flex items-center justify-between"
      >
        <div className="navbar-logo h-full flex items-center justify-center gap-3">
          <div className="h-10 w-24 bg-[url(https://framerusercontent.com/images/N0ZiVbjC9Abdh48Aq8g7qL604.svg)] bg-cover bg-center"></div>
        </div>
        <div className="navbar-main max-lg:hidden h-full rounded-full bg-[#222] px-8 flex items-center justify-center gap-6 text-sm border border-neutral-700">
          <button className="hover:text-neutral-400">Products</button>
          <button className="hover:text-neutral-400">About</button>
          <button className="hover:text-neutral-400">Blogs</button>
          <button className="hover:text-neutral-400">Pricing</button>
          <button className="hover:text-neutral-400">Contact</button>
        </div>
        <motion.div
          initial={{ backgroundColor: "#ffffff", color: "#000000" }}
          whileHover={{
            backgroundColor: "rgba(255,255,255,0)",
            color: "#ffffff",
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="navbar-cta h-full px-8 flex items-center justify-center text-sm rounded-full font-medium border border-white"
        >
          <span>BUY TEMPLATE</span>
        </motion.div>
      </motion.div>

      <div className="hero-body h-100 flex flex-col gap-6 items-center justify-center w-3/5 my-10">
        <div className="badge relative bg-[#222] text-sm py-2 px-4 rounded-full flex items-center justify-between gap-2">
          <span className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-(--theme-color) to-transparent h-px w-1/2 mx-auto"></span>
          <div className="badge-dot h-2 w-2 rounded-full bg-(--theme-color)"></div>
          <span>Cutting-Edge AI Solutions</span>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          className="body-text flex flex-col gap-5"
        >
          <div className="body-heading text-7xl text-center font-semibold">
            <span>Decentralized Future Cryptocurrency Assets</span>
          </div>
          <div className="body-description text-lg text-center text-neutral-400">
            <span>A Platform for Cryptowave Surfing Financial Freedom</span>
          </div>
        </motion.div>

        <div className="hero-btns flex items-center justify-center h-12 w-100 gap-5 mt-5">
          <motion.button
            initial={{
              backgroundColor: "#e85600",
              color: "#000000",
              borderColor: "#e85600",
            }}
            whileHover={{
              backgroundColor: "rgba(255,255,255,0)",
              color: "#ffffff",
              borderColor: "#ffffff",
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="h-full px-8 flex items-center justify-center bg-(--theme-color) text-black text-sm rounded-full font-medium border border-(--theme-color)"
          >
            <span>ANALYSER</span>
          </motion.button>
          <motion.button
            initial={{ backgroundColor: "#ffffff", color: "#000000" }}
            whileHover={{
              backgroundColor: "rgba(255,255,255,0)",
              color: "#ffffff",
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="flex gap-2 px-8 h-full items-center justify-center bg-white text-black text-sm rounded-full font-medium border border-white"
          >
            <span>GET STARTED</span>
            <ArrowRight />
          </motion.button>
        </div>
      </div>

      <div className="hero-img-holder w-full h-3/10 flex items-center justify-center">
        <div className="hero-img w-4/5 flex items-center justify-center">
          <img
            src="https://framerusercontent.com/images/wEunS3VaoKTGueTG4bScmBOE0.svg"
            className="w-full h-auto"
            alt="cryps-dashboard"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
