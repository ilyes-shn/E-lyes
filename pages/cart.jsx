import React from 'react'
import Layout from '../components/Layout'
import {useData} from '../Context'
import CurrencyFormat from 'react-currency-format'
import Button from '@material-ui/core/Button';
import CartProduct from '../components/CartProduct'


const Cart = () => {
const [{basket},dispach] = useData()
const amount = basket.reduce((total, item) => total+item.price,0)

    return (
        <Layout>
        <div className='cart'>
          <div style={{display: 'flex',justifyContent: 'center'}}>
          <div className='checkout'>
            <h2>Checkout</h2>
            <h4>Amount to pay <CurrencyFormat value={amount} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2}/></h4>
            <Button variant="contained" color="primary" onClick={() => alert('Psahtek ;)')}>Purchase</Button>
          </div>
          </div>
          <div className='shopItems'>
              <h3 style={{color: 'white'}}>Shopping list</h3>
              {
                basket.map((item,index) => {
                  return (
                    <div key={Math.random()}><CartProduct id={index} title={item.title} price={item.price} image={item.image} /></div>
                  )
                }
              )
              }
          </div>
        </div>
    <style jsx>{`
    .cart {
        margin-top: 50px;
        padding: 2%;
        min-height: 100vh;
    }

    .checkout {
      width: 300px;
      background-color: #fffeb8;
      padding: 20px;
      display: flex;
      flex-direction: column;
    }

    .checkout h2 {
      width: 100%;
      text-align: center;
    }

    .checkout h4 {
      padding: 20px 0px;
    }

    .shopItems {
      padding: 20px;
    }
    `}</style>
        </Layout>
    )
}

export default Cart
