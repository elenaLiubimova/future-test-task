import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import CurrentBook from "./pages/CurrentBook";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
    <Header />
    <Main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/:id" element={<CurrentBook />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Main>
    </>
  );
}

export default App;
