import React from 'react'
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Items from "./Components/Items"
import Category from "./Components/Category"

import "./index.css"



class App extends React.Component  {
  constructor(props){
    super(props)
    this.state={
      orders:[],
      currentItems:[],
      items: [
        {
          id: 1,
          title: "Chair ",
          img: "Chair.jpg",
          desc: "Lorem ipsum dolor sit amet",
          category: "chairs",
          price: "49.99"
        },
        {
          id: 2,
          title: "Table ",
          img: "Table.jpg",
          desc: "Lorem ipsum dolor sit amet",
          category: "tables",
          price: "99.99"
        },
        {
          id: 3,
          title: "Sofa ",
          img: "Sofa.jfif",
          desc: "Lorem ipsum dolor sit amet",
          category: "softs",
          price: "129.99"
        },
        {
          id: 4,
          title: "Armchair ",
          img: "Armchair.jfif",
          desc: "Lorem ipsum dolor sit amet",
          category: "Armchairs",
          price: "79.99"
        },
        {
          id: 5,
          title: "Office Furneture ",
          img: "Ofis.jpg",
          desc: "Lorem ipsum dolor sit amet",
          category: "Office Furnetures",
          price: "199.99"
        },
        {
          id: 6,
          title: "Office Equipment ",
          img: "Equipment.jfif",
          desc: "Lorem ipsum dolor sit amet",
          category: "Office Equipments",
          price: "39.99"
        },
           
      ]
    }
    this.state.currentItems=this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
  }
render(){
  return (
    <div className="wrapper">
    <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
    <Category chooseCategory ={this.chooseCategory} />
    <Items items ={this.state.currentItems} onAdd={this.addToOrder} />
    <Footer/>
    </div>
  )
}
chooseCategory(category) {
  if(category==="all"){
    this.setState({currentItems: this.state.items})
    return
  }
  this.setState({
    currentItems: this.state.items.filter(el=>el.category === category)
  })

}


deleteOrder(id) {
this.setState({orders: this.state.orders.filter
  (el => el.id !== id)})
}
addToOrder(item){
  let isInArray = false
this.state.orders.forEach(el => {
  if(el.id  === item.id)
  isInArray = true
})
if(!isInArray)
this.setState({orders:[...this.state.orders, item] }, )
}

}

export default App
