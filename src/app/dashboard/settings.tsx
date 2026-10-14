import { AddTransaction } from "@/components/add-transaction";
import { authClient } from "@/lib/auth-client";
import { router } from "expo-router";
import { ActivityIndicator, Button, StyleSheet, Text, View } from "react-native";

export default function SettingsScreen() {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const handleLogout = async () => {
    await authClient.signOut();
    router.replace("/");
  };

  if (isPending) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {user ? (
        <>
          <Text style={styles.text}>Email: {user.email}</Text>
          <Button title="Logout" onPress={handleLogout} />
        </>
      ) : (
        <Text style={styles.text}>No user logged in</Text>
      )}
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
