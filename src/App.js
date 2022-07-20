import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import data from "./data.js";
import { useState } from "react";
import About from './pages/About.js'
import Detail from './pages/Detail.js'

function App() {
  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">로고</Navbar.Brand>
          <Nav className="me-auto ">
            <Nav.Link href="/detail">상세페이지</Nav.Link>
            <Nav.Link href="/about">회사소개</Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/about/ceo");
              }}
            >
              인사말
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="headImg">
        <img alt='' src={'/rootgood93_shopTest2/src/img/test1.jpg'} />
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <div className="productList">
              {shoes.map((a, i) => {
                return (
                  <div
                    key={i}
                    onClick={() => {
                      navigate("./Detail/+i");
                    }}
                  >
                    <Card shoes={shoes[i]} i={i}></Card>
                  </div>
                );
              })}
            </div>
          }
        ></Route>
        <Route path="/Detail/:id" element={<Detail shoes={shoes} />}></Route>
        <Route path="/about" element={<About />}>
          <Route path="/ceo" element={<>인사말입니다.</>}></Route>
        </Route>
        <Route path="*" element={<>404페이지</>}></Route>
      </Routes>
    </>
  );
}

function Card(props) {
  return (
    <div className="list">
      <img alt="" src="'/rootgood93_shopTest2/src/img/test1.jpg'" />
      <p>{props.shoes.title}</p>
      <p>{props.shoes.title}</p>
      <p>{props.shoes.title}</p>
    </div>
  );
}

export default App;
