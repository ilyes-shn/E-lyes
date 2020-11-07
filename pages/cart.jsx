import React from 'react'
import Layout from '../components/Layout'
import {useData} from '../Context'

const Cart = () => {
const [{basket},dispach] = useData()

    return (
        <Layout>
        <div className='cart'>
            <div className='shopItems'>
              <h1>Shopping list</h1>
              { basket.map((item) => <h2>{item.title}</h2>)}
            </div>
            <div className='checkout'><h2>Checkout</h2></div>
        </div>
    <style jsx>{`
    .cart {
        margin-top: 50px;
        min-height: 100vh;
        display: flex;
        justify-content: space-between;
    }
    `}</style>
        </Layout>
    )
}

export default Cart
