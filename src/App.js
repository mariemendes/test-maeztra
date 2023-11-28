import './App.css';
import TopHeader from './Header/TopHeader';
import Header from './Header/Header';
import BottomFooter from './Footer/BottomFooter';
import Footer from './Footer/Footer';
import Newsletter from './Newsletter/Newsletter';
import Collection from './Collection/Collection';
import Banner from './Banner/Banner';
import TipBar from './TipBar/TipBar';
import Partner from './Partner/Partner';
import Products from './Products/Products';

function App() {
  return (
    <div className="App">
      <TopHeader />
      <Header />
      <Banner />
      <TipBar />
      <Partner />
      <Products />
      <Collection />
      <Newsletter />
      <Footer />
      <BottomFooter />
    </div>
  );
}

export default App;
