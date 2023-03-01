import React, { Component } from 'react'

export class Cotegory extends Component {
    constructor(props){
        super(props)
        this.state={
         categories: [
            {
                key: "all",
                name: "Hamisi"
            },
            {
                key: "chairs",
                name: "Stullar"
            },
            {
                key: "tables",
                name: "Masa"
            },
       
            {
                key: "softs",
                name: "Mebel"
            },
            {
              key: "Armchairs",
              name: "Kreslo"
          },
          {
            key: "Office Furnetures",
            name: "Ofis mebeli"
        },
        {
          key: "Office Equipments",
          name: "Ofis avadanligi"
      },

         ]   
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el=>(
           <div key={el.key} onClick={()=>this.props.chooseCategory(el.key)}>
            {el.name}
           </div> 
        ))}
      </div>
    )
  }
}

export default Cotegory