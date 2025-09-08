import "./Actions.css";
import { motion } from "motion/react";

function Actions() {
  return (
    <div className="w-full h-auto bg-black text-white px-5 py-10 font-inter flex flex-col gap-8">
      <div className="action-header flex flex-col items-center justify-center gap-5">
        {" "}
        <div className="badge relative bg-[#222] text-sm py-2 px-4 rounded-full flex items-center justify-between gap-2">
          <span className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-(--theme-color) to-transparent h-px w-1/2 mx-auto"></span>
          <div className="badge-dot h-2 w-2 rounded-full bg-(--theme-color)"></div>
          <span>How it works</span>
        </div>
        <div className="action-text flex flex-col gap-5">
          <div className="action-heading text-7xl text-center font-semibold">
            <span>3 Simple Steps</span>
          </div>
          <div className="action-description text-lg text-center text-neutral-400">
            <span>
              Your crypto journey, simplified. Create, fund, and trade in just
              three effortless steps.
            </span>
          </div>
        </div>
      </div>
      <div className="action-body flex items-center justify-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          className="action-card w-auto h-auto"
        >
          <div className="p-2 border border-neutral-800 rounded-4xl">
            <div
              className="card-img rounded-4xl h-60 border border-[#e85600] border-solid
"
            >
              <img
                src="https://framerusercontent.com/images/lLgziJ54lyVBq37rCsU4b18pkOQ.svg"
                alt=""
                className="w-auto h-full main-img rounded-4xl z-0"
              />
            </div>
          </div>
          <div className="card-text py-4 ml-3">
            <h5 className="text-xl">Create Account</h5>
            <p className="text-neutral-400">Sign up easily & secure profile</p>
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
          className="action-card w-auto h-auto"
        >
          <div className="p-2 border border-neutral-800 rounded-4xl">
            <div
              className="card-img rounded-4xl h-60 border border-[#e85600] border-solid
"
            >
              <img
                src="https://framerusercontent.com/images/rpu6QlUNmVOzw94OSfSs6MKbwUI.svg"
                alt=""
                className="w-auto h-full main-img rounded-4xl z-0"
              />
            </div>
          </div>
          <div className="card-text py-4 ml-3">
            <h5 className="text-xl">Fund wallet</h5>
            <p className="text-neutral-400">Deposit your cryptos</p>
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
          className="action-card w-auto h-auto"
        >
          <div className="p-2 border border-neutral-800 rounded-4xl">
            <div
              className="card-img rounded-4xl h-60 border border-[#e85600] border-solid
"
            >
              <img
                src="https://framerusercontent.com/images/0ZLYBgFjUFyY0LZ0HTaQIaN4HV0.svg"
                alt=""
                className="w-auto h-full main-img rounded-4xl z-0"
              />
            </div>
          </div>
          <div className="card-text py-4 ml-3">
            <h5 className="text-xl">Buy, sell & Swap</h5>
            <p className="text-neutral-400">Enjoy the simplicity of platform</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Actions;
