import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import { MdClose } from "react-icons/md";

import { useState, useEffect } from "react";

export default function Popup () {

    const [ aberto, setAberto] = useState(true)

    const fecharModal = () => {
        setAberto(false)
    }

    useEffect(()=> {
        document.body.classList.toggle('no-scroll', aberto)

        return () => {
            document.body.classList.toggle('no-scroll')
        }
    }, [aberto])

    return (
        <div className={`popup ${aberto ? 'visible' : ''}`}>
            <div className="popup-header">
            <button onClick={fecharModal}><MdClose /></button>
            </div>
            <Container>
                <Row className="popup-content">
                    <Col lg={4} className="popup-content-one">
                        <Image className="img-fluid" src={'/images/phone_app_screen.jpg'} width={500} height={500} alt=""></Image>
                    </Col>
                    <Col lg={8} className="popup-content-two">
                        <h3>Download the App</h3>
                        <p>Get EXCLUSIVE content!</p>
                        <p>Discounts, promotions, and more!</p>
                        <div className="store-buttons">
                            <a href="#" className="">
                                <Image className="img-fluid" src={'/images/appStoreButton.png'} width={200} height={49} alt=""></Image>
                            </a>

                            <a href="#" className="">
                                <Image className="img-fluid" src={'/images/playStoreButton.png'} width={200} height={49} alt=""></Image>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}