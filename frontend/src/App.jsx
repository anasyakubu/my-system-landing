import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./Pages/Home/Home";
import { Toaster } from "react-hot-toast";
import Landing from "./Pages/Landing/Landing";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <>
      {/* bg-[#1b1b1b] */}
      <div className="App font-nunito-eb">
        <div className="fixed inset-0 z-[-2] bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
          <div className="">
            <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Landing />} />
                {/* <Route path="/Home" element={<Home />} /> */}
                {/* Catch-all route for undefined paths (404 page) */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
