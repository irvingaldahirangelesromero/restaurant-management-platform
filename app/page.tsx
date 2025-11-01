import Button from '../components/Button';
    
export default function HomePage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className="space-x-4">
                <Button
                    label='Iniciar Sesión'
                    url='/login'              
                    className=''
                />       
                <Button
                    label='Registrarse'
                    url='/register'
                    className=''
                />      
            </div>
        </div>
    );
}