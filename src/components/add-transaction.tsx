import { SymbolView } from "expo-symbols";
import { Pressable, StyleSheet } from "react-native";

type AddTransactionProps = {
  onPress?: () => void;
};

export function AddTransaction({ onPress }: AddTransactionProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel="Add transaction"
      onPress={onPress}
      style={styles.button}
    >
      <SymbolView
        name={{ ios: "plus", android: "add" }}
        tintColor="#ffffff"
        size={28}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    right: 24,
    bottom: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#208AEF",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
  },
});
