import React from 'react'
import imgButton from '../images/add.png'

function Button(props){
    return(
        <div className="col-md-6 offset-md-5">
                <div >
                <img src={imgButton} />
                </div>
        </div>

    )
}

export default Button