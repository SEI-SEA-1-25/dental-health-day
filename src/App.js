import { BrowserRouter, Route } from 'react-router-dom'
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Contact from "./components/pages/Contact";
import Header from "./components/partials/Header";
import serviceDetails from './data/serviceDetail';

const App = () => {
  
 
    return (
      
      <BrowserRouter>

    <div className="app">
      <Header/>
      <main>
        <Route exact path="/" component={Home}/>
        <Route path="/services" render={() => <Services serviceDetails={serviceDetails} />}/>
        <Route path="/contact" component={Contact}/>
      </main>
    
    </div>

    </BrowserRouter>
  )

}
export default App;
// import logo from './logo.svg';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
