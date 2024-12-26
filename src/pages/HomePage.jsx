import React from 'react'
import CustomForm from '../components/Form'
import TodoList from '../components/TodoList'

function HomePage() {
    return (
        <>
            <div className="container mx-auto p-2">

                <h1 className="text-3xl font-bold text-center my-5 text-purple-600">Todo App</h1>


                <CustomForm />

                <TodoList />



            </div>
        </>
    )
}

export default HomePage