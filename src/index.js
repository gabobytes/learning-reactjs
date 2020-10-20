import React from 'react'
import ReactDOM from 'react-dom'

const user = {
  firstName: 'Gabriel',
  lastName: 'Melo',
  avatar: 'https://icons.iconarchive.com/icons/icons8/windows-8/256/Cinema-Ninja-Turtle-icon.png'
}

function getName(user){
  return `${user.firstName}  ${user.lastName}`
}

function getGreeting(user){
  if(user)
  {
    return <h1>Hello {getName(user)}</h1>
  }
  return <h1>Hello Stranger</h1>

}

const name = 'Gabriel'
const element =  (

    <div>
        <h1>{getGreeting(user) }</h1>
        <img src={user.avatar} />
    </div>
)



const container = document.getElementById('root')

ReactDOM.render(element,container)