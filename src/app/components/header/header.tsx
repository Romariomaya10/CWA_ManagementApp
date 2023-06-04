import { FC, useState } from "react"
import './index.css'



type rota = {
    nome: string
    icon: string
}


const Header: FC<any> = () => {
    const [rotas, setRotas] = useState<rota[]>([
        {
            nome: 'Student Profile',
            icon: 'house'
        },
        {
            nome: 'Progress',
            icon: 'border-all'
        },
        {
            nome: 'Your Exams',
            icon: 'calendar'
        },
        {
            nome: 'Tips',
            icon: 'send'
        },
        {
            nome: 'Asssignment',
            icon: 'archive'
        },
        {
            nome: 'Post',
            icon: 'person'
        },
        {
            nome: 'physical and nutritional health',
            icon: 'envelope'
        }
    ])

    const [nome, setNome] = useState<string>('Romario Maya')


    return (
        <div className=" backgroundHeader rounded-bottom justify-content-between">
            <div className="d-flex justify-content-between">
                <div id="" className="d-flex">
                    {<>
                        {
                            rotas.map((rota: rota) => {
                                return (
                                    <div className="mx-4 my-3">
                                        <span className="textSideBar">{rota.nome}</span>
                                    </div>
                                )
                            })
                        }

                    </>

                    }
                </div>
                <div className="d-flex justify-content-center align-items-center perfilBackground rounded">

                    <img src="perfil.png" className="imagePerfil" />
                    <div>
                        <div className="d-flex justify-content-center">
                            <span className="textSideBar">{nome}</span>
                        </div>
                        <div className="d-flex justify-content-center align-items-center mx-1">
                            <div>
                                <i className="bi bi-circle-fill SizeDot mx-1" ></i>
                            </div>
                            <span className="textSideBar">Online</span>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    )
}


export { Header }