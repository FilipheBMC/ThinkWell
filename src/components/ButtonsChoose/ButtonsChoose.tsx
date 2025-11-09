import React from 'react'
import { Box } from './style'
import Buttons from './ButtonsInjection.tsx/Buttons'
import { IQuizButtonsProps } from '../../types/IQuizButtonProps'

// Tratando com deseign. Acho que não vai ter muita aplicabilidade, mas vai ficar aqui.

const ButtonsChoose:React.FC<IQuizButtonsProps> = ({ onSelect, alternatives }) => {
  return (
    <Box>
      <Buttons
        alternatives={alternatives}
        onSelect={onSelect}
      />
    </Box>
  )
}

export default ButtonsChoose