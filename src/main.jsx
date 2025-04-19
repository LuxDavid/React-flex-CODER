import { createRoot } from 'react-dom/client';
import './styles/App.css';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { CartContextProvider } from './context/cartContext.jsx';

createRoot(document.getElementById('root')).render(
  
    <CartContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartContextProvider>


)
