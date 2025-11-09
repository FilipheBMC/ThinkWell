// export const VisorBox = styled.View<{ variant: "big" | "small" }>`
  
//     background-color: #111;
//     padding: 10px;
//     border-radius: 10px;
//     width: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: center;

//     height: ${(p) => (p.variant === "big" ? "120px" : "55px")};

// `;

// export const InfoText = styled.Text`

//     color: red;
//     font-size: 30px;

// `;

import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface VisorBoxProps {
  variant: "big" | "small";
  children: React.ReactNode;
}

export const VisorBox: React.FC<VisorBoxProps> = ({ variant, children }) => {
  return (
    <View
      style={[
        styles.visorBox,
        { height: variant === "big" ? 120 : 55} // ajustando altura dinamicamente
      ]}
    >
      {children}
    </View>
  );
};

export const InfoText: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Text style={styles.infoText}>{children}</Text>;
};

const styles = StyleSheet.create({
  visorBox: {
    backgroundColor: "#111",
    padding: 10,
    borderRadius: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    margin: 10
  },
  infoText: {
    color: "red",
    fontSize: 30,
  },
});
