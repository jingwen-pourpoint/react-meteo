import React from 'react'


export const Bouton = (props) => {
    return (
        <button style={{"backgroundColor" : "yellowgreen"}} onClick={props.onClick} > {props.children}</button>
    )
}
