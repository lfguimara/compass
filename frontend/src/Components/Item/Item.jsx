import React from 'react';
import './Item.css';

const Item = (props) => {
  return (
    <div className="item">
      <div className="item-image-wrapper">
        <img src={props.image} alt={props.name} />
        <button className="add-to-cart">Add to Cart</button>
      </div>
      <p>{props.name}</p>
      <div className="item-subname">
        <span>{props.subname}</span>
      </div>
      <div className="item-prices">
        <div className="item-price-new">
          {props.new_price}
        </div>
        <div className="item-price-old">
          {props.old_price}
        </div>
      </div>
    </div>
  );
}

export default Item;
