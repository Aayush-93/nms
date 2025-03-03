import React from "react";
import { BrowserRouter, Routes, Route, Form } from "react-router"; // FIXED
import Todo from "./Components/Todo/Todo";
import Navbar from "./Components/Navbar";
import FilterableProductTable from "./Components/search/FilterableProductTable";
import Currency from "./Components/ProjectsNew/Currency";
import ProductDetail from "./Components/product/ProductDetail";
import Home from "./Components/Navbar/Home";

import Notfound from "./Components/Navbar/Notfound";
import Platzi from "./Components/Platzi";
import Formpost from "./Components/Platzi/Formpost";
import FormSubmit from "./Components/Platzi/Form";
import Axios from "./Components/Platzi/Axios";
import Movie from "./Components/Platzi/Axios";
// import UserForm from "./Components/Platzi/Axioscrud";
// import Axioscrud from "./Components/Platzi/Axioscrud";
import Hero from "./Components/Platzi/Hero";
import Store from "./Redux/store";
import Counter from "./Components/feature/counter";

import MyComponent from "./Components/myComponent";

function App() {
  return (
    // <Herocomp />

    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Platzi />} />

        <Route path="/mycomponent" element={<MyComponent />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/counter" element={<Counter />} />

        <Route path="/todo" element={<Todo />} />
        <Route path="/filterableproduct" element={<FilterableProductTable />} />
        <Route path="/bike/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
