import React, { useState, Fragment } from 'react'
import AddUserForm from './components/forms/AddUserForm'
import EditUserForm from './components/forms/EditUserForm'
import UserTable from './components/tables/UserTable'

const App = () => {

  const tasksData = [
    { id: 1, name: 'Pasear al perro', taskname: 'No urgente' },
    { id: 2, name: 'Estudiar React', taskname: 'Urgente' },
    { id: 3, name: 'Lavar la ropa', taskname: 'Urgente' },
  ]

  const initialFormState = { id: null, name: '', taskname: '' }

  const [tasks, setUsers] = useState(tasksData)
  const [currentUser, setCurrentUser] = useState(initialFormState)
  const [editing, setEditing] = useState(false)

  // Create
  const addUser = task => {
    task.id = tasks.length + 1
    setUsers([...tasks, task])
  }
  // Delete
  const deleteUser = id => {
    setEditing(false)
    setUsers(tasks.filter(task => task.id !== id))
  }
  //Update
  const updateUser = (id, updatedUser) => {
    setEditing(false)
    setUsers(tasks.map(task => (task.id === id ? updatedUser : task)))
  }

  const editRow = task => {
    setEditing(true)
    setCurrentUser({ id: task.id, name: task.name, taskname: task.taskname })
  }

  return (
    <div className="container">
      <h1>To-Do App</h1>
      <div>
        <div className="row">
          {editing ? (
            <Fragment>
              <h2>Edit task</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </Fragment>
          ) : (
              <Fragment>
                <h2>Add task</h2>
                <AddUserForm addUser={addUser} />
              </Fragment>
            )}
        </div>
        <div className="row">
          <h2>View Tasks</h2>
          <UserTable tasks={tasks} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  )
}

export default App
