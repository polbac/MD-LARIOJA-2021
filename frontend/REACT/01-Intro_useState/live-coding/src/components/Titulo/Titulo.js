import React from "react";

function Titulo({ title, isLink }) {
  if (isLink) {
    return (
      <a href="#" className="titulo__a">
        {title}
      </a>
    );
  } else {
    return <h1>{title}</h1>;
  }
}

export default Titulo;
