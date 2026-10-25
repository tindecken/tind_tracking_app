import SocialSignIn from "@/components/social-sign-in";
import { authClient } from "@/lib/auth-client";
import { Redirect } from "expo-router";
import { ActivityIndicator, StyleSheet, View } from "react-native";

export default function Index() {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }

  if (!session?.user) {
    return (
      <View style={styles.container}>
        <SocialSignIn />
      </View>
    );
  }

  return <Redirect href="/home/summary" />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
