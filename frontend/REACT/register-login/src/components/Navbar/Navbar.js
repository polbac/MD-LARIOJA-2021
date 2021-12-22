import React from "react";
// Styles
import { SCNavbarContainer, SCNavbar, SCNavbarItems, SCLink, SCLogo } from "./style";
// Constants
import { linksArray } from "../../constants/links";

export const Navbar = () => {
  return (
    <SCNavbarContainer>
      <SCNavbar>
        <SCLogo>NOMBRE</SCLogo>
        <SCNavbarItems>
          {linksArray.map((link, index) => (
            <SCLink key={index} href={link.url}>
              {link.name}
            </SCLink>
          ))}
        </SCNavbarItems>
      </SCNavbar>
    </SCNavbarContainer>
  );
};
