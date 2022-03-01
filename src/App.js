import './App.css';
import { Row, Col, Dropdown, Figure, Breadcrumb, BreadcrumbItem, Carousel, CarouselItem, ListGroup, ListGroupItem, Button, Form } from "react-bootstrap";
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';

function App() {
  return (
    <div style={{ overflow: "hidden" }}>
      <Row style={{ backgroundColor: "#000", marginTop: "0.5rem", paddingTop: "0.5rem" }}>
        <Col lg={10}>
          <Dropdown>
            <DropdownToggle>
              Pilih Bahasa
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Indonesia</DropdownItem>
              <DropdownItem>Inggris</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Col>
        <Col>
          <Figure>
            <Figure.Image
              style={{ width: "30px", height: "30", borderRadius: "50%" }}
              alt="171x180"
              src="https://www.pngitem.com/pimgs/m/41-415019_profile-man-male-free-picture-male-avatar-clipart.png"
            />
            <Figure.Caption>
              Alex
            </Figure.Caption>
          </Figure>
        </Col>
      </Row>
      <Row>
        <Col lg={8}></Col>
        <Col>
          <Breadcrumb className="pt-3 pb-1 px-3" style={{ backgroundColor: "rgb(240, 240, 240)", borderRadius: "8px" }}>
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Berita</BreadcrumbItem>
            <BreadcrumbItem active>Bola</BreadcrumbItem>
          </Breadcrumb>
        </Col>
      </Row>
      <center>
        <Carousel className="w-50 mt-3">
          <CarouselItem>
            <img className='w-100' src='https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600' alt='' />
            <Carousel.Caption>
              Rizki Fauzi
            </Carousel.Caption>
          </CarouselItem>
          <CarouselItem>
            <img className='w-100' src='https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600' alt='' />
            <Carousel.Caption>
              Timnas Inggris
            </Carousel.Caption>
          </CarouselItem>
          <CarouselItem>
            <img className='w-100' src='https://cdn.medcom.id/dynamic/content/2019/06/25/1035308/OvBzF9kVxh.jpg?w=1024' alt='' />
            <Carousel.Caption>
              Neymar JR
            </Carousel.Caption>
          </CarouselItem>
        </Carousel>
      </center>
      <Row className='m-3'>
        <Col>
          <ListGroup>
            <ListGroupItem active>Liga 1 Indonesia</ListGroupItem>
            <ListGroupItem>Liga Primer Inggris</ListGroupItem>
            <ListGroupItem>Divisi Primera</ListGroupItem>
            <ListGroupItem>Serie A</ListGroupItem>
            <ListGroupItem>Ligue 1</ListGroupItem>
            <ListGroupItem>Bunde Liga</ListGroupItem>
          </ListGroup>
        </Col>
        <Col>
          {/* Jumbotron Tidak Tersedia di React-Bootstrap Versi 6 */}
          {/* <Jumbotron></Jumbotron> */}
          <div className="bg-light px-3 py-5">
            <h3>DIVISI PRIMERA</h3>
            <p>Main Untuk Catalunya, Gerard Pique Minta Dihormati</p>
            <Button className="btn btn-primary">Read More</Button>
          </div>
        </Col>
        <Col>
          <Form>
            <center>
            <img style={{ width: "50px", height: "50", borderRadius: "50%" }}
              alt="171x180"
              src="https://www.pngitem.com/pimgs/m/41-415019_profile-man-male-free-picture-male-avatar-clipart.png"
            />
            <h4>Silahkan Login</h4>
            </center>
            <Form.Group className='my-3'>
              <Form.Control placeholder='Masukkan Email' type='Text' />
            </Form.Group>
            <Form.Group>
              <Form.Control placeholder='Password' type='password' />
            </Form.Group>
            <Form.Group>
              <Form.Check className='my-3' type="checkbox" label="Terms & Conditions" />
            </Form.Group>
            <Button>Login</Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default App;
