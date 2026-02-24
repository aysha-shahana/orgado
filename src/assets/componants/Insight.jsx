import React from 'react'
import "../style/insight.css";

import insight1 from "../img/insight1.webp";
import insight2 from "../img/insight2.webp";
import insight3 from "../img/insight3.webp";


const insights=[
    {id:100, image:insight1, name:"Orgado Admin", date:"09/12/23", time:"11:24 am", quotes:"Things I Wish I Had Known About Angular When I Started New"},
    {id:101, image:insight2, name:"John Smith", date:"09/12/23", time:"11:22 am", quotes:"Unique Ideas for Healthy Food You Haven’t heard yet"},
    {id:102, image:insight3, name:"Jennifer Lee", date:"09/12/23", time:"11:17 am", quotes:"Five Data-Loading Patterns To Boost Web Performance"}
];


function Insight() {
  return (
    <div>
      <div>
        <h5 style={{color:'green',textAlign:"center", fontFamily:"trebuchet MS" }}>News insight</h5>
        <h1 style={{textAlign:"center", fontFamily:"trebuchet MS", fontWeight:"bold"}}>News From Orgado</h1>
      </div>
<div className='insight' >
{insights.map((insight)=>(
    <div key={insight.id}>
        <img src={insight.image} alt="image" />
        <h6>{insight.name} {insight.date} {insight.time}</h6>
        <h3>{insight.quotes}</h3>
    </div>
    
))}
     
      </div>

    </div>
  )
}

export default Insight
