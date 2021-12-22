import React from 'react'
// Styles
import { SCCardContainer } from './styles'

export const ProductCard = ({ isBig = false }) => {

return (
        <SCCardContainer isBig={isBig}>
            Soy una tarjeta
        </SCCardContainer>
    )
}
