import { Col, Container, Row } from "react-bootstrap";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import Whatsapp from "./Whatsapp";

export default function Footer() {

    const ano = new Date().getFullYear()

    return (
        <footer className="footer d-flex flex-wrap justify-content-between align-items-center py-4">
            <Container>
                <Row>
                    <Col md={6} className="d-flex align-items-center">
                        <span className="mb-3 mb-md-0 text-muted">© {ano} Bis Entertainment, all rights reserved</span>
                    </Col>
                    <Col md={6} className="justify-content-lg-end justify-content-center d-flex">
                        <ul className="nav list-unstyled social">
                            <li className="ms-3"><a className="text-muted" href="https://www.facebook.com/BISentertainment/" target='_blank'><BsFacebook size={30} /></a></li>
                            <li className="ms-3"><a className="text-muted" href="https://www.instagram.com/bis_entertainment/" target='_blank'><BsInstagram size={30} /></a></li>
                        </ul>
                    </Col>
                </Row>
                <Whatsapp />
            </Container>
        </footer>
    )
}