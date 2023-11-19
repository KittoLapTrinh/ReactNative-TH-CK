import Store from './redux/store';
import { Provider } from 'react-redux';
import Calculator from './components/Calculator';



export default function App() {

  
  return (
      <Provider store={Store} >
        <Calculator/>
      </Provider>
    
  )
    
  
}

