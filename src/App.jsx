import './App.css';
import {Routes, Route} from 'react-router-dom'
import Form from './pages/Form';
import Dashboard from './pages/Dashboard';
import Details from './pages/Details';
import Edit from './pages/Edit';

function App() {
  return (
    <div className="container">
      <fieldset>
        <legend></legend>
          <Routes>
              <Route path="/" element={<Form />} />
              <Route path="/dashboard" element = {<Dashboard/>}/>
              <Route path="/products/:product_id" element = {<Details/>}/>
              <Route path="/products/edit/:product_id" element = {<Edit/>}/>

          </Routes>
      </fieldset>
    </div>
  );
}

export default App;
