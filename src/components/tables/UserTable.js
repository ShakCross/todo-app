import React from 'react'

const UserTable = props => (
  <table>
    <thead>
      <tr>
        <th>Task</th>
        <th>Priority</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.tasks.length > 0 ? (
        props.tasks.map(task => (
          <tr key={task.id}>
            <td>{task.name}</td>
            <td>{task.taskname}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(task)
                }}
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteUser(task.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
          <tr>
            <td colSpan={3}>No tasks</td>
          </tr>
        )}
    </tbody>
  </table>
)

export default UserTable
