import { FC } from "react"

import './index.css'

type assigments = {
    name: string,
    porcent: string
    status: string
    month: string
}


const Assigments: FC<assigments> = ({
    name,
    porcent,
    status,
    month
}) => {

    return (
        <div className="assignment">
            <div>
                <span className="title">{name}</span>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                 <i className={`bi bi-circle-fill SizeDot mx-1  ${status.replace(/\s/g, '')}`} ></i>
                <span className={`abc me-1`}>{status}</span>
                <span className={`${status.replace(/\s/g, '')} me-1`}>{porcent}%</span>
            </div>
            <div >
                <span className="month">{month}</span>
            </div>
        </div>
    )
}


export { Assigments }