import { StyleSheet, View } from "react-native";
import SocialSignIn from "./social-sign-in";

export default function Index() {
  return (
    <View style={styles.container}>
      <SocialSignIn />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
