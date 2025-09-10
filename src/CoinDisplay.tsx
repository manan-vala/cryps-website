import BadgeLoop from "./BadgeLoop";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

function CoinDisplay() {
  return (
    <div className="w-full h-auto bg-(--main-bg-cl) px-4 py-10 text-white font-inter flex flex-col items-center justify-center">
      <div className="w-3/4 flex flex-col items-center justify-center gap-30">
        <div className="w-1/2 max-lg:w-full flex flex-col items-center justify-center gap-12">
          <div className="badge relative bg-[#222] text-sm py-2 px-4 rounded-full flex items-center justify-between gap-2">
            <span className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-(--theme-color) to-transparent h-px w-1/2 mx-auto"></span>
            <div className="badge-dot h-2 w-2 rounded-full bg-(--theme-color)"></div>
            <span>Best Crypto Networks</span>
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
            <div className="body-heading text-5xl max-md:text-4xl text-center font-semibold">
              <span>Feel the Rhythm of Every Crypto Network</span>
            </div>
            <div className="body-description text-lg text-center text-neutral-400">
              <span>
                Effortlessly tap into real-time data from 35+ crypto networks,
                including Ethereum, BSC, Polygon™, with CRYPS’ AI-enhanced
                insights.
              </span>
            </div>
          </motion.div>
          <div className="h-12 flex items-center justify-center">
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
              className="h-full px-8 flex items-center justify-center gap-2 bg-(--theme-color) text-black text-sm rounded-full font-medium border border-(--theme-color)"
            >
              <span>EXPLORE ALL</span>
              <ArrowRight />
            </motion.button>
          </div>
        </div>
        <BadgeLoop />
      </div>
    </div>
  );
}

export default CoinDisplay;
