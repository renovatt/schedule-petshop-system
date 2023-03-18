import React from 'react'
import { NavlinkProps } from './types'
import * as S from './style'

const Navlink = ({ href, svg, text }: NavlinkProps) => {
  return (
    <S.List>
      <S.RefLink href={href}>
        <S.Icon>{svg}</S.Icon>
        <S.Title>{text}</S.Title>
      </S.RefLink>
    </S.List>
  )
}

export default Navlink;