import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Product from "../components/Product";
import Ingredients from "../components/Ingredients";
import Reviews from "../components/Reviews";
import Promotion from "../components/Promotion";
import Payment from "../components/Payment";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import OrderForm from "../components/OrderForm";

export default function Home() {
  return (
    <>
     <Header />
    <Hero />
    <Features />
    <Product />
    <Ingredients />
    <Reviews />
    <Promotion />
    <OrderForm />
    <Payment />
    <Contact />
    <Footer />
    </>
  );
}