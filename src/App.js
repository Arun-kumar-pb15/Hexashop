import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/Home/Home';
import Footer from './components/footer/Footer';
import { MenSections } from './components/Men\'s/MenSections';
import WomenSections from './components/Women\'s/WomenSections';
import KidsSections from './components/Kids/KidsSections';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';
import ProductDetails from './components/Product-Details/ProductDetails';

function App() {
  const cardsData = [
    {
      img: 'women.png',
      title: 'Women',
      paragraph: 'Lorem Ipsum is simply dummy',
    },
    {
      img: 'men.png',
      title: 'Men',
      paragraph: 'Lorem Ipsum is simply dummy',
    },
    {
      img: 'kids.png',
      title: 'kids',
      paragraph: 'Lorem Ipsum is simply dummy',
    },
    {
      img: 'accessories.png',
      title: 'Accessories',
      paragraph: 'Lorem Ipsum is simply dummy',
    },
  ]

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home cardsData={cardsData} />} ></Route>
          <Route path="/MenSections" element={<MenSections />}> </Route>
          <Route path="/woMenSections" element={<WomenSections />}> </Route>
          <Route path="/KidsSections" element={<KidsSections />}> </Route>
          <Route path="/AboutUs" element={<AboutUs />}> </Route>
          <Route path="/ContactUs" element={<ContactUs />}> </Route>
          <Route path="/ProductsDetails/:productId" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
