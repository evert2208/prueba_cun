import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import './App.css'
import { store } from './store'
import { AppRouter } from './router/AppRouter'



export const App = ()=> {
 
  return (
     <Provider store={store}>
    <BrowserRouter>
    <AppRouter/>
    </BrowserRouter>
    </Provider>
  )
}


