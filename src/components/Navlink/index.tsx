import React from 'react'
import { Navlink } from './types'
import * as S from './style'

const Navlink = ({ href, children }: Navlink) => {
    return (
        <S.RefLink href={href}>{children}</S.RefLink>
  )
}

export default Navlink