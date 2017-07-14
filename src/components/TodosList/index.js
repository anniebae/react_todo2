import _ from 'lodash'
import React, { Component } from 'react'
import TodosListHeader from '../TodosListHeader/'
import TodosListItem from '../TodosListItem/'

import css from './styles.css'


class TodosList extends Component {
  renderItems() {
    const props = _.omit(this.props, 'todos');

    return _.map(this.props.todos, (todo, index) => <TodosListItem key={index} {...todo} {...props} />);
  }

  render() {
    return(
      <table>

        <tbody>
          {this.renderItems()}
        </tbody>
      </table>
    )
  }
}


export default TodosList