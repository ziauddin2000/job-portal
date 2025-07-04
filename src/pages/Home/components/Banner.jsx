import { motion } from "motion/react";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-96 px-3 lg:px-5">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1 flex items-center justify-center">
          <img
            src="https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg"
            className="w-full rounded-t-3xl rounded-br-3xl rounded-bl-none border-3 border-[#ccc] border-tr-0 shadow-2xl"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-5xl font-bold">
            Box Office{" "}
            <motion.span
              animate={{
                color: ["#f72929", "#7df729"],
                transition: { duration: 2, repeat: Infinity },
              }}
            >
              News!
            </motion.span>
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
