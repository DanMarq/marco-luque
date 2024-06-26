import Head from "next/head";

import { Container, Col, Row } from 'react-bootstrap'

import Header from "@/components/Header";
import Logo from "@/components/Logo";
import Footer from "@/components/Footer";
import Data from "@/components/Data";
import Videos from "@/components/Videos";
import Bio from "@/components/Bio";
import Cta from "@/components/Cta";
import Patrocinadores from "@/components/Patrocinadores";
import Popup from "@/components/Popup";
import PopupRepassado from "@/components/PopupRepassado";

export default function Home() {
  const linksIngressos = {
    atlanta: 'https://www.centerstage-atlanta.com',
    boston: 'https://www.tickets4way.com/event/1055/Marco_Luque_em_Dilatados_-_Boston',
    miami: 'https://www.tickets4way.com/event/1054/Marco_Luque_em_Dilatados_-_Fort_Lauderdale',
    orlando: 'https://tickets.drphillipscenter.org/syos/performance/20164',
  };
  return (
    <>
      <Head>
        <title>Marco Luque | Dilatados</title>
        <meta name="description" content="Marco Luque, renomado ator, humorista e empresário, apresenta o espetáculo 'Dilatados' dirigido por Guilherme Rocha. Conheça Mustafary, o vegetariano irônico, e Jackson Faive, o famoso motoboy paulistano, em uma performance que vai além do humor, incluindo música e dança." />
        <meta name='keywords' content='Marco Luque, Dilatados, Mustafary, Jackson Faive, CQC, Espetáculo de humor, Sustentabilidade, Motoboy paulistano, Versatilidade artística' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      </Head>

      <Header />

      <main>
        <Logo />
        <Patrocinadores background={false} />
        <div className="faixa-ingressos py-lg-1 py-3" id="ingresso">
          <h5>Garanta já o seu ingresso!!</h5>
        </div>
        <Container>
          <Row className="my-4">
            <Col className="p-4" xl={3}>
              <Data cidade="Atlanta" dia="Thursday, July 11, 2024" local="CENTER STAGE" link={linksIngressos.atlanta} />
            </Col>

            <Col className="p-4" xl={3}>
              <Data cidade="Boston" dia="July 12, 2024" local="Lynn Memorial Auditorium" link={linksIngressos.boston} />
            </Col>

            <Col className="p-4" xl={3}>
              <Data cidade="Miami" dia="Wednesday, March 13th" local="Lauderhill Performing Arts Center" link={linksIngressos.miami} />
            </Col>

            <Col className="p-4" xl={3}>
              <Data cidade="Orlando" dia="Thursday, March 14th" local="Dr. Phillips Center" link={linksIngressos.orlando} />
            </Col>
          </Row>
        </Container>
        <Videos />
        <Bio />
        <Cta />
        <Patrocinadores background={true} />
      </main>

      <PopupRepassado />

      <Footer/>
    </>
  );
}