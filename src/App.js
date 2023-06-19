// useLocation
// ----------------
// is hook use to transfer and access data object that pass from parent object to child object.
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import AboutUs from './AboutUs'
import Home from './HomePage'
import ParentComponent from './ParentComponent'
import ChildComponent from './ChildComponent'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/aboutus">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/parent">Parent Component</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/parent" element={<ParentComponent />} />
            <Route path="/parent/child" element={<ChildComponent />} />
          </Routes>
        </div>
      </Router>
    )
  }
}

export default App

// useLocation
// ----------------
// is hook use to transfer and access data object that pass from parent object to child object.
// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import AboutUs from "./AboutUs";
// import Home from "./HomePage";
// import ParentComponent from "./ParentComponent";
// import ChildComponent from "./ChildComponent";

// class App extends React.Component {
//   render() {
//     return (
//       <Router>
//         <div>
//           <nav>
//             <ul>
//               <li>
//                 <Link to="/">Home</Link>
//               </li>
//               <li>
//                 <Link to="/aboutus">About Us</Link>
//               </li>
//               <li>
//                 <Link to="/contact">Contact</Link>
//               </li>
//               <li>
//                 <Link to="/parent">Parent Component</Link>
//               </li>
//             </ul>
//           </nav>

//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/aboutus" element={<AboutUs />} />
//             <Route path="/parent" element={<ParentComponent />} />
//             <Route path="/parent/child" element={<ChildComponent />} />
//           </Routes>
//         </div>
//       </Router>
//     );
//   }
// }

// export default App;

// ------------------
// Link tag
// ---------------------
// import React from 'react'
// import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
// import AboutUs from './AboutUs'
// import Home from './HomePage'

// class App extends React.Component {
//   constructor() {
//     super()
//   }

//   render() {
//     return (
//       <Router>
//         <div>
//           <nav>
//             <ul>
//               <li>
//                 <Link to="/">Home</Link>
//               </li>
//               <li>
//                 <Link to="/aboutus">About Us</Link>
//               </li>
//               <li>
//                 <Link to="/contact">Contact</Link>
//               </li>
//             </ul>
//           </nav>

//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/aboutus" element={<AboutUs />} />
//             {/* Add more routes for other pages */}
//             {/* <Route path="/contact" element={<Contact />} /> */}
//             {/* <Route path="*" element={<NotFound />} /> */}
//           </Routes>
//         </div>
//       </Router>
//     )
//   }
// }

// export default App
