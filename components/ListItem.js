import { Animated, View, Text, StyleSheet, Pressable } from "react-native";
import React, { useRef } from "react";
import Swipeable, { close } from "react-native-gesture-handler/Swipeable";
import { useTaskContext } from "../context/TaskContext";

const ListItem = ({ task }) => {
  console.log("Item in Listewm : ", task);
  const swipeable = useRef();
  const { setTasks } = useTaskContext();

  const swipeHandler = (direction) => {
    console.log("direction", direction);
    if (direction === "left") {
      setTasks((tasks) => {
        return tasks.map((eachTask) => {
          if (eachTask.id === task.id) {
            return {
              ...eachTask,
              status: "done",
              completedDate: Date.now(),
            };
          }
          return eachTask;
        });
      });
    } else {
      setTasks((tasks) => {
        return tasks.filter((eachTask) => eachTask.id !== task.id);
      });
    }
  };

  const renderLeftActions = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
      extrapolate: "clamp",
    });
    return (
      <View style={styles.leftActions}>
        <Animated.Text
          style={{
            color: "#242B2E",
            paddingHorizontal: 10,
            fontWeight: "600",
            transform: [{ scale }],
          }}
        >
          Done
        </Animated.Text>
      </View>
    );
  };

  const RightActions = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0],
      extrapolate: "clamp",
    });
    return (
      <>
        <View style={styles.rightActions}>
          <Animated.Text
            style={{
              color: "#242B2E",
              paddingHorizontal: 10,
              fontWeight: "600",
              transform: [{ scale }],
            }}
          >
            Delete
          </Animated.Text>
        </View>
      </>
    );
  };

  return (
    <View style={styles.listItemOuter}>
      {task.status === "done" ? (
        <View style={styles.listItemDoneCont}>
          <Text style={styles.todoTextDone}>{task.item}</Text>
        </View>
      ) : (
        <Swipeable
          renderLeftActions={renderLeftActions}
          renderRightActions={RightActions}
          ref={swipeable}
          onSwipeableOpen={swipeHandler}
        >
          <View style={styles.listItemCont}>
            <Text style={styles.todoText}>{task.item}</Text>
          </View>
        </Swipeable>
      )}
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  listItemOuter: {
    marginVertical: 10,
  },
  listItemCont: {
    backgroundColor: "#0D0D0D",
    paddingHorizontal: 15,
    paddingVertical: 30,
    borderRadius: 13,
    elevation: 4,
  },
  listItemDoneCont: {
    backgroundColor: "#81B29A",
    paddingHorizontal: 15,
    paddingVertical: 30,
    borderRadius: 13,
    elevation: 4,
  },
  todoText: {
    fontSize: 17,
    fontWeight: "600",
    color: "#CAD5E2",
  },
  todoTextDone: {
    fontSize: 17,
    fontWeight: "600",
    color: "#242B2E",
  },
  leftActions: {
    flex: 1,
    backgroundColor: "#81B29A",
    justifyContent: "center",
    borderRadius: 13,
  },
  rightActions: {
    flex: 1,
    backgroundColor: "#E07A5F",
    justifyContent: "center",
    alignItems: "flex-end",
    borderRadius: 13,
  },
});
