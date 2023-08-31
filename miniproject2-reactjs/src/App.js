import Navibar from "./components/Navibar";
import Sample from "./components/Sample";
import Carousel from "./components/Carousel";
import { useState, useEffect } from "react";
import RingLoader from "react-spinners/RingLoader";
import Footer from "./components/Footer";
import Content from "./components/Content";

const App = ()=> {
  const [loading, setloading] = useState(false)
  useEffect( () => {
    setloading(true)
    setTimeout(() => {
      setloading(false)
    },2000)
  },[])
  return (
    <div>
      {
        loading? (
        <div className='App'>
        <RingLoader
        color={'blue'}
        loading={loading}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"/>
        </div>
    ):(
      <>
      <Navibar/>
      <Sample/>
      <Carousel/>
      <Content/>
      <Footer/>
      </>
    )
      }
    </div>
  );
}

export default App;
