import { createContext } from "react"
import { useReducer } from "react"
import { v4 as uuidv4 } from 'uuid';



export const TodoContext = createContext(null)



const reducer = (state,action) =>{
    if(action.type == 'SET_VALUE'){
  
      return{
        ...state,
        input:action.value
      }
    }
    if(action.type == 'SET_TODOS'){
      if(state.input != ''){
        return{
          todos:[...state.todos,{todo:state.input,id:uuidv4()}],
          input:'',
        }
        
      }else{
        return state
      }

    }
    if(action.type == 'EDIT_TODO'){
        const updatedTodo = state.todos.find(e => e.id == action.id)
        updatedTodo.todo = action.payload

        return{
            ...state,
        }
    }
    if(action.type == 'DELETE_TODO'){
        const deletedTodo = state.todos.filter(e => e.id != action.id)
        return{
            ...state,
            todos:deletedTodo
            
        }
    }
  }

function TodoContextComponent({children}){

    const initialValues = {
        input:'',
        todos:[]
      }
    
      const [state,dispatch] = useReducer(reducer,initialValues)

    return(
        <>
            <TodoContext.Provider value={{state,dispatch}}>
                {children}
            </TodoContext.Provider>
        </>
    )
}


export default TodoContextComponent