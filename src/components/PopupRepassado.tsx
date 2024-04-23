import Image from "next/image";
import { MdClose } from "react-icons/md";

import { useState, useEffect } from "react";

export default function PopupRepassado () {

    const [ aberto, setAberto] = useState(false)

    const fecharModal = () => {
        setAberto(false)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setAberto(true);
        }, 1100);

        return () => clearTimeout(timer);
    }, []);

    useEffect(()=> {
        document.body.classList.toggle('no-scroll', aberto)

        return () => {
            document.body.classList.toggle('no-scroll')
        }
    }, [aberto])

    return (
        <div className={`popup2 ${aberto ? 'visible' : ''}`}>
            <div className="popup-header">
            <button onClick={fecharModal}><MdClose /></button>
            </div>
            <div>
                <div className="popup-content">
                    <Image className="img-fluid" src={'/images/sw_banner.jpg'} width={560} height={840} alt=""></Image>  
                </div>
            </div>
        </div>
    )
}