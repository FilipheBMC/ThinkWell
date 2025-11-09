// import { View } from 'react-native';
// import { StyleSheet, Platform } from 'react-native';
// import styled from "styled-components/native";

// export const Container = styled.View`

//   margin-top: ${Platform.OS === "android" ? "40px" : "0px"};
//   background-color: #222;
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   align-items:center;
//   gap:25px;
//   padding: 0 45px;

// `;

import { View, StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'android' ? 40 : 0,
    backgroundColor: '#222',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 45
  },
});

interface AppContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: AppContainerProps) {
  return <View style={styles.container}>{children}</View>;
}
