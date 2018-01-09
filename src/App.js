import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas, tachar y destacharlas y error de validacion en el input

class App extends Component {
  constructor() {
    super()
    // this.completeTask = this.completeTask.bind(this)
    this.updateInput = this.updateInput.bind(this)
    this.validateContent = this.validateContent.bind(this)
    this.state = {
      tasks: [
        { id: 1, name: "Sacar la ropa", done: false },
        { id: 2, name: "Hacer la cama", done: true },
        { id: 3, name: "Leer un rato", done: false }
      ],
      newTask: '',
      error: false,
    }
  }
  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.tasks.map((task, index) => <li className={task.done ? 'done' : ''} key={task.id} onClick={this.completeTask.bind(this, task.id)}>{task.name}</li>)}
          </ul>
          <form onSubmit={this.validateContent}>
            <input className={this.state.error ? 'error' : ''} type="text" id="new-task" placeholder="Ingresa una tarea y oprime Enter" value={this.state.newTask} onChange={this.updateInput}/>
          </form>
        </div>
      </div>
    )
  }

updateInput(e) {
  this.setState({
    error: false,
    newTask: e.target.value
  })
}

completeTask(clickedId, e) {
  this.setState({
    tasks:
      this.state.tasks.map(task =>
      task.id === clickedId ? {id: task.id, name: task.name, done: !task.done} : task
    )
  })
}

  validateContent(e) {
    e.preventDefault()
    const input = this.state.newTask
    if (input === '') {
      this.setState({
        error: true,
      })
    } else {
      const length = this.state.tasks.length + 1
      this.setState({
        tasks: [...this.state.tasks, {id: length, name: this.state.newTask, done: false}],
        newTask: ''
      })
    }
  }
}

export default App;
