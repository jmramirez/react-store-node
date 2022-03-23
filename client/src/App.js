import './App.scss';
import { BrowserRouter, Routes ,Route} from "react-router-dom";
import {CatalogPage} from "./pages/CatalogPage/CatalogPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CatalogPage />}/>
          <Route path='/products' element={<CatalogPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
