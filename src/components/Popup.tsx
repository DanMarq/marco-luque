import Image from "next/image";
import { MdClose } from "react-icons/md";

import { useState, useEffect } from "react";

export default function Popup () {

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
        <div className={`popup ${aberto ? 'visible' : ''}`}>
            <div className="popup-header">
            <button onClick={fecharModal}><MdClose /></button>
            </div>
            <div>
                <div className="popup-content">
                    <div className="popup-content-one">
                        <Image className="img-fluid" src={'/images/phone_app_screen.png'} width={500} height={457} alt=""></Image>
                    </div>
                    <div className="popup-content-two">
                        <Image className="img-fluid letters" src={'/images/letteres.png'} width={300} height={249} alt=""></Image>
                        <div className="store-buttons">
                            <a href="https://apps.apple.com/us/app/sendwave-send-money/id846717081" onClick={fecharModal} className="" target="_blank">
                                <Image className="img-fluid" src={'/images/appStoreButton.png'} width={200} height={49} alt=""></Image>
                            </a>

                            <a href="https://play.google.com/store/apps/details?id=com.mychime.waveremit.app" onClick={fecharModal} className="" target="_blank">
                                <Image className="img-fluid" src={'/images/playStoreButton.png'} width={200} height={49} alt=""></Image>
                            </a>
                        </div>
                        <div className="popup-logo">
                            <Image className="img-fluid" src={'/images/sendwave_logo.png'} width={100} height={13} alt=""></Image>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}