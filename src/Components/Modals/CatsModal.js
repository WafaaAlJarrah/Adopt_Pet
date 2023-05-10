import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Angora from '../../Images/ModalImages/Angora.png';
import Somali from '../../Images/ModalImages/Somali.png';
import Siberian from '../../Images/ModalImages/Siberian.png';
import Snowshoe from '../../Images/ModalImages/Snowshoe.png';
import Muffin from '../../Images/ModalImages/Muffin.png';
import Norwgian from '../../Images/ModalImages/Norwgian.png';
import Himalayan from '../../Images/ModalImages/Himalayan.png';
import Exotic from '../../Images/ModalImages/Exotic.png';
import Chartreux from '../../Images/ModalImages/Chartreux.png';
import Russian from '../../Images/ModalImages/Russian.png';
import Bengal from '../../Images/ModalImages/Bengal.png';
import Scottish from '../../Images/ModalImages/Scottish.png';
import Terrier from '../../Images/ModalImages/Terrier.png';
import Sphynx from '../../Images/ModalImages/Sphynx.png';
import Persian from '../../Images/ModalImages/Persian.png';
import Ragdoll from '../../Images/ModalImages/Ragdoll.png';


function GridExample() {
    return (
        <div>
            <Row>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={Angora} />
                        <Card.Body>
                            <Card.Title className="TitleCard"><a href='#'> Angora </a></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={Somali} />
                        <Card.Body>
                            <Card.Title className="TitleCard"><a href='#'> Somali </a></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={Siberian} />
                        <Card.Body>
                            <Card.Title className="TitleCard"><a href='#'> Siberian </a></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row><br></br>
            <Row>

                <Col>
                    <Card>
                        <Card.Img variant="top" src={Snowshoe} />
                        <Card.Body>
                            <Card.Title className="TitleCard"><a href='#'> Snowshoe </a></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <Card.Img variant="top" src={Muffin} />
                        <Card.Body>
                            <Card.Title className="TitleCard"><a href='#'> Ragamuffin </a></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={Norwgian} />
                        <Card.Body>
                            <Card.Title className="TitleCard"><a href='#'> Norwgian </a></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row><br></br>
            <Row>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={Himalayan} />
                        <Card.Body>
                            <Card.Title className="TitleCard"><a href='#'> Himalayan </a></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={Exotic} />
                        <Card.Body>
                            <Card.Title className="TitleCard"><a href='#'> Exotic </a></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={Persian} />
                        <Card.Body>
                            <Card.Title className="TitleCard"><a href='#'> Persian </a></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row><br></br>
            <Row>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={Chartreux} />
                        <Card.Body>
                            <Card.Title className="TitleCard"><a href='#'>Chartreux </a></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={Russian} />
                        <Card.Body>
                            <Card.Title className="TitleCard"><a href='#'> Russian Blue </a></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={Bengal} />
                        <Card.Body>
                            <Card.Title className="TitleCard"><a href='#'>Bengal  </a></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row><br></br>
            <Row>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={Scottish} />
                        <Card.Body>
                            <Card.Title className="TitleCard"><a href='#'>Scottish Fold </a></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={Ragdoll} />
                        <Card.Body>
                            <Card.Title className="TitleCard"><a href='#'> Ragdoll</a></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={Sphynx} />
                        <Card.Body>
                            <Card.Title className="TitleCard"><a href='#'>Sphynx </a></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </div>

    );
}

export default GridExample;