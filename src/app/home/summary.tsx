import { AddTransaction } from "@/components/add-transaction";
import { authClient } from "@/lib/auth-client";
import { Redirect } from "expo-router";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default function SummaryScreen() {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  if (isPending) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }

  if (!user) {
    return <Redirect href="/social-sign-in" />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome, {user.name}</Text>
      <Text style={styles.text}>No summary data yet.</Text>
      <AddTransaction />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  text: {
    fontSize: 16,
  },
});
