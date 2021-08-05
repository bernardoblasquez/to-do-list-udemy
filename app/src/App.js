import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import url_firebase  from './url_firebase';
import useRequest from './hooks/useRequest';

function App() {
  const [tasks, setTasks] = useState([]);

  console.log("App running!!")
  const {isLoading, error, sendRequest: fetchTasks} = useRequest()

  useEffect(() => {
    const transformTasks = (tasksObj) => {
      const loadedTasks = [];
  
      for (const taskKey in tasksObj) {
        loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
      }
  
      setTasks(loadedTasks);
    }

    fetchTasks(
      {url: url_firebase},
      transformTasks
    );
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
