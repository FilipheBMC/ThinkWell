import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Button from '../ButtonsChoose/Button'
import { playSound } from '../../utils/sounds'
import MenuPrograms from '../Menu/MenuPrograms'

interface IReset {
    onPress: (code: string | null) => void
    state?: boolean
}

const Reset = ({ onPress, state }: IReset) => {

    const handleReset = (code: string | null) => {
        playSound("click")
        onPress(code)

        if (state && !menuVisible) {
            setMenuVisible(true)
        }

    }

    const [menuVisible, setMenuVisible] = useState(false)

    return (
        <>
            <Button title={state ? "Escolher Opção" : "Resetar"} color='gray' type='reset' Pressable={() => handleReset(null)} />
            {/* <Button
                title={state ? "Escolher Opção" : "Resetar"}
                color="gray"
                type="reset"
                Pressable={() => {
                    playSound("click");

                    if (state) {
                        setMenuVisible(true); // abre o menu sem resetar
                    } else {
                        onPress(null); // reset normal
                    }
                }}
            /> */}


            <MenuPrograms visible={menuVisible} onClose={(key) => { setMenuVisible(false); handleReset(key) }} />
        </>
    )
}

export default Reset

