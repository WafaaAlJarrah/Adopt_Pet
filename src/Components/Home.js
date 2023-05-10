import Carousel from 'react-bootstrap/Carousel';
import Footer from './Footer';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Image2 from '../Images/Main Home/image2.jpg';
import Image3 from '../Images/Main Home/image3.jpg';
import AboutImage from '../Images/Main Home/AboutCover.jpg';
import Beta from '../Images/Main Home/BETA.png';
import Karma from '../Images/Main Home/Karma.jpg';
import Animal from '../Images/Main Home/AnimalLeb.png';
import Laser from '../Images/Main Home/laser.png';
import Dogs from '../Images/Main Home/Dog2.png';
import Cats from '../Images/Main Home/Cats1.png';
import { React, useState } from 'react';
import ModalCat from './Modals/ModalC';
import ModalDog from './Modals/ModalD';
import AdoptBg from '../Images/Main Home/Untitled-1.png';
import '../App.css';

function Home() {

  return (
    <div>
      <section id='Home Carousel'>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Image2}
              alt="First slide" /><br></br>
            <Carousel.Caption>
              <h1 style={{ color: "#000" }}></h1>
              <h3 style={{ color: "#333" }}>FIND YOUR NEW BEST FRIEND, ADOPT AN ANIMAL TODAY</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Image3}
              alt="Second slide" /><br></br>

            <Carousel.Caption>
              <h3></h3>
              <h2>ADOPT A FURRY FRIEND, CHANGE A LIFE FOREVER</h2>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel><br></br>
      </section>

      <section id="about">
        <div className="AboutUsContainer ">
          <div className="AboutUsText ">
            <h1><b>Who We Are</b></h1><br></br>
            <p style={{ fontSize: "18px" }}>Welcome to our animal adoption website! Our mission is to provide a loving home to every dog and cat in need. We are dedicated to saving the lives of these furry friends and finding them a forever home where they can be happy and loved.<br></br>

              At our adoption center, you can browse through a variety of dogs and cats who are looking for a loving family to call their own. We have everything from playful puppies and kittens to mature dogs and cats who are already trained and well-behaved.<br></br></p>
          </div>
          <img className="AboutUsImage" src={AboutImage} alt="About Us" />
        </div>
      </section><br></br>

      <section id='Partners'>
        <h1 style={{ textAlign: "left", padding: "0px 40px" }}><b> In Collaboration With </b></h1>
        <CardGroup className="Partner">
          <Card className="Partners">
            <Card.Img variant="top" src={Beta} />
          </Card>
          <Card className="Partners">
            <Card.Img variant="top" src={Karma} />
          </Card>
          <Card className="Partners">
            <Card.Img variant="top" src={Laser} />
          </Card>
          <Card className="Partners">
            <Card.Img variant="top" src={Animal} />
          </Card>
        </CardGroup>
      </section>

      <img src= {AdoptBg} width="100%"/>
      <section id='ChooseAnimal'><br></br>
        <h1 style={{ padding: "0px 40px" }}><b> Find Your New Friend </b></h1>
        <div className="ModalContainer ">
          <div><img className="AnimalModal" src={Dogs} alt="About Us" />< ModalDog /></div>
          <div><img className="AnimalModal" src={Cats} alt="About Us" />< ModalCat /></div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;