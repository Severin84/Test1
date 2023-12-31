import React from 'react'
import './Products.css';
import Prod1 from './Prod1.svg';
import {Link} from 'react-router-dom'
const Products = () => {
  return (
    <div className='Entire'>
        <div className='Nav'>
        <div>
        <Link to="/Products">
          <h2>Sports Club</h2>
          </Link>  
        </div>
        <div>
         <Link to="/FA">
          <h2>Federations
           Associations
          </h2>  
          </Link>
        </div>
        <div>
         <Link to="/Brands">
          <h2>Brands</h2>  
          </Link>
        </div>
        <div>
            <Link to="/Athe">
          <h2>Athletes</h2> 
          </Link> 
        </div>
        <div>
          <Link to="/Es">
          <h2>E-Sports</h2> 
          </Link> 
        </div>
        <div>
          <Link to="/md">
          <h2>Media Publishers</h2>  
          </Link>
        </div>
      </div>
      <div className='scimg'>
         <img src={Prod1} alt="" />
      </div>
      <div className='spwords'>
        <p>Whether you are a football club, rugby club, cricket club, basketball club or any other sports club, operating at the highest level or semi-pro - Sponsorlytix will measure your sponsors’ brand values in near-realtime. </p>
      </div>
    </div>
  )
}

export default Products