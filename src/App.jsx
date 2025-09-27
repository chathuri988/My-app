import { useState } from 'react'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Counter from "./components/Counter";
import Greeting from "./components/Greeting";
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <Greeting isLoggedIn={true} />
      <Profile />
      <Counter />
      <Footer />
    </div>
  );
}

export default App;
