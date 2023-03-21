import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from "react-router-dom";
import React, { useRef, useContext } from "react";
import { UserContent } from "../App";

function NavScrollExample() {
  const navigate = useNavigate();
  const searchRef = useRef();
  const handleSearch = () => {
    if (!searchRef.current.value) {
      navigate("/");
    } else {
      navigate(`/?title=${searchRef.current.value}`);
    }
  };
  const { user } = useContext(UserContent);

  return (
    <Navbar bg="light" expand="lg">
      <Container container>
        <Navbar.Brand className="h1 ">PHIM HAY</Navbar.Brand>
        <Navbar.Brand className="h1 "><Link to={"/"}>Trang chủ</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ height: '50px' }}
          >

          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              ref={searchRef}
              placeholder="Nhập tên phim cần tìm"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" onClick={handleSearch}>Search</Button>

          </Form>
          {user?.email
            ? <Navbar.Brand className="h1 ">hello {user.name}</Navbar.Brand>
            : <h1></h1>
          }
          {!user?.email
            ? <Nav.Link className="h1 ml-2"><Link to={"/login"}>Đăng nhập/Đăng kí</Link></Nav.Link>
            : <Link to={"/login/out"}>Đăng xuất</Link>
          }

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;