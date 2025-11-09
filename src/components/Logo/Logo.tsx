import { Image, Pressable, View } from 'react-native'
import React, { useRef, useState } from 'react'
import logoTec from '../../assets/image/logoTec.png';
import Menu from '../Menu/Menu';

const Logo = () => {

    const [menuVisible, setMenuVisible] = useState(false);

    return (
        <Pressable onPress={() => setMenuVisible(true)}
            style={{
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 10,
                margin: 6
            }}>
            <Menu visible={menuVisible} onClose={() => setMenuVisible(false)}/>

            <Image source={logoTec} style={{ width: '100%', resizeMode: "contain", }} />
        
        </Pressable>
    )
}

export default Logo