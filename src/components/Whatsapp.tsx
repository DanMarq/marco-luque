import { FloatingWhatsApp } from 'react-floating-whatsapp'

export default function Whatsapp () {
    return (
        <>
        <FloatingWhatsApp
            phoneNumber={'+1 857 346 4520'}
            accountName={'BIS Entertainment'}
            avatar={'/images/bis_profile.jpg'}
            allowClickAway={true}       
        />
        </>
    )
}