// ----------------------------------
    // Interfaces
// ----------------------------------

interface IButtonStyle {
  type: 'Buttons' | 'reset';
  color: string;
}

import { View } from "react-native";
// -----------------------------------

// export const Box = styled.View`

//     width:100%;
//     height:35%;
//     flex-direction: row;
//     flex-wrap: wrap;
//     gap: 6px;
//     display: flex;
//     justify-content: center;
//     align-items: center;

// `;

// export const ButtonStyled = styled.TouchableOpacity<IButtonStyle>`
//     width: ${({ type }) => (type === 'Buttons' ? '49%' : '100%')};
//   height: ${({ type }) => (type === 'Buttons' ? '49%' : '8%')};
//   background-color: ${({ color }) => color};
//   justify-content: center;
//   align-items: center;
// `;

import { TouchableOpacity, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  box: {
    width: "100%",
    height: "35%",
    flexDirection: "row",
    flexWrap: "wrap",
    display: "flex",
    justifyContent:"center",
    alignItems:"center",
    margin: 12
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    margin: 3, // substituindo o gap
  },
  buttonSmall: {
    width: "48%",
    height: "48%",
  },
  buttonReset: {
    width: "98%",
    height: "5%",
    marginTop: 20
  },
});

interface BoxProps {
  children: React.ReactNode;
}

export const Box: React.FC<BoxProps> = ({ children }) => {
  return <View style={styles.box}>{children}</View>;
};

interface ButtonStyledProps {
  type: "Buttons" | "reset";
  color: string;
  onPress?: () => void;
  children?: React.ReactNode;
}

export const ButtonStyled: React.FC<ButtonStyledProps> = ({
  type,
  color,
  onPress,
  children,
}) => {
  // Estilos dinâmicos:
  const buttonStyle = [
    styles.button,
    type === "Buttons" ? styles.buttonSmall : styles.buttonReset,
    { backgroundColor: color },
  ];

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};