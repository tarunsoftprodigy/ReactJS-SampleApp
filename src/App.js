import React, {lazy, Suspense} from 'react'
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

const Homepage = lazy(() => import('./Pages/Homepage/Homepage'));

function App() {
  return (
    <>
        <Suspense fallback={<p className="text-center container-fluid vh-100">loading...</p>}>
           <Header />
           <Homepage />
           <Footer />
        </Suspense>
    </>
  
  );
}

export default App;
