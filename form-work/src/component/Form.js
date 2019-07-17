import React from 'react'
import uuidv4 from 'uuid/v4'

function Form({inputForm, setInputForm, players, setPlayers, isEditing, setIsEditing, editPlayers}) {
    const {name,email,role,id} = inputForm
    const handles = e => {
        // allows us to type and it stores
        setInputForm({
            ...inputForm,
            [e.target.name]: e.target.value
        })
    }

    const addPlayer = player => {
        // spread old players, give it a new object by assigning uuid to id.. then spread in the object what we just pased it
        setPlayers([...players, { id: uuidv4(),...player }])
        setInputForm({name:'',role:'',email:''})
    }

    const onSubmit = (e,player) => {
        e.preventDefault();
        isEditing ? editPlayers(id, name, email, role, players):addPlayer(player)
        setInputForm({name:'',role:'',email:''})
    }

    return(
        <div>
            <form onSubmit={(e) => onSubmit(e,inputForm)}>

                <input
                type='text'
                name='name'
                placeholder='name'
                value={name} 
                onChange={handles}
                />

                <input
                type='text'
                name='email'
                placeholder='email'
                value={email}
                onChange={handles}
                 />

                <input
                type='text'
                name='role'
                placeholder='role'
                value={role}
                onChange={handles}
                />
            <button type='submit'>{isEditing ? "Edit":"Submit" }</button>
            </form>
        </div>
    )

} 



export default Form