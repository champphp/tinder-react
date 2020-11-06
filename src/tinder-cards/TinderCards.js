import React, {useState} from 'react'
import TinderCard from 'react-tinder-card'

import './TinderCards.css'

function TinderCards() {
  const [peoples, setPeoples] = useState([
    {
      name: 'Elon Musk',
      url: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/FDC1/production/_112216946_elonmusk.jpg'
    },
    {
      name: 'Jeff Bezos',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg/1024px-Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg'
    }
  ])

  const swiped = (direction, nameToDelete) => {
    console.log(`removeimg ${nameToDelete}`)
    // setLastDirection(direction)
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
              style={{backgroundImage:`url(${person.url})`}}
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
