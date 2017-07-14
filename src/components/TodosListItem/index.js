import React, { Component } from 'react'
import css from './styles.css'

import editIcon from '../../img/icon-edit.png'
import deleteIcon from '../../img/icon-delete.png'
import saveIcon from '../../img/icon-save.png'
import cancelIcon from '../../img/icon-cancel.png'

class TodosListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false
    };
  }

  renderTaskSection() {
    const { task, isCompleted } = this.props;


    const taskStyle = {
        textDecoration: isCompleted ? 'line-through' : 'none',
        cursor: 'pointer'
    }

    if (this.state.isEditing) {
      return(
        <td>
          <form onSubmit={this.onSaveClick.bind(this)}>
            <input type="text" defaultValue={task} ref="editInput" />
          </form>
        </td>
      )
    }

    return (
      // <td style={taskStyle}
        <td style={taskStyle} 
            onClick={this.props.toggleTask.bind(this, task)}
        >
            {task}
        </td>
    )
  }

  renderActionSection() {
    if (this.state.isEditing) {
      return (
        <td>
          <button onClick={this.onSaveClick.bind(this)}>
            <img src={saveIcon} className="listIcon" alt=""/>
          </button>
          <button onClick={this.onCancelClick.bind(this)}>
            <img src={cancelIcon} className="listIcon" alt=""/>
          </button>
        </td>
      )
    }

    return (
        <td>
            <button onClick={this.onEditClick.bind(this)}>
                <img src={editIcon} className="listIcon" alt=""/>
            </button>
            <button onClick={this.props.deleteTask.bind(this, this.props.task)}>
                <img src={deleteIcon} className="listIcon" alt=""/>
            </button>
        </td>
    )
  }

  render() {
    return(
      <tr className="listItem">
        {this.renderTaskSection()}
        {this.renderActionSection()}
      </tr>
    )
  }

  onEditClick() {
    this.setState({ isEditing: true })
  }
  onCancelClick() {
    this.setState({ isEditing: false })
  }
  onSaveClick(event) {
    event.preventDefault();

    const oldTask = this.props.task;
    const newTask = this.refs.editInput.value;
    this.props.saveTask(oldTask, newTask);
    this.setState({ isEditing: false })
  }
}


export default TodosListItem