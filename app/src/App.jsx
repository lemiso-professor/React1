import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Footer, Hero } from "./components";


const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        {/* Header stays constant */}
        <Header />
        
        {/* Main content changes based on the route */}
        <main className="p-4">
          
          <Hero/>
        </main>
        
        {/* Footer stays constant */}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
