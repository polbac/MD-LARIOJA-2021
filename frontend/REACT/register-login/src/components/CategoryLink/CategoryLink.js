import React from 'react'

import { SCCategory } from './styles'
export const CategoryLink = ({category}) => {

    const {name, url} = category
    return (
        <SCCategory href={url}>
            {name}
        </SCCategory>
    )
}
