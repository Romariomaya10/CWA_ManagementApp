import { FC, useState } from "react"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Sidebar } from "../../components/sidebar/sidebar";
import { Header } from "../../components/header/header";
import { RightSidebar } from "../../components/sidebar2/secondsidebar";
import './dash.css'
import { Assigments } from "../../components/assigments/assigments";

type assigments = {
    name: string,
    porcent: string
    status: string
    month: string
}


const Dashboard: FC = () => {

    const [assigments, setAssigments] = useState<assigments[]>([
        {
            name: 'Ux experience',
            porcent: '100',
            status: 'complete',
            month: 'April'
        },
        {
            name: 'Contemporary Web Technologies',
            porcent: '64',
            status: 'incomplete',
            month: 'April'
        },
        {
            name: 'Computer Science',
            porcent: '25',
            status: 'in progress',
            month: 'April'
        },
        {
            name: 'Social Network',
            porcent: '100',
            status: 'complete',
            month: 'April'
        },
        {
            name: 'Cyber Security',
            porcent: '100',
            status: 'complete',
            month: 'April'
        }
    ])

    const [status, setStatus] = useState([
        'Total Progress', 'Complete', 'Incomplete', , 'InProgress'])

    const [status2, setStatus2] = useState([
        'Complete', 'Incomplete', 'In Progress'])

    return (
        <>
            <div className="row backgroundDash">
                <div className="col-2">
                    <Sidebar />
                </div>

                <div className="col-8">
                    <div className="">
                        <div className="d-flex">
                            <Header />
                        </div>
                        <div className="d-block">
                            <div className="d-flex m-2 justify-content-evenly">
                                <div className="d-flex m-2 border border-4 border-dark imagesBackground rounded">
                                    <div className="d-flex flex-column align-content-between flex-wrap">
                                        <div className="studyRoom textSpan m-2">
                                            <span className="ms-2">Study Room</span>
                                        </div>
                                        <div className="lib textSpan m-2">
                                            <span className="ms-2" >Southampton University library The Guardian</span>
                                        </div>
                                    </div>
                                    <div className="libUni textSpan mt-2 me-2 ">
                                        <span className="ms-2">Solent Uni Library</span>
                                    </div>
                                </div>
                                <div>
                                    <div >
                                        <img src="weather.png" className="img-fluid" alt="" />
                                    </div>
                                    <div>
                                        <img src="calendar.png" className="img-fluid" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id='bottom' className="d-flex justify-content-evenly">
                            <div className="d-flex assigments me-5 border border-2 border-dark rounded">
                                <div id="assigments" >
                                    <div id="assigmentsHeader" className="assigmentsHeader">
                                        <span>Assigments</span>
                                    </div>
                                    {assigments.map((item: assigments) => {


                                        return (
                                            <div className="mt-2">
                                                <Assigments name={item.name} porcent={item.porcent} status={item.status} month={item.month} />
                                            </div>
                                        )
                                    }
                                    )

                                    }
                                </div>
                                <div id="others">
                                    <div className="other1 mb-1 mt-2 ms-2">
                                        <div className="row align-items-end">
                                            <div className="col align-self-end">
                                                {status2.map((status: any) => {
                                                    return (
                                                        <div>
                                                            <i className={`bi bi-circle-fill SizeDot mx-1  ${status.replace(/\s/g, '').toLowerCase()}`} ></i>
                                                            <span className={`me-1  ${status.replace(/\s/g, '').toLowerCase()}`}>{status}</span>
                                                        </div>
                                                    )
                                                })

                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="other2 mb-1 mt-2 ms-2">
                                        <div className=" mb-1 mt-2 ms-2 d-flex">
                                            <div className="table">
                                                {status.map((status: any) => {
                                                    return (
                                                        <div>
                                                            <i className={`bi bi-circle-fill SizeDot mx-1  ${status.replace(/\s/g, '').toLowerCase()}`} ></i>
                                                            <span className={`me-1  ${status.replace(/\s/g, '').toLowerCase()}`}>{status}</span>
                                                        </div>
                                                    )
                                                })

                                                }
                                            </div>
                                            <div className="percent87">
                                                <span>
                                                    87%
                                                </span>
                                            </div>
                                        </div>
                                        <div className="d-flex imagesBottom justify-content-between">
                                            <img src="25P.png" alt="" />
                                            <img src="25P.png" alt="" />
                                            <img src="25P.png" alt="" />
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div className="border border-4 border-dark rounded p-2 d-flex flex-column align-content-between ads">
                                <div className="nutri mt-3">
                                    <span className="abc ms-1">Nutrition for Life</span>
                                </div>

                                <div className="d-flex justify-content-between mt-3">
                                    <div className="tech">
                                        <span className="abc ms-1">Futures Technologies</span>
                                    </div>
                                    <div className="bitcoin">
                                        <span className="abc ms-1">BitCoin</span>
                                    </div>

                                </div>
                                <div className="courses mt-5">
                                    <span className="abc ms-1">Courses</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-1">
                    <RightSidebar />
                </div>
            </div>


        </>


    )
}


export { Dashboard }