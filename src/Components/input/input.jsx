import React from 'react'
import i from './input.module.css'


function Input(props) {
    return (
        <label>
            <input className={i.input}{...props} />
            
        </label>
    )
}

export default Input
