import Button from '@material-ui/core/Button'
import CurrencyFormat from 'react-currency-format'
import {useData} from '../Context'


const Product = ({title,price,image}) => {
const [{basket},dispach] = useData()


const addToCart = () => {
  dispach({
    type: 'add',
    item: {
      title: title,
      price: price,
      image: image
    }
  })
}
return(
  <div>
    <div className='product_container'>
      <div className='img_container'>
        <img src={image} alt='iphone12 apple ios' />
      </div>
      <div className='title'>
        <h4>{title}</h4>
        <h5 style={{color: 'green'}}><CurrencyFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'$'} /></h5>
      </div>
      <Button onClick={addToCart} style={{margin: '10px 0px'}} variant="outlined" color="primary">Add to cart</Button>

    </div>
    <style jsx>{`
        .product_container {
          width: 170px;
          height: 250px;
          background-color: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 0px 7px;
          border-radius: 8px;
          box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
        }

        img {
          height: 150px;
        }

        .img_container {
          height: 80%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .title {
          width: 100%;
          padding: 0px 5px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }


    `}
    </style>
  </div>
)
}

export default Product
