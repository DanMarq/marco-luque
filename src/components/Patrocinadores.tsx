import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/navigation';

import Image from "next/image"

import { Autoplay } from 'swiper/modules';

interface PatrocinadoresProps {
    background: boolean
}

export default function Patrocinadores (props: PatrocinadoresProps) {

    const Slides = [
        {
            imagem: 'slider_01.png',
            link: 'https://www.sendwave.com/en-us',
            alt: 'Sendwave'
        },
        {
            imagem: 'slider_02.png',
            link: 'https://www.inttelivacationhomes.com/',
            alt: 'Intteli Vacation Homes'
        },
        {
            imagem: 'slider_03.png',
            link: 'https://phoenixbusorlando.com/',
            alt: 'Phoenix Bus'
        },
        {
            imagem: 'slider_04.png',
            link: 'https://www.santoslloydlaw.com/',
            alt: 'Santos Lloyd Law Firm, P.C.'
        },
        {
            imagem: 'slider_05.png',
            link: 'https://www.instagram.com/levittaconcepts/',
            alt: 'Levitta Concepts'
        },
        {
            imagem: 'slider_06.png',
            link: 'https://www.instagram.com/bellastartravel',
            alt: 'Bella Star Travel'
        },
        {
            imagem: 'slider_07.png',
            link: 'https://www.roteirovip.com/home/',
            alt: 'Roteiro Vip'
        },
        {
            imagem: 'slider_08.png',
            link: '#',
            alt: 'C4 Comunicação'
        }
    ];

    return (
            
        <div className={`${props.background ? 'container-patrocinadores' : ''} pb-5`}>
            <hr className='mt-0 w-50 mx-auto mb-4 separator' />
                <h3 className='text-center title-videos text-white mb-5 text-uppercase'>Nossos patrocinadores</h3>
            <div className='slider-patrocinadores'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                      }}
                    modules={[Autoplay]}
                    className="mySwiper"
                    breakpoints={{
                        1024: {
                            slidesPerView: 4,
                            slidesPerGroup: 4,
                        },
                        768: {
                            slidesPerView: 3,
                            slidesPerGroup: 3,
                        },
                        425: {
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                        },
                        375: {
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                        },
                        300: {
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                        },
                    }}
                >
                {Slides.map((item, index) => (
                    <SwiperSlide key={index}>
                        <a href={item.link} className='patrocinadores-link' target='_blank' title={'Clique para abrir'}>
                            <Image src={`/images/patrocinadores/${item.imagem}`} width={299} height={100} className='img-fluid' alt={item.alt} />
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>
        </div>
    )
}