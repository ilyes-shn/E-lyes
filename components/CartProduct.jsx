import CurrencyFormat from 'react-currency-format'
import {useData} from '../Context'
import Button from '@material-ui/core/Button';


const CartProduct = ({title,price,image, id}) => {
  const [{basket},dispach] = useData()
const num = id;
const remove = () => {
  dispach({
    type: 'remove',
    id: num
  })
}
  return (
    <div className='product'>
      <img src={image} alt={title} />
      <div className='disc'>
        <h5>{title}</h5>
        <h4><CurrencyFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2}/></h4>
      </div>
      <button onClick={remove} style={{backgroundColor: 'red', border: 'none', height: '30px', padding: '7px', outline: 'none', color: 'white', borderRadius: '3px', cursor: 'pointer'}}>Remove</button>
      <style jsx>{`
          .product {
            height: 150px;
            width: 100%;
            display: flex;
            padding; 10px;
            align-items: center;
          }

          .product img {
            height: 90px;
          }

          .disc {
            flex: 1;
            padding-left: 10px;
          }
      `}</style>
    </div>
  )
}


export default CartProduct
