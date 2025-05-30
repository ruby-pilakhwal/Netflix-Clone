import React from 'react'
import cards_data from '../../assets/cards/Cards_data'

const Titlecard = () => {
  return (
    <div className='title-card'>
        <h2>Top Rated</h2>
        <div className='card-list'>
            {cards_data.map((card,index)=>{
                return <div className='card' key={index}> 
                <img src={card.image} alt="" />
                <p>{card.name}</p>

                </div>



            })

            }
        </div>
    </div>
  )
}

export default Titlecard
