import React from 'react'
import Layout from '../components/Layout'
import {useData} from '../Context'
import CurrencyFormat from 'react-currency-format'

const Cart = () => {
const [{basket},dispach] = useData()
const amount = basket.reduce((total, item) => total+item.price,0)
    return (
        <Layout>
        <div className='cart'>
          <div className='checkout'>
            <h2>Checkout</h2>
            <h4><CurrencyFormat value={amount} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={'2'}/></h4>
          </div>
          <div className='shopItems'>
              <h1>Shopping list</h1>
              { basket.map((item) => <h2>{item.title}</h2>)}
          </div>
        </div>
    <style jsx>{`
    .cart {
        margin-top: 50px;
        min-height: 100vh;
        
    }
    `}</style>
        </Layout>
    )
}

export default Cart
