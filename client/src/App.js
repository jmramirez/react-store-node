import './App.scss';
import { BrowserRouter, Routes ,Route} from "react-router-dom";
import {CatalogPage} from "./pages/CatalogPage/CatalogPage";
import {ProductPage} from "./pages/ProductPage/ProductPage";
import {Header} from "./components/Header/Header";
import {CartPage} from "./pages/CartPage/CartPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="" element={<CatalogPage />}/>
          <Route path="products/:slug" element={<ProductPage/>}/>
          <Route path="products" element={<CatalogPage />}/>
          <Route path="cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
