import Link from "next/link"

interface DataProps {
    link: string
    cidade: string
    dia: string
    local: string
}

export default function Data(props: DataProps) {
    return (
        <Link href={props.link} target="_blank" className="city-link">
            <div className="city-data">
            <p>Tickets</p>
              <div className="placa-local">
                <span>{props.cidade}</span>
              </div>
              <span className="data">{props.dia}</span>
              <span className="location">{props.local}</span>
            </div>
        </Link>
    )
}