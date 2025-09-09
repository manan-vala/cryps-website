import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

function Footer() {
  return (
    <div className="w-full h-auto bg-black text-white font-inter flex flex-col items-center justify-center">
      <div className="w-3/4 flex items-center justify-center gap-10">
        <div className="w-1/2">
          {" "}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(16px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
            className="body-text flex flex-col gap-5"
          >
            <div className="body-heading text-5xl text-start font-semibold">
              <span>Join Our Newsletter</span>
            </div>
            <div className="body-description text-lg text-start text-neutral-400">
              <span>
                Join the CRYPS Newsletter | Crypto enthusiasts unite! Stay ahead
                with the latest insights.
              </span>
              <div className="flex gap-4 h-12 items-center justify-center mt-6">
                <input
                  type="text"
                  className="w-full h-full rounded-full bg-neutral-800 px-6"
                  placeholder="name@gmail.com"
                />
                <button className="bg-(--theme-color) rounded-full h-full px-4 text-center text-white">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="w-1/2">
          <div className="p-4 rounded-4xl border border-neutral-800 flex gap-8 h-50">
            <img
              src="https://framerusercontent.com/images/Dcogk8piaYmNo1mT3Ddc3Ln4MPA.jpg"
              alt=""
              className="h-full w-auto rounded-4xl"
            />
            <div className="flex flex-col justify-between">
              <span className="text-lg">
                Our team will respond to you within the next 12-16 hours with
                the support you need.
              </span>
              <div className="h-12">
                <motion.button
                  initial={{ backgroundColor: "#ffffff", color: "#000000" }}
                  whileHover={{
                    backgroundColor: "rgba(255,255,255,0)",
                    color: "#ffffff",
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="flex gap-2 px-8 h-full w-full items-center justify-center bg-white text-black text-sm rounded-full font-medium border border-white"
                >
                  <span>SEND MESSAGE</span>
                  <ArrowRight />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-3/4 h-0 border border-neutral-800 my-30" />

      <div className="w-3/4 flex justify-between items-start gap-12">
        <div className="flex flex-col gap-6 flex-1">
          <div>
            <img
              src="https://framerusercontent.com/images/z7vLXn7QdMeed0VsNHzgMhFGIY.svg"
              alt=""
              className="h-15"
            />
          </div>

          <span className="text-lg text-neutral-500">
            Your go-to solution for buying, selling, and swapping crypto,
            including leading and emerging altcoins.{" "}
          </span>

          <div className="flex gap-4">
            <button>
              <img
                src="https://framerusercontent.com/images/NKvi3GazVPW5MJGVifIQOQhZPU.svg"
                alt=""
              />
            </button>

            <button>
              <img
                src="https://framerusercontent.com/images/lAe2eOZe0KTcBZUe5NbDDJqSnHU.svg"
                alt=""
              />
            </button>

            <button>
              <img
                src="https://framerusercontent.com/images/IVuPU0f3KDhfc6OXDwhnyFM3gc.svg"
                alt=""
              />
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-8 pr-45">
          <span>Company</span>
          <div className="flex flex-col gap-3">
            <motion.a
              initial={{ color: "#ffffff" }}
              whileHover={{ color: "#e85600" }}
            >
              <span>About Us</span>
            </motion.a>
            <motion.a
              initial={{ color: "#ffffff" }}
              whileHover={{ color: "#e85600" }}
            >
              <span>Contact</span>
            </motion.a>
            <motion.a
              initial={{ color: "#ffffff" }}
              whileHover={{ color: "#e85600" }}
            >
              <span>Product</span>
            </motion.a>
            <motion.a
              initial={{ color: "#ffffff" }}
              whileHover={{ color: "#e85600" }}
            >
              <span>Networks</span>
            </motion.a>
            <motion.a
              initial={{ color: "#ffffff" }}
              whileHover={{ color: "#e85600" }}
            >
              <span>Blogs</span>
            </motion.a>
            <motion.a
              initial={{ color: "#ffffff" }}
              whileHover={{ color: "#e85600" }}
            >
              <span>Pricing</span>
            </motion.a>
          </div>
        </div>

        <div className="flex flex-col gap-8 pr-45">
          <span>Legal</span>
          <div className="flex flex-col gap-3">
            <span>404 Page</span>
            <span>Celar APIs</span>
          </div>
        </div>
      </div>

      <div className="w-3/4 h-0 border border-neutral-800 my-20" />

      <div className="w-3/4 text-neutral-500 flex items-center justify-between mb-15">
        <span>@2025 Cryps. All Rights Reserved</span>
        <span className="flex gap-4">
          <motion.a
            initial={{ color: "#737373" }}
            whileHover={{ color: "#e85600" }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            href="#"
          >
            <button>Terms & Conditons</button>
          </motion.a>
          <span>|</span>
          <motion.a
            initial={{ color: "#737373" }}
            whileHover={{ color: "#e85600" }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            href="#"
          >
            <button>Privacy Policy</button>
          </motion.a>
        </span>
      </div>
    </div>
  );
}

export default Footer;
