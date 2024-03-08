import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/navigation';

import Image from "next/image"

import { Navigation, Autoplay } from 'swiper/modules';

export default function Patrocinadores () {
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
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        425: {
                            slidesPerView: 2,
                        },
                        375: {
                            slidesPerView: 2,
                        },
                    }}
                >
                <SwiperSlide>
                    <Image src={'/images/patrocinadores/slider_01.png'} width={299} height={100} className='img-fluid' alt='Slider 01' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={'/images/patrocinadores/slider_02.png'} width={299} height={100} className='img-fluid' alt='Slider 02' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={'/images/patrocinadores/slider_03.png'} width={299} height={100} className='img-fluid' alt='Slider 03' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={'/images/patrocinadores/slider_04.png'} width={299} height={100} className='img-fluid' alt='Slider 04' />
                </SwiperSlide>
            </Swiper>
            </div>
        </div>
    )
}