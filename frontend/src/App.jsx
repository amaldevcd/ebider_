import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
// import "./App.css";
// import {
//   Home,
//   Error,
//   Register,
//   Login,
//   Verify,
//   Dashboard,
//   ProtectedRoute,
//   ForgotPassword,
//   ResetPassword,
// } from './pages';
import Login from "./pages/Login";
import Register from './pages/Register';
import AuctionPage from './pages/AuctionPage';
import ProductDetailPage from './pages/ProductDetailPage';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import HowItWork from './pages/HowItWorkPage';
import Home from './pages/Home';
import ProtectedRoute from './pages/ProtectedRoute';
import {AuthProvider} from './context/AuthProvider';
import { useAuth } from './context/AuthProvider';
import Layout from './layout/Layout';
import RequireAuth from './pages/RequireAuth';
// import Navbar from './components/Navbar';
// import { useGlobalContext } from './context';
function App() {
  const { isLoading } = useAuth();

  if (isLoading) {
    return (
      <section className='page page-center'>
        <div className='loading'></div>
      </section>
    );
  }
    return (<>
    <section className='page page-center'>
        <Router>
        <AuthProvider>
        <Navbar />
        <Routes>
         <Route path="/*" element={<Layout/>} />
        <Route path='/' element={ <Home />}/>

        <Route path='/login' element={<Login />}/>

        <Route path='/register' element={<Register />}/>

        <Route path='/working' element={<HowItWork/>}/>
        

        <Route path="/auction" element={<AuctionPage/> }/>

        <Route element={<RequireAuth/>}>
        <Route path="user/dashboard" element={<Dashboard />}/> 
        </Route>

        </Routes>
        </AuthProvider>
        </Router>
       
      
     
      </section>
    </>
    );
  // }
 
}

export default App;
