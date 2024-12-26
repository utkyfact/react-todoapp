import { useContext } from "react";
import { TodoContext } from "../Contexts/TodoContext";

  

function CustomForm() {

   
    

    const {state,dispatch} = useContext(TodoContext)
    


    

    return (
        <>
            <form onSubmit={(e) => { e.preventDefault(); dispatch({ type: 'SET_TODOS' }) }} >

                <input value={state.input} onChange={(e) => dispatch({ type: 'SET_VALUE', value: e.target.value })} type="text" className="border p-2 w-full rounded-md outline-none border-purple-500" />
                <button type="submit" className="border p-2 mt-2 rounded-md ms-auto block bg-purple-500 text-white hover:opacity-70 duration-300">Kaydet</button>
                    

               
            </form>
        </>
    )
}


export default CustomForm



