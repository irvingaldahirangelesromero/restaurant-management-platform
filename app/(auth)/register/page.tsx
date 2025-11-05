'use client';
import { useState } from 'react';
import Button from '@/components/Button';
import { useHandleSubmit } from '@/hooks/handleSubmit';

export default function RegisterPage() {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [correo, setCorreo] = useState('');
    const [lada, setLada] = useState('+52');
    const [telefono, setTelefono] = useState('');
    const [password, setpassword] = useState('');
    const [agreed, setAgreed] = useState(false);

    const [error, setError] = useState<string | null>(null);
    const { handleSubmit } = useHandleSubmit();



    return (
        <div className="min-h-screen bg-gray-50 lg:grid lg:grid-cols-[1fr_1.3fr] lg:items-center">
            <div className="flex flex-col justify-center h-full px-4 py-8 sm:px-8 lg:px-10 lg:py-8">
                <div className="mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-sm">
                    <div className="flex items-center space-x-2 mb-4 sm:mb-6">
                        <span className="text-xl font-medium text-[#3b4b57]">
                            Restaurante El Quijote
                        </span>
                    </div>

                    <div className="mb-4 sm:mb-6">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Crea tu cuenta</h2>
                    </div>

                    {error && (
                        <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
                            {error}
                        </div>
                    )}

                    <Button
                        type="button"
                        style=''
                        label="Registrarse con Google"
                        url="/google-auth"
                        className="flex w-full justify-center rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200"
                        ico={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 533.5 544.3"
                                width="18"
                                height="18"
                                aria-hidden
                            >
                                <path fill="#4285F4" d="M533.5 278.4c0-17.4-1.5-34.3-4.3-50.6H272.1v95.7h147.5c-.7 4.2-3.8 7.7-8.7 10.3v68h86.1c50.4-46.4 81.1-115 81.1-196.1z" />
                                <path fill="#34A853" d="M272.1 544.3c72.8 0 134-24.1 178.7-65.6l-86.1-68c-24 16.2-54.9 25.8-92.6 25.8-71 0-131.3-47.8-152.9-112.1h-90.6v70.4c44.3 87.9 135.4 150.1 243.5 150.1z" />
                                <path fill="#FBBC05" d="M119.2 321.4c-10.9-32.6-10.9-67.6 0-100.2V150.8H28.6C-2.1 204.5-2.1 339.8 28.6 393.5l90.6-72.1z" />
                                <path fill="#EA4335" d="M272.1 109.1c39.6-.6 75.5 14.1 103.6 40.6l77.8-77.8C413.8 24.9 356.7 1 272.1 1 163.9 1 72.8 63.1 28.6 150.8l90.6 70.4C140.8 156.9 201.1 109.1 272.1 109.1z" />
                            </svg>
                        }
                    />

                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="bg-white px-4 text-gray-400 font-light">o</span>
                        </div>
                    </div>

                    <form
                        className="space-y-4"
                        onSubmit={(e) =>
                            handleSubmit(
                                e,
                                // `${process.env.API_BACKEND_URL}/auth/register`,
                                "/api/auth/register",
                                { nombre, apellido, correo, telefono: `${lada}${telefono}`, password },
                                setError,
                                '/dashboard'
                            )
                        }
                    >
                        <div className="flex space-x-2">
                            <div className='relative w-1/2'>
                                <input
                                    id="nombre"
                                    name="nombre"
                                    type="text"
                                    required
                                    autoComplete="given-name"
                                    placeholder="Nombre"
                                    className="block w-full rounded-lg border border-gray-200 py-2.5 sm:py-2.5 px-3 sm:px-4 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm"
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                />
                                <span className="absolute left-3 sm:left-4 top-0 -translate-y-1/2 bg-white px-1 text-xs text-gray-600">
                                    Nombre*
                                </span>
                            </div>

                            <div className='relative w-1/2'>
                                <input
                                    id="apellido"
                                    name="apellido"
                                    type="text"
                                    required
                                    autoComplete="family-name"
                                    placeholder="Apellido"
                                    className="block w-full rounded-lg border border-gray-200 py-2.5 sm:py-2.5 px-3 sm:px-4 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm"
                                    value={apellido}
                                    onChange={(e) => setApellido(e.target.value)}
                                />
                                <span className="absolute left-3 sm:left-4 top-0 -translate-y-1/2 bg-white px-1 text-xs text-gray-600">
                                    Apellido*
                                </span>
                            </div>
                        </div>

                        <div className="relative">
                            <input
                                id="correo"
                                name="correo"
                                type="email"
                                required
                                placeholder="Correo electrónico"
                                autoComplete="correo"
                                className="block w-full rounded-lg border border-gray-200 py-2.5 sm:py-2.5 px-3 sm:px-4 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
                                value={correo}
                                onChange={(e) => setCorreo(e.target.value)}
                            />
                            <span className="absolute left-4 top-0 -translate-y-1/2 bg-white px-1 text-xs text-gray-600">
                                Correo electrónico*
                            </span>
                        </div>

                        <div>
                            <label htmlFor="telefono" className="sr-only">
                                Teléfono
                            </label>
                            <div className="flex gap-2">
                                <select
                                    id="lada"
                                    name="lada"
                                    value={lada}
                                    onChange={(e) => setLada(e.target.value)}
                                    className="w-20 sm:w-28 rounded-lg border border-gray-200 py-2.5 sm:py-2.5 px-2 text-gray-900 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm"
                                >
                                    <option value="+52">+52 </option>
                                </select>
                                <input
                                    id="telefono"
                                    name="telefono"
                                    type="tel"
                                    required
                                    inputMode="numeric"
                                    pattern="[0-9]{7,15}"
                                    placeholder="Teléfono"
                                    className="flex-1 rounded-lg border border-gray-200 py-2.5 sm:py-2.5 px-3 sm:px-4 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
                                    value={telefono}
                                    onChange={(e) => setTelefono(e.target.value.replace(/\D/g, ''))}
                                />
                            </div>
                        </div>

                        <div className="relative">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                placeholder="password"
                                autoComplete="new-password"
                                className="block w-full rounded-lg border border-gray-200 py-2.5 sm:py-2.5 px-3 sm:px-4 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
                                value={password}
                                onChange={(e) => setpassword(e.target.value)}
                            />
                            <span className="absolute left-4 top-0 -translate-y-1/2 bg-white px-1 text-xs text-gray-600">
                                password*
                            </span>
                        </div>

                        <div className="flex items-start pt-1 pb-3">
                            <input
                                id="terms"
                                name="terms"
                                type="checkbox"
                                checked={agreed}
                                onChange={(e) => setAgreed(e.target.checked)}
                                className="h-4 w-4 text-gray-900 border-gray-300 rounded focus:ring-gray-900"
                            />
                            <label
                                htmlFor="terms"
                                className="ml-3 text-sm font-light text-gray-600"
                            >
                                Acepto los{' '}
                                <span className="font-medium hover:underline text-gray-900 cursor-pointer">
                                    Términos y condiciones
                                </span>
                                ,y {' '}
                                <span className="font-medium hover:underline text-gray-900 cursor-pointer">
                                    Política de Privacidad
                                </span>
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-xl bg-[#232f38] px-3 py-2.5 sm:py-2.5 text-sm font-semibold leading-6 text-white shadow-lg hover:bg-[#3b4b57] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#232f38]"
                            disabled={!agreed}
                        >
                            Crear cuenta
                        </button>

                    </form>

                    <p className="mt-4 text-center text-sm text-gray-500">
                        ¿Ya tienes una cuenta?{' '}
                        <Button
                            type="button"
                            style=''
                            label="Inicia sesión"
                            url="/login"
                            className="font-semibold leading-6 text-[#232f38] hover:text-[#3b4b57]"
                            ico=""
                        />

                    </p>
                </div>
            </div>

            <div className="hidden lg:block h-screen p-10">
                <div
                    className="relative h-full w-full rounded-[3rem] shadow-xl overflow-hidden bg-cover bg-center"
                    style={{
                        backgroundImage: `url('https://cdn.pixabay.com/photo/2020/02/11/19/03/meal-4840665_1280.jpg')`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                    }}
                ></div>
            </div>
        </div>
    );

}