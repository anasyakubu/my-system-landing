import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Connection from "./Pages/Connection/Connection";
import { Toaster } from "react-hot-toast";
import Landing from "./Pages/Landing/Landing";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <>
      <div className="App font-nunito-eb bg-[#1b1b1b] text-[#aeaeae]">
        <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/connection" element={<Connection />} />
            {/* Catch-all route for undefined paths (404 page) */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
