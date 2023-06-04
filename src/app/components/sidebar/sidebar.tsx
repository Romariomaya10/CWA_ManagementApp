import { FC, useState } from "react"
import './index.css'
import { Form, InputGroup } from "react-bootstrap"
import { useNavigate } from "react-router-dom"



type rota = {
    nome: string
    icon: string
}


const Sidebar: FC<any> = () => {
    const [rotas, setRotas] = useState<rota[]>([
        {
            nome: 'Home',
            icon: 'house'
        },
        {
            nome: 'Dashboard',
            icon: 'border-all'
        },
        {
            nome: 'Calendar',
            icon: 'calendar'
        },
        {
            nome: 'Post',
            icon: 'send'
        },
        {
            nome: 'Document',
            icon: 'archive'
        },
        {
            nome: 'User',
            icon: 'person'
        },
        {
            nome: 'Messages',
            icon: 'envelope'
        },
        {
            nome: 'Notifications',
            icon: 'bell'
        }
    ])

    const [option, setOption] = useState<rota[]>([
        {
            nome: 'Settings',
            icon: 'gear'
        },
        {
            nome: 'Trash',
            icon: 'trash'
        },
    ])

    const navigate = useNavigate()


    return (
        <div className="backgroundSideBar rounded">
            <div id="logo" className="d-flex justify-content-center  mx-4">
                <div className="elipseLogo my-2">
                    <h3 className="logo my-3 mx-4 ">
                        MTM App
                    </h3>
                </div>
            </div>
            <hr className="hr" />
            <div>
                <div className="d-flex mx-2 ">
                    <Form.Control
                        placeholder="Seach"
                        aria-label="Seach"
                        aria-describedby="basic-addon1"
                        className="input-box"
                    />
                </div>
                <>
                    {
                        rotas.map((rota: rota) => {
                            return (
                                <div className="mx-4 my-2">
                                    <i className={`bi bi-${rota.icon} iconSize mx-2 textSideBar`}></i>
                                    <span className="textSideBar">{rota.nome}</span>
                                </div>
                            )
                        })
                    }
                </>
                <hr className="hr" />
                <>
                    {
                        option.map((rota: rota) => {
                            return (
                                <div className="mx-4 my-3">
                                    <i className={`bi bi-${rota.icon} iconSize mx-2 textSideBar`}></i>
                                    <span className="textSideBar">{rota.nome}</span>
                                </div>
                            )
                        })
                    }
                </>
            </div>

            <div id="bottom" className="d-flex justify-content-evenly align-items-center">
                <i className={`bi bi-caret-left-fill iconSize mx-2 textSideBar`}></i>
                <span className="textSideBar" onClick={() => {
                    navigate('/')
                }}> Back</span>


                <i className={`bi bi-record-circle iconSizePlus mx-2`}></i>


                <span className="textSideBar" onClick={() => {
                    navigate('/calculator')
                }}> Next</span>
                <i className={`bi bi-caret-right-fill iconSize mx-2 textSideBar`}></i>

            </div>
            <div className="my-5 d-flex justify-content-center align-items-center" onClick={() => {
                localStorage.setItem('logado', JSON.stringify(false))
                navigate('/login')
            }}>
                <i className={`bi bi-door-open iconSize mx-2 textSideBar`}></i>
                <span className="textSideBar"> Logout</span>
            </div>

        </div >

    )
}


export { Sidebar }