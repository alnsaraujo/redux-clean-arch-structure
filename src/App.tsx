import './App.css'

import { Provider } from "react-redux";
import { store } from './infrastructure/storage';
import { User } from './components/User';

function App() {

  return (
    <Provider  store={store}>
      <User />
    </Provider>
  )
}

export default App
