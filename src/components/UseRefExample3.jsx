import Todo from "./Todo"
import {useState} from 'react'

function UseRefExample3() {
    const [showTodo, setShowTodo] = useState(true)
    return <div>{showTodo && <Todo /> }
     <button 
     className="btn btn-info"
     onClick={() => setShowTodo(!showTodo)}
     >
         Toggle Todo
     </button>
    </div>
}

export default UseRefExample3