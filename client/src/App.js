import './App.scss';
import { BrowserRouter, Routes ,Route} from "react-router-dom";
import {CatalogPage} from "./pages/CatalogPage/CatalogPage";
import {ProductPage} from "./pages/ProductPage/ProductPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<CatalogPage />}/>
          <Route path="products/:slug" element={<ProductPage/>}/>
          <Route path="products" element={<CatalogPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
