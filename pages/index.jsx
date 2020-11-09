import {useData} from '../Context'
import Layout from '../components/Layout'
import Product from '../components/Product'


const Home = () => {
const [{basket},dispach] = useData()
const products = [
  {
   title:'Iphone 12',
   price:1000.99,
   image:'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-black-select-2020?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1601684204000'
  },
  {
    title:'Macbook Pro',
    price:9000,
    image:'https://lmt.mstatic.lv/devices/images/450x450/Apple_MacBook_Pro_133_RetinaTB_QC_i5_20GHz16GB1TBIntel_Iris_PlusSpace_GreyRUS_2020404.png'
  },
  {
    title:'CocoPops',
    price:10,
    image:'https://fridg-front.s3.amazonaws.com/media/products/coco-pops-kelloggs-paquet-de-550-g.png'
  },
  {
    title:'Beats',
    price:300,
    image:'https://cdn.shopify.com/s/files/1/0805/4543/products/Beats_by_Dre_Beats_EP_Wired_Headphones_-_Black_1024x1024.png?v=1578307640'
  },
  {
    title:'Folding-bike',
    price:700,
    image:'https://www.danholt.de/181001/Uploaded/daniel%7Cgocycle-gs-grey-black-exe.png'
  }
 ]
  return (
    <Layout>
      <div className='cover'></div>
      <div className="container">
        <h2>Products</h2>
      <div className='products'>
        { products.map((item) => <div key={item.title} className='item'><Product title={item.title} price={item.price} image={item.image} /></div>)}
      </div>
      </div>
      <style jsx>{`
          .cover {
            width: 100%;
		        height: 300px;
		        overflow: hidden;
            margin-top: 50px;
            background-image: url('https://upload.wikimedia.org/wikipedia/commons/2/2e/Arzew_-_4.jpg');
            background-position: center;
            background-size: cover;
          }

          .container {
            padding: 40px;
            min-height: 100vh;
          }

          .products {
              display: flex;
              width: 100%;
              overflow-x: scroll;
              padding-right: 15px;
          }

          .item {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 15px 15px;
          }

          h2 {
            margin-bottom : 30px;
          }
        `}
      </style>
    </Layout>
  )
};

export default Home
