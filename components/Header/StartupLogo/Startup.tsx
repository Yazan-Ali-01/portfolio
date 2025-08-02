import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
const Startup = (props) => {
  let WidthBy2 = 0;
  let HeightBy2 = 0;
  let greaterThanSmall=false;
  if (typeof window !== "undefined") {
    if (window.innerWidth > 768) {
      WidthBy2 = window.innerWidth / 2 - 48 - 20;
      HeightBy2 = window.innerHeight / 2-44;
      greaterThanSmall=true;
    }else{
      WidthBy2 = window.innerWidth / 2 -28;
      HeightBy2 = window.innerHeight / 2-40;
    }

    console.log("width by 2: ", WidthBy2);
  }

  return (

  <motion.div 
    initial={{opacity:1}}
    animate={{opacity:0}}
    transition={{opacity:{delay:2,duration:0}}} // Reduced delay from 4.9s to 2s
    className="absolute h-full w-full flex justify-center items-center bg-StartupBackground">
      <motion.div
        initial={{ opacity: 0, x: 0, y: 0, scale: "100%" }}
        animate={{ opacity: [1, 0, 1], x: -WidthBy2, y:-HeightBy2,scale: greaterThanSmall?"57%":"50%" }}
        transition={{
          opacity: { delay: 1.5, duration: 0.8 }, // Reduced delay from 3s to 1.5s, duration from 1.5s to 0.8s
          x: { duration: 0.3, delay: 2 }, // Reduced delay from 4.5s to 2s, duration from 0.5s to 0.3s
          y:{ duration: 0.3, delay: 2 }, // Reduced delay from 4.5s to 2s, duration from 0.5s to 0.3s
          scale: { duration: 0.3, delay: 2 }, // Reduced delay from 4.5s to 2s, duration from 0.5s to 0.3s
        }}
        className="relative  h-24 w-24 flex justify-center items-center"
      >
        <motion.div
          initial={{ scale: 0, x: 0 }}
          animate={{ scale: 1, rotate: 90, x: 38 }}
          transition={{
            scale: { duration: 0.8 }, // Reduced from 1.5s to 0.8s
            rotate: { delay: 0.3, duration: 0.3 }, // Reduced delay from 0.5s to 0.3s, duration from 0.5s to 0.3s
            x: { delay: 0.5, duration: 0.6 }, // Reduced delay from 0.8s to 0.5s, duration from 1s to 0.6s
          }}
          className="absolute h-2 w-12 bg-AAsecondary rounded "
        ></motion.div>
        <motion.div
          initial={{ scale: 0, x: 0 }}
          animate={{ scale: 1, rotate: 90, x: -39 }}
          transition={{
            scale: { duration: 0.8 }, // Reduced from 1.5s to 0.8s
            rotate: { delay: 0.3, duration: 0.3 }, // Reduced delay from 0.5s to 0.3s, duration from 0.5s to 0.3s
            x: { delay: 0.5, duration: 0.6 }, // Reduced delay from 0.8s to 0.5s, duration from 1s to 0.6s
          }}
          className="absolute h-2 w-12 bg-AAsecondary rounded "
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
          animate={{ opacity: 1, scale: 1.05, rotate: 35, x: 18, y: -34 }}
          transition={{
            opacity: { delay: 1, duration: 0 }, // Reduced delay from 2s to 1s
            scale: { duration: 1.3 }, // Reduced from 2.5s to 1.3s
            rotate: { delay: 0.3, duration: 0.3 }, // Reduced delay from 0.5s to 0.3s, duration from 0.5s to 0.3s
            y: { delay: 0.7, duration: 1 }, // Reduced delay from 1.2s to 0.7s, duration from 2s to 1s
            x: { delay: 0.8, duration: 0.3 }, // Reduced delay from 1.5s to 0.8s, duration from 0.5s to 0.3s
          }}
          className="absolute h-2 w-12 bg-AAsecondary rounded "
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
          animate={{ opacity: 1, scale: 1.05, rotate: -35, x: -18, y: -34 }}
          transition={{
            opacity: { delay: 1, duration: 0 }, // Reduced delay from 2s to 1s
            scale: { duration: 1.3 }, // Reduced from 2.5s to 1.3s
            rotate: { delay: 0.3, duration: 0.3 }, // Reduced delay from 0.5s to 0.3s, duration from 0.5s to 0.3s
            y: { delay: 0.7, duration: 1 }, // Reduced delay from 1.2s to 0.7s, duration from 2s to 1s
            x: { delay: 0.8, duration: 0.3 }, // Reduced delay from 1.5s to 0.8s, duration from 0.5s to 0.3s
          }}
          className="absolute h-2 w-12 bg-AAsecondary rounded "
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
          animate={{ opacity: 1, scale: 1.05, rotate: -35, x: 18, y: 34 }}
          transition={{
            opacity: { delay: 1, duration: 0 }, // Reduced delay from 2s to 1s
            scale: { duration: 1.3 }, // Reduced from 2.5s to 1.3s
            rotate: { delay: 0.3, duration: 0.3 }, // Reduced delay from 0.5s to 0.3s, duration from 0.5s to 0.3s
            y: { delay: 0.7, duration: 1 }, // Reduced delay from 1.2s to 0.7s, duration from 2s to 1s
            x: { delay: 0.8, duration: 0.3 }, // Reduced delay from 1.5s to 0.8s, duration from 0.5s to 0.3s
          }}
          className="absolute h-2 w-12 bg-AAsecondary rounded "
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
          animate={{ opacity: 1, scale: 1.05, rotate: 35, x: -18, y: 34 }}
          transition={{
            opacity: { delay: 1, duration: 0 }, // Reduced delay from 2s to 1s
            scale: { duration: 1.3 }, // Reduced from 2.5s to 1.3s
            rotate: { delay: 0.3, duration: 0.3 }, // Reduced delay from 0.5s to 0.3s, duration from 0.5s to 0.3s
            y: { delay: 0.7, duration: 1 }, // Reduced delay from 1.2s to 0.7s, duration from 2s to 1s
            x: { delay: 0.8, duration: 0.3 }, // Reduced delay from 1.5s to 0.8s, duration from 0.5s to 0.3s
          }}
          className="absolute h-2 w-12 bg-AAsecondary rounded "
        ></motion.div>
        <motion.span
          initial={{ scale: 0, y: -4 ,x:-1}}
          animate={{ scale: 1 }}
          transition={{ scale: { delay: 0.8, duration: 2 } }} // Reduced delay from 1.5s to 0.8s, duration from 1.5s to 0.8s
          className="text-AAsecondary font-Text2 text-4xl"
        >
          Y
        </motion.span>
      </motion.div>
    </motion.div>
  );
};
export default Startup;
