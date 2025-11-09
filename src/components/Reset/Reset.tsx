import { View, Text } from 'react-native'
import React from 'react'
import Button from '../ButtonsChoose/Button'
import { playSound } from '../../utils/sounds'

interface IReset {
    onPress : () => void
}

const Reset = ({onPress} : IReset) => {

    const handleReset = () => {
        playSound("click")
        onPress()
    }

    return (
            <Button title='resetar' color='gray' type='reset' Pressable={handleReset} />
    )
}

export default Reset