
import './index.css'
import  { useState, FC } from 'react';
import Calendar from 'react-calendar';



type assigments ={
    name : string
    date : string
}

const RightSidebar: FC<any> = () => {
    const [assigments, setAssigments] = useState<assigments[]>([
        {
            name:"Python Project",
            date:"31/06/2023"
        },
        {
            name:"Assenbly Project",
            date:"25/07/2023"
        },
        {
            name:"Software engineer Exam",
            date:"12/06/2023"
        },
        {
            name:"Software engineer 3 Exam",
            date:"21/06/2023"
        },
    ]);



    return (
        <div className="backgroundSideBar2 border border-black rounded  border-4">
            <div id="logo" className="d-flex flex-column">
                <div className="my-2 text-center headerSideBar2 rounded">
                    <h4 className="my-2">
                        Recent Activities
                    </h4>
                </div>
            </div>
            <hr className="hr" />
            <div>
                <div className="searchLocation my-2">
                    <div className="d-flex d-fill">
                        <i className="bi bi-google iconGoogle"></i>
                        <input
                            placeholder="     |Google"
                            className="input-box2"
                        />
                    </div>
                </div>
            </div>
            <div className='calendar my-3 mx-2'>
                <Calendar />
            </div>

            <div className='calendar my-3 mx-2'>
                <div className="my-2 text-center headerSideBar3">
                    <h4 className="my-2">
                        Your Exams
                    </h4>
                </div>
                <Calendar />
            </div>

            <div>
                <div className="rouded-bottom">
                    <h4 className=" text-center headerSideBar3">
                      Assigments
                    </h4>

                    <div>
                        <div className='d-flex justify-content-between text-center headerSideBar2'>
                            <div className='d-flex'>
                                <span>Description</span>
                                <i className="mx-1 bi bi-caret-down-square"></i>
                            </div>
                            <div className='d-flex'>
                                <span>Duo Date</span>
                                <i className="mx-1 bi bi-caret-down-square"></i>
                            </div>
                        </div>
                        <>
                        {assigments.map((assigment) =>{
                            return(
                                <div className='assigment'>
                                    <span>{assigment.name}</span>
                                    <span>{assigment.date}</span>
                                    <hr className="hr" />
                                </div>
                            )
                        })

                        }
                        </>
                    </div>
                </div>

            </div>
        </div>

    )
}


export { RightSidebar }