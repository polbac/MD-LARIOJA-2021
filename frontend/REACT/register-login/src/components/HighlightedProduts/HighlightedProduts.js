import React from "react";

// Components
import { ProductCard } from "../ProductCard";

import { SCProductContainer } from "./styles";

import styled from "styled-components";
const SCSmallCardsContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 0;
  margin-right: auto;
  justify-content: center;
`;
const SCBigCardContainer = styled.div`
  width: 100%;
`;
const SCProductsAside = styled.div`
  width: 49%;
  display: inline-flex;
  flex-wrap: wrap;
`;
/* 

styled components > css + maqueteado 
react browser (switch, links) + useContext (manejo de estados globales)
useCallback => no renderizar funciones nuevamente
useMemo => no realizar operaciones costosas una y otra vez << funcion >> resultado === resultado
useRef => obtener referencias de los elementos del DOM >>>> document.querySelector 

*/

export const HighlightedProduts = () => {
  return (
    <SCProductContainer>

      <SCProductsAside>

        <SCSmallCardsContainer>
          <ProductCard />
          <ProductCard />
        </SCSmallCardsContainer>

        <SCBigCardContainer>
          <ProductCard isBig={true} />
        </SCBigCardContainer>
      </SCProductsAside>


      <SCProductsAside>
        <SCBigCardContainer>
          <ProductCard isBig={true} />
        </SCBigCardContainer>
        <SCSmallCardsContainer>
          <ProductCard />
          <ProductCard />
        </SCSmallCardsContainer>
      </SCProductsAside>


    </SCProductContainer>
  );
};
