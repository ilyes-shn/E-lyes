import {Provider} from '../Context'
import '../styles/main.css'

function App({ Component, pageProps }) {
  return (
    <Provider>
        <Component {...pageProps} /> 
    </Provider>
  )
}

export default App
