import React from "react";
import "../style/browsebyctgry.css";
import fruitveg from "../img/fruit$veg.webp";
import dairy from "../img/dairy-product.webp";
import grocery from "../img/Grocery.webp";
import nuts from "../img/nuts$oil.webp";


const cards = [
  {id:1, Image:fruitveg, heading:"Fruit & Vegetable",
items: ["Cauliflower"
,"Orange",
"Cucumber",
"Banana",
"Potato",
"Strawberry" ,
]},
{
  id:2, Image:dairy, heading:"Dairy Product",
items: ["Butter",
"Chocolate",
"Honey",
"Cheese",
"Ice Cream",
"Milk",
]},
{
  id:3, Image:grocery, heading:"Grocery & Staple",
items: ["Noodle",
"Oils",
"Onion",
"Red Gram",
"Rice ",
"Flavor",
]},

{
  id:4, Image:nuts, heading:"Miscellaneous",
items: ["Nut & Seed",
"Oils",
"Fruits",
"Tomatoe",
"Soup",
"More Product",
]},
]

function Browsebyctgry() {
  return (
    <div>
      <div className="brws row">
        <div className=" col-sm-6">
          <h2 className="browse">Browse by Category</h2>
        </div>
        <div className="col-sm-6  text-sm-end">
          <button className="allctgry mb-40"><a className="a-view" href="/shop">View All Category</a> </button>
        </div>
      </div>

      <div className="cardflex">
        {cards.map((card) => (
       <div key={card.id} className="ctgryimg" style={{backgroundImage:`url(${card.Image})`}} >
         <h4>{card.heading}</h4>

         <ul>
          {card.items.map(
            (item, index ) => (
 <li key={index} className="items"> {item}</li>
            )
          )}
         </ul>
       </div>

        ))}
      </div>

     
          
      
      
    
    </div>
  );
}

export default Browsebyctgry;
