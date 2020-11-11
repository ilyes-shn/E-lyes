import CurrencyFormat from 'react-currency-format'
import {useData} from '../Context'
import Button from '@material-ui/core/Button';


const CartProduct = ({title,price,image, id}) => {
  const [{basket},dispach] = useData()
console.log(id)
const remove = (id) => {
  dispach({
    type: 'remove',
    id: id
  })
}
  return (
    <div className='product'>
      <img src={image} alt={title} />
      <div className='disc'>
        <h5>{title}</h5>
        <h4><CurrencyFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2}/></h4>
      </div>
      <Button variant="outlined" onClick={remove}>Remove</Button>
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
