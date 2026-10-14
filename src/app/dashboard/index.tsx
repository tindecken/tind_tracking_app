import { authClient } from "@/lib/auth-client";
import { StyleSheet, Text, View } from "react-native";

export default function SummaryScreen() {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {user ? `Welcome, ${user.name}` : "No user logged in"}
      </Text>
      <Text style={styles.text}>No summary data yet.</Text>
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
