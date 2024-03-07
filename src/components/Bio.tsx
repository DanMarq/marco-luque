import { Unbounded } from 'next/font/google'
const font = Unbounded({ subsets: ['latin'], weight: ['200', '300', '400' ],})

import { useSpring, animated } from 'react-spring';

import { Col, Container, Row } from "react-bootstrap";

export default function Bio () {

    const imageAnimation = useSpring({
        from: { transform: 'translateX(0px)' },
        to: async (next) => {
          let count = 0;
          while (count < 4) {
            await next({ transform: 'translateX(20px)' },);
            await next({ transform: 'translateX(-20px)' },);
            count++;
          }
        },
        reset: true,
      });


    return (
        <div className={`bio py-5 ${font.className}`}>
            <Container>
                <Row className='sorria mx-0'>
                    <Col lg={12}>
                        <h3 className='text-center title-videos text-white mb-5 mt-4 text-uppercase'>Conheça mais o Marco Luque</h3>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} className="px-4">
                        <p>
                        Com direção de <b>Marco Luque</b> e <b>Guilherme Rocha</b>, o ator, humorista e empresário sobe aos palcos do país e do mundo com o espetáculo <b>“Dilatados”</b>. 
                        <br />
                        Durante a apresentação, Luque traz <b>Mustafary</b>, um vegetariano irônico e controverso, que prega a sustentabilidade do planeta, ama os animais, a natureza e, principalmente, seu cachorro “Serumaninho”, além de <b>Jackson Faive</b>, o motoboy paulistano mais famoso do Brasil para trocar ideia sobre tudo de mais dilatado que vem ocorrendo nessa biosfera terrestre.
                        </p>

                        <p>
                        O artista multifacetado, com sua versatilidade comprovada desde a bancada do <b>CQC (TV Band)</b>, pela audiência na rádio Mix, no Altas Horas e na Nova Escolinha do Professor Raimundo (TV Globo), extrapola o humor neste show, em que ele também exibe performances musicais e de dança. O espetáculo leva legiões de fãs aos teatros nacionais há anos e, em 2023, a produção chegou também à Europa, onde o artista se apresentou em países como Portugal, Bélgica, Espanha, Irlanda, Suíça e Inglaterra.
                        </p>

                    </Col>
                    <Col lg={6} className="d-flex align-items-center justify-content-center px-4">
                        <animated.img src='/images/marco-luque.png' width={500} style={imageAnimation} alt='Imagem Animada' className={'img-fluid'} />
                    </Col>
                </Row>
            </Container>

        </div>
    )
}