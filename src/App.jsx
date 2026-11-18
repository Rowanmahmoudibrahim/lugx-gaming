import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Trending from "./components/Trending";
import MostPlayed from "./components/MostPlayed";
import Categories from "./components/Categories";
import OurShop from "./components/OurShop";
import Shop from "./components/Shop";
import Details from "./components/Details"; // صفحة تفاصيل المنتج
import Contact from "./components/Contact"; // صفحة التواصل
import SignIn from "./components/SignIn"; // صفحة تسجيل الدخول

function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Trending />
      <MostPlayed />
      <Categories />
      <OurShop />
    </main>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/details" element={<Details />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;