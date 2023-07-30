import React, { useContext, useState } from "react";

const TaskContext = React.createContext();

export const useTaskContext = () => {
  return useContext(TaskContext);
};

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  tasks.sort((taskx, tasky) => {
    if (taskx.status === "done") {
      return 1;
    }
    if (taskx.status !== "done") {
      return -1;
    }
  });

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};
