import Link from "next/link";
import React from "react";
import style from "./Header.module.css";
export default function MenuList({ children }) {
  return (
    <>
      <ul className={"align-items-center " + style.mainmenu} style={{listStyle:"none"}}>{children}</ul>
    </>
  );
}

export function Menu({ children, href, hasDropdown,target }) {
  return (
    <>
      <li className={hasDropdown ? style["has-droupdown"] : ""}>
        <Link href={href ?? "#"} target={target ?? "_self"}>{children}</Link>
      </li>
    </>
  );
}

export function SubMenuList({ children }) {
  return (
    <>
      <ul className={style.submenu} style={{listStyle:"none"}}>{children}</ul>
    </>
  );
}
export function SubMenu({ children }) {
  return (
    <>
      <li>
        <Link href="#">{children}</Link>
      </li>
    </>
  );
}
