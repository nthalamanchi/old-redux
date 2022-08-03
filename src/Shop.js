import React, { Component } from 'react'
import { connect } from 'react-redux'
import { buyLaptop } from './redux/action/Action'


class Shop extends Component {
  render() {
    return (
      <div>
        <h1>WELCOME TO MY SHOP</h1>
        <p>dell</p>
        <p>available:{this.props.numOfLaptops}</p>
        <button onClick={this.props.buyLaptop}>buy</button>
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
return{
    numOfLaptops:state.numOfLaptops
}
}

const mapDispatchToProps=(dispatch)=>{
return{
    buyLaptop:()=>dispatch(buyLaptop())
}
}

export default connect (mapStateToProps,mapDispatchToProps)(Shop)