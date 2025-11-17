// app/(tabs)/mahasiswa.tsx
import React, { useEffect, useState } from "react";
import { View, FlatList, Text, Button, ActivityIndicator, StyleSheet } from "react-native";
import { fetchMahasiswa, Mahasiswa } from "../../src/firebase/firestoreService";
import { logout } from "../../src/firebase/firebaseAuth";
import { useRouter } from "expo-router";

export default function MahasiswaScreen() {
  const router = useRouter();
  const [data, setData] = useState<Mahasiswa[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const list = await fetchMahasiswa();
      setData(list);
      setLoading(false);
    };
    load();
  }, []);

  const handleLogout = async () => {
    await logout();
    router.replace("/");
  };

  if (loading) return <ActivityIndicator size="large" style={{ flex: 1 }} />;

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        contentContainerStyle={{ padding: 16, paddingBottom: 100 }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nama}>{item.nama}</Text>
            <Text style={styles.text}>NIM: {item.nim}</Text>
            <Text style={styles.text}>Jurusan: {item.jurusan}</Text>
          </View>
        )}
      />

      {/* Logout di bawah */}
      <View style={styles.logoutContainer}>
        <Button title="Logout" onPress={handleLogout} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,

    // shadow iOS
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },

    // shadow Android
    elevation: 4,
  },
  nama: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#222",
  },
  text: {
    fontSize: 14,
    color: "#555",
  },
  logoutContainer: {
    position: "absolute",
    bottom: 20,
    left: 16,
    right: 16,
  },
});