import React from 'react'
import imgButton from '../images/add.png'
import {Link } from 'react-router-dom'


function Button(props) {
    return (
        <div className="col-md-6 offset-md-5">
            <div >
                <Link to="/exercise/new">
                    <img src={imgButton} />
                </Link>
            </div>
        </div>

    )
}

export default Button