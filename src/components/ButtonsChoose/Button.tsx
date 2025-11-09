import { View, Text } from 'react-native'
import React from 'react'
import { ButtonStyled } from './style'
import { IButton } from '../../types/IButton'

// Este aqui seria o nosso esqueleto do nosso button

const Button: React.FC<IButton> = ({ Pressable, title, color, type, children }) => {
  return (
    <ButtonStyled type={type} color={color} onPress={Pressable}>

      {children ? (
        children
      ) : (
        <Text style={{
          fontSize: type === 'Buttons' ? 40 : 20,
          fontWeight: type === 'Buttons' ? 'bold' : '500',
          color: 'black'
        }}>{title}</Text>
      )}
    </ButtonStyled>
  )
}

export default Button