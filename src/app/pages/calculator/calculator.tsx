import { FC } from "react"
import { Sidebar } from "../../components/sidebar/sidebar"
import './index.css'

import { Calculator as Calc } from '../../components/calculator/Calculator'


const Calculator: FC = () => {



    return (
        <div className="row backgrundCalculator">
            <div className="col-2">
                <Sidebar />
            </div>
            <div className="col-10">
                <div className="calc">
                    <div className="calc2">
                        <Calc />
                    </div>
                </div>

                <div className="calendars border rounded border-dark border-2">
                    <div>
                        <img src="calendar.png" className="img-fluid ms-2" alt="" />
                    </div>
                    <div>
                        <img src="calendar2.png" className="img-fluid  ms-4" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Calculator }