import React from 'react'
import { NavlinkProps } from './types'
import * as S from './style'

const Navlink = ({ href, children }: NavlinkProps) => {
    return (
        <S.RefLink href={href}>{children}</S.RefLink>
  )
}

export default Navlink