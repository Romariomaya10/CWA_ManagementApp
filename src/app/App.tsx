import { Outlet } from "react-router-dom"

const App = () => {

    localStorage.setItem('login', JSON.stringify([
        {
            login: 'romario maya',
            password: '12345678'
        }
    ]))

    return (
        <Outlet />
    )
}
export { App }
