import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import ListItem from "./ListItem";
import { useTaskContext } from "../context/TaskContext";

const ListView = () => {
  const { tasks } = useTaskContext();
  return (
    <FlatList
      data={tasks}
      renderItem={(task) => {
        return (
          <View style={styles.listViewCont}>
            <ListItem task={task.item} />
          </View>
        );
      }}
      keyExtractor={(item) => {
        return item.id;
      }}
    />
  );
};

export default ListView;
const styles = StyleSheet.create({
  listViewCont: {
    paddingHorizontal: 20,
    flex: 11,
  },
});
