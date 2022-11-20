import './App.css';
import Hero from './Components/Hero/Hero';
import Items from './Components/Items/Items';
import MIddle from './Components/Middle_Section/MIddle';
import OrderNow from './Components/OrderNow/OrderNow';
import ProductSection from './Components/ProductSection/ProductSection';
import Question from './Components/Question/Question';
import Footer from './Components/Shared/Footer';
import Header from './Components/Shared/Header';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <Items></Items>
      <MIddle></MIddle>
      <ProductSection></ProductSection>
      <OrderNow></OrderNow>
      <Question></Question>
      <Footer></Footer>
    </div>
  );
}

export default App;



