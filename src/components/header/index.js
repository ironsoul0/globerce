import React, { useState } from "react";
import clsx from "clsx";

import Container from "../container";
import classes from "./Header.module.css";

const links = [
  {
    href: "/",
    label: "Главная",
  },
  {
    href: "/",
    label: "О проекте",
  },
];

const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className={clsx(classes.root, { [classes.active]: menu })}>
      <Container className={classes.content}>
        <div className={classes.logo}>
          <a>Globerce Capital</a>
        </div>
        <div className={classes.links}>
          {links.map((el, i) => (
            <a
              onClick={() => setMenu(false)}
              key={`nav-link-${i}`}
              href={el.href}
            >
              {el.label}
            </a>
          ))}
        </div>
        <div onClick={() => setMenu(!menu)} className={classes.burger}>
          <div />
          <div />
          <div />
        </div>
      </Container>
    </nav>
  );
};

export default Header;
