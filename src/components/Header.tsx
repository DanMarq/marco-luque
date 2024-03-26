import { Container, Col, Row } from "react-bootstrap"

import { BsEnvelopeCheck } from "react-icons/bs";

import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    return (
        <header>
            <Container fluid>
                <Row className='py-3 px-1'>
                    <Col xs={6} className='header-email gap-2 relative justify-content-center justify-content-lg-start d-flex align-items-center'>
                        <BsEnvelopeCheck /> <a href="mailto:info@bisentertainment.com">info@bisentertainment.com</a>
                    </Col>

                    <Col xs={6} className='d-flex justify-content-lg-end justify-content-center'>
                        <Link href='/'><Image src={'/images/logo.svg'} width={140} height={70} alt='Logo Bis Entertainment' /></Link>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}