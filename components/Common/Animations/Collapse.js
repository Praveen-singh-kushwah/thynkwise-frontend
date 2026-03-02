"use client";
import { AnimatePresence, motion } from "framer-motion";

export default function Collapse({
  open,
  children,
  className,
  element = "div",
}) {
  const Element = motion[element];
  const animate = {
    transition: { type: "tween", duration: 0.3 },
    height: open ? "auto" : 0,
    //opacity: open ? 1 : .5
  };
  return (
    <AnimatePresence>
      {open &&
        <Element
          className={className}
          initial={{ opacity: 1, height: 0 }}
          animate={animate}
          //   transition={{ duration, delay }}
          exit={{ height: 0, opacity: 1 }}
        >
          {children}
        </Element>
      }
    </AnimatePresence>
  );
}
