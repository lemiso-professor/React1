import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components";


const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        {/* Header stays constant */}
        <Header />
        
        {/* Main content changes based on the route */}
        <main className="p-4">
          <Routes>
            {/* Add your routes here */}
          </Routes>
        </main>
        
        {/* Footer stays constant */}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
