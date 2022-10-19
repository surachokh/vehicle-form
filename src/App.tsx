import './App.css';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TablePage from './Pages/TablePage';
import store from './Redux/Store/store';
import VehicleForm from './Pages/VehicleForm';
import CreateVehicle from './Pages/CreateVehicle';
import CustomerPage from './Pages/CustomerPage';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<TablePage />} />
        <Route path="/:uid" element={<VehicleForm />} />
        <Route path="/create" element={<CreateVehicle />} />
        <Route path="/customer" element={<CustomerPage />} />
      </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
