import { View, Text, Modal, Pressable } from 'react-native'
import React, { useState } from 'react'
import { ButtonMenu, Container, Leave, Model } from './style'
import Button from '../ButtonsChoose/Button'
import { useSound } from '../../context/soundContext'
import { SpeakerHighIcon, SpeakerSimpleSlashIcon, SpeakerSlashIcon, XIcon } from 'phosphor-react-native'

interface IMenu {
    onClose : () => void,
    visible : boolean
}

const Menu = ({ visible, onClose } : IMenu) => {

    const { play, isMuted, toggleMute } = useSound();

    return (
        <Modal transparent={true} visible={visible}>
            <Container >
                <Model>
                    <ButtonMenu
                        icon={isMuted ? SpeakerSimpleSlashIcon : SpeakerHighIcon}
                        color="gray"
                        size={35}
                        onPress={toggleMute}
                    />

                    <Leave color='red' onPress={onClose} size={35} icon={XIcon} />

                </Model>
            </Container>
        </Modal>
    )
}

export default Menu