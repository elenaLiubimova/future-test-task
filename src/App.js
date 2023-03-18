import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Home from "./pages/Home";

function App() {
  return (
    <>
    <Header />
    <Main>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Main>
    </>
  );
}

export default App;
