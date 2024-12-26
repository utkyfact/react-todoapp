import { useContext, useEffect, useRef } from "react"
import { TodoContext } from "../Contexts/TodoContext"
import { Link } from "react-router"
import { toast } from "react-toastify"


function TodoList() {

    const {state, dispatch} = useContext(TodoContext)
    const prevTodosLength = useRef(state.todos.length)

    useEffect(() => {
        if (state.todos.length > prevTodosLength.current) {
            toast.success('Yapılacak eklendi')
        }
        prevTodosLength.current = state.todos.length
    }, [state.todos.length])


    return (
        <>
            {
                state.todos &&
                state.todos.map((e, i) => (
                    <Link to={`/detay/${e.id}`} key={i} className="block border p-2  rounded-md my-2">
                        {e.todo}
                    </Link>
                ))
            }

        </>
    )
}


export default TodoList