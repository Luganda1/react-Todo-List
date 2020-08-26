import React, { Component } from 'react';
import Item from "./TodoItem"
import TodoItem from "./TodoItem"

export default class TodoList extends Component {
    render() {
        const {items, clearList, handleDelete, handleEdit} = this.props;
        return (
            <ul className="list-group mt-5"> 
                <h3 className="text-capitalize text-center">todo list</h3>
                {items.map(item => {
                    return (
                        <TodoItem 
                            key={item.id}
                            title={item.title}
                            handleDelete={() => handleDelete(item.id)}// since we gonna pass handle delete here and we wanna know whc id to delete its better we call it with a fxn
                            handleEdit={() => handleEdit(item.id)}// same like the top this gives us proper idea of what we want to delete
                        />
                    )
                    })}
                    <button type="button" className="btn btn-block btn-danger text-uppercase my-5" onClick={clearList}>clear List</button>
            </ul>
        )
    }
}

//note my is margin-y i.e top and bottom and mx is margin-x
//we have mt mb ml and mr