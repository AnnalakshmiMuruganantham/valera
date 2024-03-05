import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Header from './Layouts/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './Components/Banner';
import Footer from './Layouts/Footer';
import './Assests/Css/Style.css';
import About from './Components/About';
import Services from './Components/Services';
import Testimonial from './Components/Testimonial';
import CallToAction from './Components/CallToAction';
import Pricing from './Components/Pricing';
import Portfolio from './Components/Portfolio';
import Team from './Components/Team';
import Faq from './Components/FAQ';
import Contact from './Components/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Banner />
    <Header />
    <About />
    <Services />
    <Testimonial />
    <CallToAction />
    <Portfolio />
    <Team />
    <Pricing />
    <Faq />
    <Contact />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
