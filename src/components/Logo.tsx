import { useSpring, animated } from 'react-spring';

import Image from 'next/image'

export default function Logo() {

    const valoresTamanho = 700;

    const imagem1 = useSpring ({
        from: {x:-500, opacity: 0},
        to: {x:0, opacity: 1},
        config: {duration: 1000}
    })

    const imagem3 = useSpring ({
        from: {x:500, opacity: 0},
        to: {x:0, opacity: 1},
        config: {duration: 1000, delay: 2000}
    })

    return (
        <div className="d-flex flex-column align-items-center pb-lg-5 pb-3">
            <animated.img style={imagem1} src={'/images/marco_luque_em_logo.png'} width={valoresTamanho} className='img-fluid' alt='Marco Luque Logo' />
            <Image src={'/images/personagens_marco_luke.png'} width={valoresTamanho} height={valoresTamanho} className='img-fluid' alt='Personagens de Marco Luque' />
            <animated.img style={imagem3} src={'/images/dilatados_logo.png'} width={valoresTamanho} className='img-fluid dilatados-logo' alt='Dilatados' />
        </div>
    )
}