import React from 'react';
import { useState } from 'react';
import './card.css';
function getRandomBackgroundColor() {
  const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  return randomColor;
}
const randomBackground = getRandomBackgroundColor();
const Card = ({ ticket, user, head }) => {
  const userInitials = user ? user.name.slice(0, 2).toUpperCase() : 'UU';
 
  if (head == 'status') {
    
    return (
      <div className="card">
        <div id="card_id_user">
          <div className="card-id">{ticket.id}</div>
          <div className="user-initials-circle" id="user_circle" style={{ background: randomBackground, borderRadius: 50 }}>{userInitials}</div>
        </div>
        <div className="card-title">{ticket.title}</div>
        <div style={{display:"flex"}}>
        <div id="card_tag">
          <div className="card-tag">
            <div className="card-tag-box">
            {ticket.priority}
            </div>
          </div>
        </div>
        <div id="card_tag">
          <div className="card-tag">
            <div className="card-tag-box">
              <span className="card-dot"></span>
              {ticket.tag}
            </div>
          </div>
        </div>
        
        </div>




      </div>
    )
  }
  else if (head == 'user') {
    return (
      <div className="card">
        <div id="card_id_user">
          <div className="card-id">{ticket.id}</div>
        </div>
        <div className="card-title">{ticket.title}</div>
        <div style={{display:"flex"}}>
        <div id="card_tag">
          <div className="card-tag">
            <div className="card-tag-box">
            {ticket.priority}
            </div>
          </div>
        </div>
        <div id="card_tag">
          <div className="card-tag">
            <div className="card-tag-box">
              <span className="card-dot"></span>
              {ticket.tag}
            </div>
          </div>
        </div>
        
        </div>
        
      </div>
    )
  }
  else {
    return (
      <div className="card">
        <div id="card_id_user">
          <div className="card-id">{ticket.id}</div>
          <div className="user-initials-circle" id="user_circle" style={{ background: randomBackground, borderRadius: 50 }}>{userInitials}</div>
        </div>
        <div className="card-title">{ticket.title}</div>
        <div id="card_tag">
          <div className="card-tag">
            <div className="card-tag-box">
              <span className="card-dot"></span>
              {ticket.tag}
            </div>
          </div>
        </div>
      </div>
    )
  }

};

export default Card;
