import { View, Text, Modal, FlatList } from 'react-native'
import React from 'react'
import { ButtonText, Container, Leave, Model } from './style'
import { XIcon } from 'phosphor-react-native'
import { ProgramCode, programs } from '../../constants/Programs'

interface IMenu {
    onClose: (code: string | ProgramCode |null) => void,
    visible: boolean
}

const MenuPrograms = ({ onClose, visible }: IMenu) => {

    const handleSelect = (key: string) => {
        console.log("Key recebida:", key);

        // fecha o modal
        onClose(key);
    };

    return (
        <Modal transparent={true} visible={visible}>
            <Container >
                <Model>

                    <Leave color='red' onPress={() => {onClose(null), console.log("jlhskjlahsjdas")}} size={35} icon={XIcon} />

                    <ListButtons onPress={(key) => {handleSelect(key)}} />
                </Model>
            </Container>
        </Modal>
    )
}

export default MenuPrograms

interface IList {
    onPress: (key: string) => void
}

const ListButtons = ({ onPress }: IList) => {
    return (
        <FlatList data={programs}
            renderItem={({ item }) => {
                const key = Object.keys(item)[0];  // pega p041, p043...
                return <ButtonText title={key} color="blue" onPress={() => { onPress(key) }} />;
            }}
        />
    )
}
