import React, { useState, useEffect } from 'react'

const EditUserForm = props => {
  const [task, setUser] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [props]
  )

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...task, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(task.id, task)
      }}
    >
      <label>Name</label>
      <input type="text" name="name" value={task.name} onChange={handleInputChange} />
      <label>Task</label>
      <input type="text" name="taskname" value={task.taskname} onChange={handleInputChange} />
      <button>Update task</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditUserForm
