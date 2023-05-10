import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Retriever from '../../Images/ModalImages/GoldenRetriever.jpg';
import Labrador from '../../Images/ModalImages/Labrador.png';
import Husky from '../../Images/ModalImages/Husky.png';
import Chihuahua from '../../Images/ModalImages/Husky.png';
import German from '../../Images/ModalImages/German.png';
import Bulldog from '../../Images/ModalImages/Bulldog.png';
import Pitbull from '../../Images/ModalImages/Pitbull.png';
import Poodle from '../../Images/ModalImages/Poodle.png';
import Beagle from '../../Images/ModalImages/Beagle.png';
import Boxer from '../../Images/ModalImages/Boxer.png';
import Dachshund from '../../Images/ModalImages/Dachshund.png';
import Rottwelier from '../../Images/ModalImages/Rottweiler.png';
import Doberman from '../../Images/ModalImages/Doberman.png';
import Terrier from '../../Images/ModalImages/Terrier.png';
import Affenpinscher from '../../Images/ModalImages/Affenpinscher.png';

function GridExample() {
    return (
        <div>
            <Row>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={Retriever} />
                        <Card.Body>
                            <Card.Title className="TitleCard"><a href='#'> Golden Retriever </a></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={Labrador} />
                        <Card.Body>
                            <Card.Title className="TitleCard"><a href='#'> Labrador </a></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={Husky} />
                        <Card.Body>
                            <Card.Title className="TitleCard"><a href='#'> Husky </a></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row><br></br>
            <Row>

                <Col>
                    <Card>
                        <Card.Img variant="top" src={Chihuahua} />
                        <Card.Body>
                            <Card.Title className="TitleCard"><a href='#'> Chihuahua </a></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <Card.Img variant="top" src={ German } />
                        <Card.Body>
                            <Card.Title className="TitleCard"><a href='#'> German Shepherd </a></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={Bulldog} />
                        <Card.Body>
                            <Card.Title className="TitleCard"><a href='#'> Bulldog </a></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row><br></br>
            <Row>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={Pitbull} />
                        <Card.Body>
                            <Card.Title className="TitleCard"><a href='#'> Pitbull </a></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={Poodle} />
                        <Card.Body>
                            <Card.Title className="TitleCard"><a href='#'> Poodle </a></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={Beagle} />
                        <Card.Body>
                            <Card.Title className="TitleCard"><a href='#'> Beagle </a></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row><br></br>
            <Row>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={Boxer} />
                        <Card.Body>
                            <Card.Title className="TitleCard"><a href='#'>Boxer </a></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={Dachshund} />
                        <Card.Body>
                            <Card.Title className="TitleCard"><a href='#'>Dachshund </a></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={Rottwelier} />
                        <Card.Body>
                            <Card.Title className="TitleCard"><a href='#'>Rottweiler </a></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row><br></br>
            <Row>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={Doberman} />
                        <Card.Body>
                            <Card.Title className="TitleCard"><a href='#'>Doberman </a></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={Terrier} />
                        <Card.Body>
                            <Card.Title className="TitleCard"><a href='#'>Australian Terrier</a></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={Affenpinscher} />
                        <Card.Body>
                            <Card.Title className="TitleCard"><a href='#'>Affenpinscher</a></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </div>

    );
}

export default GridExample;