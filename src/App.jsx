import React, { useEffect, useState } from "react"
import Die from "./Die"
import Confetti from 'react-confetti'
import "./App.css"
import Modal from './Modal';




function App() {

    function generateNewDice() {
        return {value: Math.floor(Math.random() * 6) + 1, isHeld: false, id: crypto.randomUUID()}
    }

    function allNewDice() {
        const numbers = []
        for (let i = 0; i < 10 ; i++){           
            numbers.push(generateNewDice())
        }
        return numbers
        
    }
    
    function holdDice(id) {
       setDice(oldDice => oldDice.map(value => {
        return value.id === id ? {...value, isHeld: !value.isHeld} : value
       }))

    }

    const [dice, setDice] = useState(allNewDice())
    const [tenzies, setTenzies] = useState(false)
    const [openModal, setOpenModal] = useState(false);

    React.useEffect(() => {
        const allDiceHeld = dice.every(die => die.isHeld);
        const sameValue = dice.every(die => die.value === dice[0].value);
      
        if (allDiceHeld && sameValue) {
          setTenzies(true);
          setOpenModal(true)
        }
        else setTenzies(false)
      }, [dice]);

    const handleDice = dice.map(each => 
        <Die value={each.value} key={each.id} isHeld={each.isHeld} handleHold={() => holdDice(each.id)} />    
    )

    function rollDice() {
        if (tenzies) {
            setDice(allNewDice())
        }
        else {
            setDice(prevalue => prevalue.map(value => {
                return value.isHeld ? value : generateNewDice()
            }))
        }
    }
    

    return (
        <main className="main" onClick={() => setOpenModal(false)}>
            <h1 className="title">Tenzies</h1>
           <h3 className="main-text">Roll and match dice. Quick thinking, dexterity, and friendly competition. Exciting, versatile, and fun for all ages.
          </h3>
           <div className="container">
              {handleDice}
           </div>
           <button className="button" onClick={rollDice}>{tenzies ?  "New Game" : "Roll"}</button>
           {tenzies && <Confetti /> }
           <div>
          <button 
          onClick={() => setOpenModal(true)} 
          className='modalButton'>
            Modal
          </button>
          <Modal 
          onClick={rollDice}
          open={openModal} 
          onClose={() => setOpenModal(false)} />
          </div>
        </main>
    )
}

export default App