import React from 'react'

export const Player = ({name,email,role,id,setIsEditing, isEditing, setInputForm}) => {
const populateForm = (e,name,email,role,id) => {
  e.preventDefault();
  setIsEditing(true)
  setInputForm({name:name, email:email, role:role, id:id})
}

  return (
    <div style={{border: '1px solid black', margin: '20px auto'}}>
      <p>{name}</p>
      <p>{email}</p>
      <p>{role}</p>
      <button onClick={e => populateForm(e,name,email,role,id)}>Edit</button>
    </div>
  )
}
