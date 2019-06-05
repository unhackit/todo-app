import React from 'react';
import './App.css';
import TodoForm from './TodoForm.js';
import TodoList from './TodoList.js'

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      searchfield: '',
      items: [],
    }
  }

  onSearchChange = (e) => {
    this.setState({searchfield: e.target.value})
  }

  onSubmit = (e) => {
    if (this.state.searchfield !== '') {
    e.preventDefault();
    const newitem = {
      id: 1 + Math.random(),
      value: this.state.searchfield
    }
    const Items = [...this.state.items]
    this.state.items.push(newitem)
    this.setState({Items, searchfield: ''})
    }
    else {
      return false;
    }
  }


    deleteItem = (index) => {
      const update = this.state.items.filter(item => {
        return item.id !== index;
      })

      this.setState({items: update})
    }

  render(){
    return (
      <div>
        <div className="mt-4 mb-4">
          <h4>Made with <i class="fas fa-heart" id="i"></i> by Goshii</h4>
        </div>
        <TodoForm searchChange={this.onSearchChange} submit={this.onSubmit} value={this.state.searchfield}/>
        {
          this.state.items.map ((item , i) => {
            return <TodoList list={item.value} key={i} index={item.id} deleteItem={this.deleteItem}/>
          })
        }
      </div>
    )
  }
}


export default App;