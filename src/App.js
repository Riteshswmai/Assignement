import './App.css'
import Header from "./component/Header";
 import Banner from "./component/Banner";

import Service from "./component/Service";
// import Projects from "./component/Projects";
// import Footer from "./component/Footer";

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Service/>
       {/* <Projects />
      <Footer /> */}
    </div>
  );
}

export default App;