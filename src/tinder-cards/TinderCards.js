import React, {useState, useEffect} from 'react'
import TinderCard from 'react-tinder-card'

import './TinderCards.css'

import axios from './../axios'

function TinderCards() {
  const [peoples, setPeoples] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const req = await axios.get('/tinder/cards')

      setPeoples(req.data)
    }

    fetchData()
  }, [])

  const swiped = (direction, nameToDelete) => {
    console.log(`removeimg ${nameToDelete}`)
  }

  const outOfFrame = (name) => {
    console.log(`${name} left to screen`)
  }

  return (
    <div className="tinder_cards">
      <div className="tinder_cards__cardContainer">
        {peoples.map((person)=> ( 
          <TinderCard
            className="swip"
            key={person.name}
            preventSwipe={['up', 'down']}
            onSwipe={(dir) => swiped(dir, person.name)} 
            onCardLeftScreen= {() => outOfFrame(person.name)}
          >
            <div
              style={{backgroundImage:`url(${person.imgUrl})`}}
              className="card"
            >
            <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
      
    </div>
  )
}

export default TinderCards
