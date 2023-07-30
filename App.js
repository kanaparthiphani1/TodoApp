import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar as StatusBar1,
} from "react-native";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ListView from "./components/ListView";
import ModalTodo from "./components/ModalTodo";
import { useState } from "react";
import "react-native-gesture-handler";
import { TaskContextProvider } from "./context/TaskContext";

export default function App() {
  const [isModalOpened, setIsModalOpened] = useState(false);
  console.log("staus basr : ", Platform.OS, " ", StatusBar1.currentHeight);
  return (
    <SafeAreaView style={[styles.container, styles.AndroidSafeArea]}>
      <GestureHandlerRootView style={styles.container}>
        <StatusBar style="light" />
        <TaskContextProvider style={styles.container}>
          <Header />
          <ListView />
          <Footer setIsModalOpened={setIsModalOpened} />
          <ModalTodo
            isModalOpened={isModalOpened}
            closeModal={setIsModalOpened}
          />
        </TaskContextProvider>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#242B2E",
  },
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "#242B2E",
    paddingTop: Platform.OS === "android" ? StatusBar1.currentHeight : 0,
  },
});
