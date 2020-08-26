import React, { Component } from 'react';
import {v4 as uuidv4} from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

//showing vs-code github setup 
class App extends Component{
  state={
    items: [
      {
        id:1,
        title: 'wakeup '
      },
      {
        id:2,
        title: 'pray'
      }
    ],
    id: uuidv4(),
    item: '',
    editItem: false 
  };

  handleChange= (e) => {console.log('handle change')}
  handleSubmit= (e) => {console.log('handle submit')}
  handleDelete= (id) => {console.log(`handle delete ${id}`)}
  handleEdit= (id) => {console.log(`handle edit ${id}`)}
  clearList= () => {console.log('Clear list ')}

  render() {
    return (
      <div> 
        <div className="Container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5">
              <h3 className="text-capitalise text-center">TodoInput
              </h3>
            </div>
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
    )
  }
}



export default App;
