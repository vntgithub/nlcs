import React, { useEffect, useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


// import { cartContext, cartProvider } from './contexts/cart.context';
import './App.css';
import LoginPage from './pages/login.page';
import Topmenu from './components/TopMeu';
import Banner from './components/Jumbotron';
import containerBook from './components/containerBook';


function App() {
  const data = [
    {
        "_id": "5f865cb354b82d21803d6637",
        "name": "Breath: The New Science of a Lost Art",
        "author": "James Nestor",
        "price": 25.76,
        "urlimg": "https://res.cloudinary.com/vntrieu/image/upload/v1602641318/book/9780735213616_fdy3ok.gif"
    },
    {
        "_id": "5f865dbd54b82d21803d6638",
        "name": "Data Science",
        "author": "John D. Kelleher and Brendan Tierney",
        "price": 14.67,
        "urlimg": "https://res.cloudinary.com/vntrieu/image/upload/v1602641411/book/9780262535434_ihy8hk.gif"
    },
    // {
    //     "_id": "5f865ed154b82d21803d6639",
    //     "name": "Catstronauts: Slapdash Science",
    //     "author": "Drew Brockington",
    //     "price": 8.27,
    //     "urligm": "https://res.cloudinary.com/vntrieu/image/upload/v1602641661/book/9780316451260_xpday8.jpg"
    // },
    {
        "_id": "5f865f5054b82d21803d663a",
        "name": "Computational Thinking",
        "author": "Peter J. Denning and Matti",
        "price": 14.67,
        "urlimg": "https://res.cloudinary.com/vntrieu/image/upload/v1602641853/book/9780262536561_sodv6r.gif"
    },
    {
        "_id": "5f86600854b82d21803d663b",
        "name": "Computers",
        "author": "John Wood",
        "price": 27.59,
        "urlimg": "https://res.cloudinary.com/vntrieu/image/upload/v1602642010/book/9781791122522_kjqgei.gif"
    }
];
//const [book, setBook] = useState({book: data});

// useEffect(async() => {

// });
  return (
    
      <Router>
        <div className="App">
          <Topmenu />
          <Banner />
          <containerBook data={data} />
        </div>

        <Switch>
          <Route path='/login' exact component={LoginPage} />
        </Switch>
      </Router>
     
    );
}

export default App;
