import { useState } from 'react';
import {Row, Col, Container} from 'react-bootstrap'

import { useSpring, animated,} from 'react-spring';

import Image from 'next/image'
import Modalvideo from './Modalvideo'

export default function Videos() {

    const thumbnail1 = useSpring ({
        from: {x:-500, opacity: 0},
        to: {x:0, opacity: 1},
        config: {duration: 1000}
    })

    const thumbnail2 = useSpring ({
        from: {x:500, opacity: 0},
        to: {x:0, opacity: 1},
        config: {duration: 1000, delay: 2000}
    })

    const logoHoverSpring = useSpring({
        from: { scale: 1, rotateX: 0 },
        to: { scale: 1.1, rotateX: 10 },
      });

    const [showModal, setShowModal] = useState(false)
    const [selectVideo, setSelectVideo] = useState('')

    const handleCloseModal = () => setShowModal(false)
    const handleShowModal = (video: string) => {
        setSelectVideo(video)
        setShowModal(true)
    }

    return (
        <section className='videos'>
            <Row className='sorria mx-0'>
                <Col lg={12}>
                    <h3 className='text-center title-videos text-white mb-5 mt-4 text-uppercase'>Transformando o trivial em comédia pura</h3>
                </Col>
            </Row>
                
            <Container>
            <Row>
                    <Col lg={6} className='text-center mb-4'>
                       <a className='thumb-player' onClick={() => handleShowModal('/videos/motoboy_so_quer_pacar.mp4')}>
                        <animated.img style={thumbnail1} src={'/images/jackson_faive.png'} width={400}  alt='' className='img-fluid' />
                       </a>
                    </Col>

                    <Col lg={6} className='text-center mb-4'>
                        <a className='thumb-player' onClick={() => handleShowModal('/videos/pincher_do_olho_grande.mp4')}>
                            <animated.img style={thumbnail2} src={'/images/mustafary.png'} width={380}  alt='' className='img-fluid' />
                        </a>
                    </Col>
                </Row>
            </Container>

                <Modalvideo video={selectVideo} show={showModal} handleClose={handleCloseModal} />
        </section>
    )
}