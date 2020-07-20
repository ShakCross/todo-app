import React, { useState } from 'react'

const AddUserForm = props => {
	const initialFormState = { id: null, name: '', taskname: '' }
	const [task, setUser] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...task, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!task.name || !task.taskname) return

				props.addUser(task)
				setUser(initialFormState)
			}}
		>
			<label className="mr-15">Name</label>
			<input className="mr-15" type="text" name="name" value={task.name} onChange={handleInputChange} />
			<label className="mr-15">Priority</label>
			<input className="mr-15" type="text" name="taskname" value={task.taskname} onChange={handleInputChange} />
			<button>Add new task</button>
		</form>
	)
}

export default AddUserForm
