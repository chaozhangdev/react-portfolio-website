import React from 'react'
import './Card.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Card(props) {
  
  AOS.init();

  const titleStyle = {
    marginBottom: '10px',
    textAlign: 'center'
  }

  const listWrapperStyle = {
    marginTop: '20px',
    fontSize: '16px'
  }

  const imageStyle = {
    width: '100%',
    height: 'auto'
  }

  return (
    <div>
      <a href={props.link}>
        <div className='card hvr-back-pulse' data-aos="zoom-in" data-aos-once="true">
          <h2 style={titleStyle}>{props.name}</h2>
          <img src={props.src} style={imageStyle} />
          <ul style={listWrapperStyle}>
            {props.li.map(e => 
              <li>{e}</li>
            )}   
          </ul>
        </div>
      </a>
    </div>
  )
}