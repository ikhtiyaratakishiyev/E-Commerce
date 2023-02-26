import React from 'react'
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Items from "./Components/Items"


import "./index.css"



class App extends React.Component  {
  constructor(props){
    super(props)
    this.state={
      orders:[],
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
          category: "chairs",
          price: "79.99"
        },
        {
          id: 5,
          title: "Office Furneture ",
          img: "Ofis.jpg",
          desc: "Lorem ipsum dolor sit amet",
          category: "chairs",
          price: "199.99"
        },
        {
          id: 6,
          title: "Office Equipment ",
          img: "Equipment.jfif",
          desc: "Lorem ipsum dolor sit amet",
          category: "chairs",
          price: "39.99"
        },
           
      ]
    }
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
  }
render(){
  return (
    <div className="wrapper">
    <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
    <Items items ={this.state.items} onAdd={this.addToOrder} />
    <Footer/>
    </div>
  )
}
deleteOrder(id) {
this.setState({orders: this.state.orders.filter(el => el.id !== id)})
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
