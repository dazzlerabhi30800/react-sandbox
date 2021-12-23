import React, {useRef} from 'react'

const UseRefExample1 = () => {
    const inputRef = useRef()
    const paraRef = useRef()

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(inputRef.current.value)
        inputRef.current.value = 'Hello Abhishek'
        inputRef.current.style.backgroundColor = 'red';
        paraRef.current.innerText = 'Goodbye senpai!'
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="name">Name</label>
                <input ref={inputRef} type="text" id='name' className='form-control mb-2' />
                <button type='submit' className='btn btn-primary'>
                    Submit
                </button>
                <p onClick={() => inputRef.current.focus()} ref={paraRef}>Hello</p>
            </form>
        </div>
    )
}

export default UseRefExample1
