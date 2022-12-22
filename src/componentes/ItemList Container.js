import React from "react";
import "./ItemListContainer.css"

function ItemListContainer(props){

    return(
        <div className="contenedor">
            <h1> {props.greeting}</h1>
            <div>producto 1</div>
            <div>producto 2</div>
            <div>producto 3</div>
            <div>producto 4</div>
        </div>
    )
    }
    
export default ItemListContainer;