import Banner from "./Components/Banner/Banner"
import Blog from "./Components/Blog/Blog"
import Client from "./Components/Client/Client"
import Creative from "./Components/Creative/Creative"

import Footer from "./Components/Footer/Footer"

import Navbar from "./Components/Navbar/Navbar"
import Service from "./Components/Service/Service"

import Who from "./Components/Who/Who"
import Work from "./Components/Work/Work"

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Service ></Service>
      <Who></Who>
      <Work></Work>
      <Creative></Creative>
      <Client></Client>
      <Blog></Blog>
      <Footer></Footer>
    </>
  )
}

export default App
