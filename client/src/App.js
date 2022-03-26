import './App.scss';
import { BrowserRouter, Routes ,Route} from "react-router-dom";
import {CatalogPage} from "./pages/CatalogPage/CatalogPage";
import {ProductPage} from "./pages/ProductPage/ProductPage";
import {Header} from "./components/Header/Header";
import {CartPage} from "./pages/CartPage/CartPage";
import {useSelector} from "react-redux";
import {CheckoutPage} from "./pages/CheckoutPage/CheckoutPage";
import {ProtectedRoute} from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  const modalOpen = useSelector((state) => state.modal.showAuthModal)
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  return (
    <div className="App">
      <BrowserRouter>
        <Header className={ modalOpen ? 'App__open' : 'App'} />
        <Routes>
          <Route path="" element={<CatalogPage />}/>
          <Route path="products/:slug" element={<ProductPage/>}/>
          <Route path="products" element={<CatalogPage />}/>
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<ProtectedRoute user={userInfo} redirectPath="/cart"><CheckoutPage /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
