import Button from '../components/Button';
import Nav from '../components/nav';
    
export default function HomePage() {
    return (
        <Nav
            className=''
            classNameList=''
            items={[
                <Button
                    label='Iniciar Sesión'
                    url='/login'
                    className=''
                />,

                <Button
                    label='Registrarse'
                    url='/register'
                    className=''
                />,

            ]}
        >
        </Nav>
    )

}