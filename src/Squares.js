import React from 'react'

export default function Squares(props) {
    return (
        <>
            <div style={{backgroundColor: props.color}} className="squares" onClick={props.handleClick}></div>
        </>
    )
}