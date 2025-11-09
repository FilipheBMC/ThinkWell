import { IconProps } from "phosphor-react-native";
import { Component, ReactNode } from "react";
import { Pressable, StyleSheet, Touchable, TouchableOpacity, View } from "react-native";

interface ContainerProps {
    children: ReactNode;
}

interface ButtonIconProps {
    icon: React.FC<IconProps>;
    size?: number;
    color?: string;
    onPress?: () => void;
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20%"
    },
    modal: {
        backgroundColor: "orange",
        width: "100%",
        height: "35%",
        opacity: 1,
        padding: "15%",
    },
    buttonn: {
        padding: 12,          // ← número
        borderRadius: 12,     // ← camelCase
        backgroundColor: "#e7e7e7",
        justifyContent: "center",
        alignItems: "center",
        margin: 10
    },
})

export const Container = ({ children }: ContainerProps) => {
    return (
        <View style={styles.container}>
            {children}
        </View>)
}

export const Model = ({ children }: ContainerProps) => {
    return (
        <View style={styles.modal}>
            {children}
        </View>)
}

export const ButtonMenu = ({icon : Icon, color, onPress, size} : ButtonIconProps) => {
    return(
        <TouchableOpacity style={styles.buttonn} onPress={onPress}>
            <Icon size={size} color={color} />
        </TouchableOpacity>
    )
}

export const Leave = ({icon : Icon, color, onPress, size} : ButtonIconProps) => {
    return(
    <TouchableOpacity style={styles.buttonn} onPress={onPress}>
        <Icon size={size} color={color} />
    </TouchableOpacity>)
}