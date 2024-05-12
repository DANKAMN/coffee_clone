"use client";

import Image from "next/image"
import { motion } from "framer-motion"
import { Star } from "lucide-react";

const Hero = () => {
  
  return (
    <div className="pt-172 duration-200 transition-all ease-out space-y-10">
      {/* left */}
      <div className="">
          <motion.a
          className="absolute block top-[120px] max-lg:hidden shadow-xl rounded-lg"
          initial={{ opacity: 0, transform: "rotate(0deg) translate(0px, 0px)" }}
          animate={{ opacity: 1, transform: "rotate(2.498deg) translate(0px, 0px)", transitionDelay: 0 }}
          href="https://www.buymeacoffee.com/neal"
          target="_blank"
        >
          <Image
            src="/assets/creator_tile_v8_1.png"
            width={192}
            height={172}
            alt="support"
            className="hover:scale-103 transform duration-200 object-cover"
          />
        </motion.a>

        {/* <div className="pb-10"></div> */}

        <motion.a
          className="absolute block top-[172px] max-lg:hidden shadow-xl rounded-lg"
          initial={{ opacity: 0, transform: "rotate(0deg) translate(0px, 0px)" }}
          animate={{
            transform: "rotate(-5deg) translate(54px, 120px)",
            opacity: 1,
          }}
          transition={{ delay: 0 }}
          href="https://www.buymeacoffee.com/poetrypea"
          target="_blank"
        >
          <Image
            src="/assets/creator_tile_v8_2.png"
            width={192}
            height={172}
            alt="support"
            className="hover:scale-103 transform duration-200"
          />
        </motion.a>

        {/* <div className="pb-[13rem]"></div> */}

        <motion.a
          className="absolute block top-[330px] max-lg:hidden rounded-lg shadow-xl"
          initial={{ opacity: 0, transform: "rotate(0deg) translate(0px, 0px)" }}
          animate={{
            transform: "rotate(9.087deg) translate(14px, 140px)",
            opacity: 1,
          }}
          transition={{ delay: 0 }}
          href="https://www.buymeacoffee.com/teacherstefano"
          target="_blank"
        >
          <Image
            src="/assets/creator_tile_v8_3.png"
            width={192}
            height={172}
            alt="support"
            className="hover:scale-103 transform duration-200"
          />
        </motion.a>
      </div>
      
      {/* center */}
      <div className="md:container flex justify-center items-center flex-col">
          <p className="flex flex-row gap-1 text-silver font-medium max-sm:text-xs pb-10">
            <Star color="#00ff00" fill="#00ff00" strokeWidth={1} />
            <Star color="#00ff00" fill="#00ff00" strokeWidth={1} />
            <Star color="#00ff00" fill="#00ff00" strokeWidth={1} />
            <Star color="#00ff00" fill="#00ff00" strokeWidth={1} />
            <Star color="#00ff00" fill="#00ff00" strokeWidth={1} />
            <p>Loved by 1,000,000+ creators</p>
          </p>
          <h1 className="text-silver text-6xl font-bold text-center text-wrap max-w-[430px] pb-5">Fund your creative work</h1>
          <p className="text-silver text-lg font-medium leading-34 text-center text-wrap max-w-[430px] pb-5">Accept support. Start a membership. Setup a shop. It’s easier than you think.</p>
          <a href="#" className="text-center text-black bg-[rgb(255,221,0)] rounded-full items-center text-2xl font-semibold px-8 py-2 text-lg font-medium hover:scale-125 ease-in-out duration-300">Start my page</a>
          <p className="text-silver text-lg text-center text-wrap pt-2">It’s free and takes less than a minute!</p>
      </div>

      {/* right */}
    <div className="">

        <motion.a
          className="absolute block top-[120px] right-0 max-lg:hidden rounded-lg shadow-xl"
          initial={{ opacity: 0, transform: "rotate(0deg) translate(0px, 0px)" }}
          animate={{
            transform: "rotate(10.531deg) translate(-100px, 4px)",
            opacity: 1,
          }}
          transition={{ delay: 0 }}
          href="https://www.buymeacoffee.com/chillingchinese"
          target="_blank"
        >
          <Image
            src="/assets/creator_tile_v8_4.png"
            width={192}
            height={172}
            alt="support"
            className="hover:scale-103 transform duration-200"
          />
        </motion.a>

        <motion.a
          className="absolute block top-[172px] right-0 max-lg:hidden shadow-xl rounded-lg"
          initial={{ opacity: 0, transform: "rotate(0deg) translate(0px, 0px)" }}
          animate={{
            transform: "rotate(9.087deg) translate(5px, 110px)",
            opacity: 1,
          }}
          transition={{ delay: 0 }}
          href="https://www.buymeacoffee.com/beachtalkradio"
          target="_blank"
        >
          <Image
            src="/assets/creator_tile_v8_7.png"
            width={192}
            height={172}
            alt="support"
            className="hover:scale-103 transform duration-200"
          />
        </motion.a>

        <motion.a
          className="absolute block top-[300px] right-0 max-lg:hidden shadow-xl rounded-lg"
          initial={{ opacity: 0, transform: "rotate(0deg) translate(0px, 0px)" }}
          animate={{
            transform: "rotate(-5deg) translate(-100px, 180px)",
            opacity: 1,
          }}
          transition={{ delay: 0 }}
          href="https://www.buymeacoffee.com/indiarose"
          target="_blank"
        >
          <Image
            src="/assets/creator_tile_v8_8.webp"
            width={192}
            height={172}
            alt="support"
            className="hover:scale-103 transform duration-200"
          />
        </motion.a>
      </div>
    </div>
  )
}

export default Hero
