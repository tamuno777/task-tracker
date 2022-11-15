import { useState } from 'react'
import Header from "./Components/Header";
import Tasks from './Components/Tasks';
import AddTask from './Components/AddTask';
import "./bootstrap.min.css";

function App() {
  const [showAddTask, setShowAddTask] = useState
  (false)
  const [tasks, setTasks] = useState([
    {
        id:1,
        text: 'Doctors appointment',
        day: 'feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id:2,
        text: 'Meeting at school',
        day: 'feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id:3,
        text: 'Food shopping',
        day: 'feb 7th at 3:30pm',
        reminder: false,
    },
    
])
// add tast
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1;
  const newTask ={ id , ...task}
  setTasks ([...tasks, newTask])
}

// delete task
  const deleteTask =(id) =>{
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task,reminder:!task.reminder} : task))

  }


  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)}/>

      {showAddTask && <AddTask onAdd={addTask}/>}

      {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ): (
        'no task to show'
      )}










      {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossOrigin="anonymous"></script> */}
      <script src='./js/bootstrap.bundle.min.js'></script>
    </div>
  );
}

export default App;
