import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

export default function Cta() {
    return (
       <div className="cta">
            <Container className="py-5">
                <Row>
                    <Col lg={6} className="mx-auto">
                        <Link href={'#ingresso'} className="city-link">
                            <div className="city-data">
                            <div className="placa-local">
                                <span>Comprar ingressos</span>
                            </div>
                            </div>
                        </Link>
                    </Col>
                </Row>
            </Container>
       </div>
    )
}