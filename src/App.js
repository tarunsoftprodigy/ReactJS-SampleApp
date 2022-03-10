import React, {lazy, Suspense} from 'react'
import { Routes , Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

const Homepage = lazy(() => import('./Pages/Homepage/Homepage'));
const Listing = lazy(() => import('./Pages/Listing/Listing'));

function App() {
  return (
    <>
        <Suspense fallback={<p className="text-center container-fluid vh-100">loading...</p>}>
             <Header />
             <Routes>
                 <Route path="/" element={<Homepage />} />
                 <Route path="/category/:category" element={<Listing />} />
              </Routes>
             <Footer />
        </Suspense>
    </>
  
  );
}

export default App;
