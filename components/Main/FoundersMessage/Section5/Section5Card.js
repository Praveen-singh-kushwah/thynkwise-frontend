"use client";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import React, { useState } from "react";
import style from "./AboutSection5.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Section5Card({ item }) {
  const [isOver, setIsOver] = useState("");

  return (
    <div
      className={
        "edu-instructor-3-visible " +
        style["edu-instructor-3"] +
        " " +
        style[isOver]
      }
      onMouseEnter={() => {
        setIsOver("eduvibe-hover-active");
      }}
      onMouseLeave={() => {
        setIsOver("");
      }}
    >
      <div className={style["edu-instructor"]}>
        <div className={style.inner}>
          <div className={style.thumbnail}>
            {item.image && (
              <Image
                width={300}
                height={300}
                priority
                src={item.image}
                alt={item.title}
                className="w-auto h-auto"
              />
            )}
          </div>
          <div className={style["edu-instructor-info"]}>
            <h5 className={style.title}>
              <a href="#">{item.title}</a>
            </h5>
            <span className={style.desc}>{item.sub_title}</span>
            <div
              className={
                style["team-share-info"] + " " + style["bg-transparent"]
              }
            >
              <Link className="linkedin" href={item.linked_href}>
                <FaLinkedinIn />
              </Link>
              {/* <a className="facebook" href="#">
                <FaFacebookF />
              </a>
              <a className="twitter" href="#">
                <FaXTwitter />
              </a>
              <a className="youtube" href="#">
                <FaYoutube />
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
