import { motion } from "motion/react";

function IndexAnimation() {
  return (
    <div className="w-full h-auto p-4 bg-(--main-bg-cl) flex items-center justify-center">
      <div className="img-holder h-100 relative flex items-center justify-center">
        <img
          src="https://framerusercontent.com/images/geSAfWPd5BeBGWuz6qaWXt5wk.svg"
          alt=""
          className="h-full w-auto object-contain"
        />

        <motion.div
          animate={{ scale: [1, 0.5, 1] }}
          transition={{
            duration: 3, // total cycle time
            times: [0, 0.4, 1], // where in timeline each keyframe happens
            repeat: Infinity, // loop forever
            repeatType: "loop",
            ease: "easeInOut",
          }}
          id="overlay"
          className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none mb-6"
        >
          <img src="./img.svg" alt="" className="h-10 w-auto -mb-6" />
          <img src="./img.svg" alt="" className="h-10 w-auto -mb-6" />
          <img src="./img.svg" alt="" className="h-10 w-auto" />
        </motion.div>
      </div>
    </div>
  );
}

export default IndexAnimation;
