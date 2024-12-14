"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export const Youtube = () => (
  <motion.div
    whileInView={{ scale: 1, opacity: 1 }}
    whileHover={{ scale: 1.05 }}
    transition={{
      ease: "easeInOut",
      duration: 0.15,
    }}
    className={"w-full px-4 py-6"}
  >
    <a
      href={"https://www.youtube.com/@UnoFedeo/"}
      className={"flex flex-row w-full justify-center items-center space-x-4"}
      target={"_blank"}
    >
      <div
        className={
          "flex items-center justify-center w-36 overflow-hidden rounded-full"
        }
      >
        <Image
          src={"/images/youtubePFP.jpg"}
          alt={"Youtube Profile Picture"}
          width={"250"}
          height={"250"}
        />
      </div>
      <div className={"flex flex-col h-32 w-full justify-center"}>
        <div
          className={
            "flex flex-col leading-tight sm:flex-row text-md md:text-xl justify-between"
          }
        >
          <b>Alfie Ranstead</b>
          <b>@UnoFedeo</b>
        </div>
        <div
          className={
            "flex flex-col leading-tight sm:flex-row text-lg md:text-3xl justify-between"
          }
        >
          <b>{wrapData(ContentStats.views)} Views</b>
          <b>{wrapData(ContentStats.subscribers)} Subscribers</b>
        </div>
      </div>
    </a>
  </motion.div>
);

export const YoutubeNoLink = () => (
  <div
    className={
      "flex flex-row w-full justify-center items-center space-x-4 px-4 py-8"
    }
  >
    <div
      className={
        "flex items-center justify-center w-36 overflow-hidden rounded-full"
      }
    >
      <Image
        src={"/images/youtubePFP.jpg"}
        alt={"Youtube Profile Picture"}
        width={"250"}
        height={"250"}
      />
    </div>
    <div className={"flex flex-col h-32 w-full justify-center"}>
      <div
        className={
          "flex flex-col leading-tight sm:flex-row text-md md:text-xl justify-between"
        }
      >
        <b>Youtube</b>
        <b>2021 - 2022</b>
      </div>
      <div
        className={
          "flex flex-col leading-tight sm:flex-row text-lg md:text-3xl justify-between"
        }
      >
        <b>{wrapData(ContentStats.views)} Views</b>
        <b>{wrapData(ContentStats.subscribers)} Subscribers</b>
      </div>
    </div>
  </div>
);

export const ContentStats = {
  views: 1780672,
  subscribers: 6600,
  likes: 55520,
};

export function wrapData(inp: number) {
  if (inp > 1000000) {
    return roundData(inp / 1000000, 2) + "M";
  } else if (inp > 1000) {
    return roundData(inp / 1000, 2) + "K";
  } else {
    return inp;
  }
}

function roundData(num: number, decimals: number) {
  return Math.round(num * 10 ** decimals) / 10 ** decimals;
}
