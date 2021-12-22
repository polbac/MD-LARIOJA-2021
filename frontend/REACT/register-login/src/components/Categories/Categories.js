import React from "react";
// Components
import { CategoryLink } from "../CategoryLink";
// Styles
import { SCCategoryContainer, SCCategory } from "./styles";

const categories = [
  {
    name: "celulares",
    url: "#",
    img: "",
  },
  {
    name: "smart-watch",
    url: "#",
    img: "",
  },
  {
    name: "monitores",
    url: "#",
    img: "",
  },
];
export const Categories = () => {
  return (
    <SCCategoryContainer>
      <SCCategory>
        {categories.map((cat, index) => (
          <CategoryLink key={`${cat.name}_${index}`} category={cat} />
        ))}
      </SCCategory>
    </SCCategoryContainer>
  );
};
