import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Products from '../Components/Products';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Contact from '../Components/Contact';
import Product from '../Components/Product';

const Rout=()=>{
    return(
        <BrowserRouter>
            <Header/>
            <div className='Content'>
            <Routes>
                <Route path='/' element={<Products/>}/>
                <Route path='product/:id' element={<Product/>}/>
                <Route path='contact' element={<Contact/>}/>
            </Routes>
            </div>
            <Footer/>
        </BrowserRouter>
    )
}

export default Rout;
