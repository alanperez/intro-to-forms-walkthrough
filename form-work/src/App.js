import React, { useState } from "react";
import Form from './component/Form'
import {Player} from './component/Player'
import uuidv4 from 'uuid/v4'



function App() {


  const [players, setPlayers] = useState([{
    id: uuidv4(),
    name: 'Diddo',
    email: '5 Feet',
    role: '210lbs'
  },
  {
    id: uuidv4(),
    name: 'Alexandar Nathanael Fabion Braxton Jr. III',
    email: '7.5 Feet',
    role: '140lbs'
  },
  {
    id: uuidv4(),
    name: 'Jareld',
    email: '6.5 Feet',
    role: '280lbs'
  }]
  )
  


const [inputForm, setInputForm] = useState({
  name: '',
  email: '',
  role:''
})

const [isEditing, setIsEditing] = useState(false)

const editPlayers = (id,name,email,role, array) => {
  let editArray = array;
  //            Obj callback look through all the obj and if the obj.id is the same as id we store it in index
  let index = editArray.findIndex(obj => obj.id === id)
  editArray[index].name=name
  editArray[index].email=email
  editArray[index].role=role
  setPlayers(editArray)
  setIsEditing(false)
}

  return (


    <div className="App">
      <Form inputForm={inputForm} setInputForm={setInputForm} players={players} setPlayers={setPlayers} isEditing={isEditing} setIsEditing={setIsEditing} editPlayers={editPlayers}/>

      <h1>hello</h1>
            {/* item is current iteration  */}
    
      {players.map((item,key) => (
       <div key={key}>
         <Player isEditing = {isEditing} setIsEditing={setIsEditing} inputForm={inputForm} setInputForm={setInputForm} {...item} />
       </div>
      ))}

    </div>
  );
}

export default App;
