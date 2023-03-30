import React from 'react'
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

const Item = ({id,name,picture,stock,price,category,key, presentacion,marca}) => {

        return (
             <div className='itemContainer'  key={id}>
                <div key={id} className='item'> 
                    <div className='card'>
                    <Link className="link" to={`/item/${id}`}> <img className='imgItem' src={picture}></img>
                        <h1>{name}</h1>
                        <h3>{marca}</h3>
                        <span>{presentacion}</span>
                        <h2>${price}</h2></Link>
                             <ItemCount stock={stock} productName={name} price= {price} picture={picture} id={id} idKey={id} /> 
                        
                    </div>
                </div>
            </div>
            
        )}
export default Item