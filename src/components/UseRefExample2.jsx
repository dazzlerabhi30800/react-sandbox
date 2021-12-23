import { render } from '@testing-library/react'
import {useState, useEffect, useRef} from 'react'


function UseRefExample2() {
    const [name, setName] = useState('');

    const renders = useRef(1)
    const prevName = useRef('')

    useEffect(() => {
        renders.current = renders.current + 1
        prevName.current = name
    }, [name])
    return (
        <div>

            <div>Render: {renders.current}</div>
            <h2>Prev Name State: {prevName.current}</h2>
            <input 
            type="text"  
            className="form-control mb-3"
             onChange={(e) => setName(e.target.value)} />
        </div>
    )
}


export default UseRefExample2