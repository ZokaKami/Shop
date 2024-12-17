 
import Header from "../components/Header/header.tsx"
import Hero from "../components/Hero/hero.tsx"
import Brands from "../components/Hero/brands.tsx"
import NewArrivals from "../components/Listings/NewArrivals.tsx"
import TopSelling from "../components/Listings/TopSelling.tsx"
import Sections from "../components/Sections/sections.tsx"
import Reviews from "../components/Reviews/reviews.tsx"
import Newsletter from "../components/Newsletter/newsletter.tsx"
import Socials from "../components/Socials/socials.tsx"
import Footer from "../components/Footer/footer.tsx"
import './App.css'
import React from "react"

function App() {
 

  return (
    <>
      <Header/>
      <Hero/>
      <Brands/>
      <NewArrivals/>
      <TopSelling/>
      <Sections/>
      <Reviews/>
      <Newsletter/>
      <Socials/>
      <Footer/>
    </>
  )
}

export default App
