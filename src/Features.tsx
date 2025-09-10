import { motion } from "motion/react";
import IndexAnimation from "./IndexAnimation";
import { ArrowRight } from "lucide-react";

function Features() {
  return (
    <div className="w-full bg-(--main-bg-cl) text-white font-inter flex flex-col items-center justify-center py-15">
      <div className="container w-4/5 h-auto">
        <div className="main flex max-lg:flex-col items-center justify-center">
          <div className="main-text flex flex-col w-1/2 max-lg:w-4/5">
            {" "}
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
              viewport={{ once: true }}
              className="main-body-text flex flex-col gap-5"
            >
              {" "}
              <div className="badge-container flex items-center justify-start max-lg:justify-center">
                <div className="badge relative bg-[#222] text-sm py-2 px-4 rounded-full flex items-center justify-between gap-2">
                  <span className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-(--theme-color) to-transparent h-px w-1/2 mx-auto"></span>
                  <div className="badge-dot h-2 w-2 rounded-full bg-(--theme-color)"></div>
                  <span>Cutting-Edge AI Solutions</span>
                </div>
              </div>
              <div className="main-body-heading text-6xl max-md:text-4xl text-start max-lg:text-center font-semibold">
                <span>Your Gateway to Advanced Crypto Data Indexing</span>
              </div>
              <div className="main-body-description text-lg text-start max-md:text-center text-neutral-400">
                <span>
                  Experience the power of the CRYPS Network, where crypto
                  indexing meets decentralization. Our Staked Authority model
                  empowers community members to run indexers, boosting
                  reliability and trust.
                </span>
              </div>
            </motion.div>
          </div>
          <div className="main-img w-1/2 max-lg:w-4/5">
            <IndexAnimation />
          </div>
        </div>

        <div className="h-12 flex items-center justify-start max-lg:justify-center">
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
            <span>JOIN CRYPS NOW</span>
            <ArrowRight />
          </motion.button>
        </div>

        <div className="main-sections grid gap-16 mt-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
            className="w-auto h-full"
          >
            <div className="icon h-10 w-10 p-2 rounded-full bg-(--theme-color) mb-10 shadow-[3px_3px_12px_rgba(232,86,0,1)]">
              <img src="./main-icons/icon.svg" alt="" />
            </div>
            <div className="section-text flex flex-col gap-2">
              <span className="text-xl font-bold">Deep Crypto Indexing</span>
              <span className="text-sm text-neutral-400">
                We're top-tier data decoders extracting rich crypto insights. It
                merges on-chain & off-chain data for contextual meaning.
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
            className="w-auto h-full"
          >
            <div className="icon h-10 w-10 p-2 rounded-full bg-(--theme-color) mb-10 shadow-[3px_3px_12px_rgba(232,86,0,1)]">
              <img src="./main-icons/icon2.svg" alt="" />
            </div>
            <div className="section-text flex flex-col gap-2">
              <span className="text-xl font-bold">Robust API Suite</span>
              <span className="text-sm text-neutral-400">
                CRYPS indexer tracks every data point in the crypto space and
                simplifies retrieval. Token balances etc.
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
            className="w-auto h-full"
          >
            <div className="icon h-10 w-10 p-2 rounded-full bg-(--theme-color) mb-10 shadow-[3px_3px_12px_rgba(232,86,0,1)]">
              <img src="./main-icons/icon3.svg" alt="" />
            </div>
            <div className="section-text flex flex-col gap-2">
              <span className="text-xl font-bold">Client-Focused Support</span>
              <span className="text-sm text-neutral-400">
                We provide 24x7 support assistance and dedicated channels for
                enterprise clients with flexible pricing.
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
            className="w-auto h-full"
          >
            <div className="icon h-10 w-10 p-2 rounded-full bg-(--theme-color) mb-10 shadow-[3px_3px_12px_rgba(232,86,0,1)]">
              <img src="./main-icons/icon4.svg" alt="" />
            </div>
            <div className="section-text flex flex-col gap-2">
              <span className="text-xl font-bold">True Crypto SaaS</span>
              <span className="text-sm text-neutral-400">
                CRYPS Indexer meticulously tracks every single data point across
                the vast and dynamic crypto space.
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Features;
