import { FloatingWhatsApp } from 'react-floating-whatsapp'

export default function Whatsapp () {
    return (
        <>
        <FloatingWhatsApp
            phoneNumber={'+1 689 288 5591'}
            accountName={'BIS Entertainment'}
            avatar={'/images/bis_profile.jpg'}
            allowClickAway={true}       
        />
        </>
    )
}