import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { Router } from "./Routes";
import './styles.css'


function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <div className="app">
          <Router/>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
