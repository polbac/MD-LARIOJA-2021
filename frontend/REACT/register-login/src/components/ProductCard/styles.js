import styled from "styled-components";

export const SCCardContainer = styled.div`
    width: ${ ( { isBig } ) => isBig ? "440x" : "200px" };
    height:  ${ ( { isBig } ) => isBig ? "440px" : "200px" };;
    border: 1px solid red;
    margin: 20px;
`