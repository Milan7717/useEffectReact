import React, { useState } from 'react'

const ToDoList = () => {
    const [newItem, setItem] = useState("")
    const [todos, setTodos] = useState([])

    //prevent from refresh
    function handleSubmit(e) {
        e.preventDefault()

        setTodos((currentTodos) => {
            return [...todos, { id: crypto.randomUUID(), title: newItem, completed: false },
            ]

        })

        setItem("")
    }

    function toggleTodo(id, completed) {
        setTodos(currentTodos => {
            return currentTodos.map(todo => {
                if (todo.id === id) {
                    return { ...todo, completed }
                }
                return todo
            })
        })
    }

    function deleteTodo(id){
        setTodos(currentTodos=>{
            return currentTodos.filter(todo=>todo.id !==id)
        })
    }



    return (
        <div class="text-white bg-gray-800 h-[100vh] flex justify-center items-center">
            <div className=' rounded-lg p-4  w-[60%]'>
                <form onSubmit={handleSubmit} className='flex flex-col'>
                    <div className='flex flex-col my-2'>
                        <label htmlFor="item" className='text-2xl text-center mb-2'>New Item</label>
                        <input type="text" value={newItem} onChange={e => setItem(e.target.value)} className='text-black bg-blue-400 p-1 pl-2 rounded-lg border-blue-500 border-2' />
                    </div>
                    <button className='text-xl text-center bg-transparent rounded-lg border-blue-500 border-2'>Add</button>
                </form>
                <h1 className='mt-6 text-2xl'>Todo List</h1>
                <ul className='text-xl ml-4 mt-2'>
                    {todos.length===0 && "Add New todos to see"}
                    {todos.map(todo => {
                        return <li key={todo.id}>
                            <label>
                                <input className='mr-2 ' type="checkbox" checked={todo.completed} onChange={e => toggleTodo(todo.id, e.target.checked)} />
                                {todo.title}
                            </label>
                            <button onClick={()=>deleteTodo(todo.id)} className='ml-4 text-red-500'>Delete</button>
                        </li>
                    })}


                </ul>
            </div>
        </div>

    )
}

export default ToDoList