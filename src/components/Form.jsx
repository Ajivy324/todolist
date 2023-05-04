import React, { useState } from 'react'

const Form = (props) => {
    const [item, setItem] = useState("");
    
    const todoItem = {
        text: item,
        complete: false
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.setCurrentItem([...props.currentItem, todoItem])
        setItem("")
    }
    return (
        <div>
            <h2>Create To Do List</h2>
            <form onSubmit={ handleSubmit }>
            <textarea 
                rows="4"
                cols="50"
                placeholder="Enter your task here"
                onChange={ (e) => setItem(e.target.value) }
                value={ item }
                className='form-control'
            ></textarea>
            <input className='btn btn-primary' type="submit" value="Add" />
        </form>
        </div>
    )
}

export default Form