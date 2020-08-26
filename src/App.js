import React, { Component } from 'react';
import {v4 as uuidv4} from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

//showing vs-code github setup 
class App extends Component{
  state={
    items: [],
    id: uuidv4(),
    item: '',
    editItem: false 
  };

  handleChange= (e) => {
    this.setState({
      item: e.target.value
    })
  }
  handleSubmit= (e) => {
    e.preventDefault();

    const newItem = {
      id:this.state.id,
      title:this.state.item
    }

    const updateItems = [...this.state.items,newItem]
    this.setState({
      items:updateItems,
      item:"",
      id:uuidv4(),
      editItem: false
    })

  }
  handleDelete= (id) => {
    const filteredList = this.state.items.filter(item => item.id !== id)
    this.setState({
      items: filteredList
    })
  }
  handleEdit= (id) => {
    const filteredList = this.state.items.filter(item => item.id !== id)
    const selectedItem = this.state.items.find(item => item.id === id)
    this.setState({
      items: filteredList,
      item: selectedItem.title,
      id:id,
      editItem: true
    })
  }
  clearList= () => {
    this.setState({
      items:[]
    })
  }

  render() {
    return (
      <div> 
        <div className="Container">
          <div className="row">
            <div className="col-8 mx-auto col-md-5 mt-5">
              <h3 className="text-capitalise text-center">Todo Input
              </h3>
            <TodoInput 
              item={this.state.item} 
              handleChange={this.handleChange} 
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
              />
            <TodoList 
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
            </div>
          </div>
        </div>
      </div>
    )
  }
}



export default App;
