import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/navigation';

import Image from "next/image"

import { Autoplay } from 'swiper/modules';

export default function Patrocinadores () {

    const Slides = [
        'slider_01.png',
        'slider_02.png',
        'slider_03.png',
        'slider_04.png',
        'slider_05.png',
    ]

    return (
            
        <div className='container-patrocinadores pb-5'>
            <hr className='mt-0 w-50 mx-auto mb-4 separator' />
                <h3 className='text-center title-videos text-white mb-5 text-uppercase'>Nossos patrocinadores</h3>
            <div className='slider-patrocinadores'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={50}
                    autoplay={{
                        delay: 5500,
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
                        <Image src={`/images/patrocinadores/${item}`} width={299} height={100} className='img-fluid' alt={`slider ${index}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>
        </div>
    )
}