import CurrencyFormat from 'react-currency-format'
import {useData} from '../Context'
import Button from '@material-ui/core/Button';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';


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
      <HighlightOffOutlinedIcon onClick={remove} style={{color: 'red',cursor: 'pointer', fontSize: '35px'}} />
      <style jsx>{`
          .product {
            height: 150px;
            width: 100%;
            display: flex;
            padding; 10px;
            margin-bottom: 5px;
            align-items: center;
            }

          .product img {
            height: 90px;
          }

          .disc {
            flex: 1;
            padding-left: 10px;
            color: white
          }
      `}</style>
    </div>
  )
}


export default CartProduct
