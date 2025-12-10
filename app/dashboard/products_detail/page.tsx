"use client";

import React, { useState } from 'react';
import Head from 'next/head';
// No necesitas importar Image de 'next/image' si usas <img> directamente
// import Image from 'next/image'; 

// 1. Importamos tus componentes del Dashboard
import Nav from '@/components/nav';
import Dropdown from '@/components/dropdown';
import { useRedirect } from '@/hooks/useRedirect';

export default function FoodProductDetail() {
    const { redirectTo } = useRedirect();
    const [showAR, setShowAR] = useState(false); // Estado para el modal de AR
    // 👇 Estado para manejar el error del QR (Opción 1 recomendada)
    const [qrError, setQrError] = useState(false);

    // URL de la imagen del platillo
    const mainFoodImage = "https://districtmagazine.ie/wp-content/uploads/2021/10/lockswindsorterrace_30943631_291108924762165_3712936881646731264_n.jpg";

    // URL de tu imagen QR local (Asegúrate de poner esta imagen en tu carpeta public)
    const qrImage = "/assets/qr_prueba.jpg";

    // --- Lógica del Nav (Replicada de HomePage) ---
    const handleLogout = async () => {
        await fetch('/api/auth/logout', { method: 'POST' });
        localStorage.removeItem('user');
        redirectTo('/login');
    };

    const profileMenuItems = [
        {
            label: 'Cerrar Sesión',
            action: handleLogout,
            isDestructive: true
        },
    ];

    const ProfileButton = (
        <button
            type="button"
            className="p-2 rounded-full text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-150 ease-in-out"
            aria-label="Menú de perfil"
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
            </svg>
        </button>
    );

    const centerLinks = (
        <>
            <a href="/dashboard/products_detail" className="hover:text-gray-900 font-medium text-green-800 border-b-2 border-green-800">Home</a>
            <a href="/dashboard/products_detail" className="hover:text-gray-900 font-medium text-green-800 border-b-2 border-green-800">Productoa</a>
            <a href="/dashboard/products_detail" className="hover:text-gray-900 font-medium text-green-800 border-b-2 border-green-800">Menu</a>
            <a href="/dashboard/products_detail" className="hover:text-gray-900 font-medium text-green-800 border-b-2 border-green-800">Reservar</a>
        </>
    );
    // ---------------------------------------------

    return (
        <div className="min-h-screen bg-white font-sans text-gray-800 relative">
            <Head>
                <title>Detalle del Platillo - Gourmet Bites</title>
                <meta name="description" content="Detalle de platillo gourmet" />
            </Head>

            {/* 2. Reemplazamos el <header> manual por tu componente <Nav> */}
            <Nav centerItems={centerLinks}>
                <Dropdown
                    toggleContent={ProfileButton}
                    menuItems={profileMenuItems}
                />
            </Nav>

            <main className="container mx-auto px-6 md:px-12 py-8">
                {/* --- Breadcrumbs --- */}
                <div className="text-sm text-gray-500 mb-8 flex items-center space-x-2">
                    <a href="#" className="hover:underline">Menú</a>
                    <span>/</span>
                    <a href="#" className="hover:underline">Platos Fuertes</a>
                    <span>/</span>
                    <span className="text-gray-800 font-medium truncate">Estofado Windsor Terrace</span>
                </div>

                {/* --- Grid Principal --- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20">

                    {/* Columna Izquierda: Imagen y Botón AR */}
                    <div>
                        {/* 🌟 AJUSTE 1: Eliminamos el 'padding' (p-4 md:p-8) para que la imagen ocupe todo el espacio. */}
                        <div className="bg-gray-50 rounded-2xl mb-6 flex items-center justify-center h-[500px] relative overflow-hidden shadow-sm">

                            {/* Imagen Principal: Ocupa el 100% del contenedor sin padding */}
                            <img
                                src={mainFoodImage}
                                alt="Estofado Windsor Terrace"
                                className="object-cover w-full h-full rounded-2xl hover:scale-105 transition-transform duration-500"
                            // Usamos rounded-2xl aquí también para que coincida con el borde del div padre
                            />

                            {/* 👇 BOTÓN DE REALIDAD AUMENTADA ESTILO IA (Flotando dentro) */}
                            <div className="absolute bottom-6 right-6 z-20">
                                <div className="relative inline-flex items-center justify-center gap-4 group">
                                    {/* Capa de Gradiente (Efecto IA) */}
                                    <div
                                        className="absolute inset-0 duration-1000 opacity-60 transition-all bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 rounded-lg blur-lg filter group-hover:opacity-100 group-hover:duration-200"
                                    ></div>

                                    {/* AJUSTE 2: Botón Principal: Cambiamos bg-gray-900 a bg-white y ajustamos los colores de texto y stroke */}
                                    <button
                                        onClick={() => setShowAR(true)}
                                        role="button"
                                        className="group relative inline-flex items-center justify-center text-sm rounded-lg bg-white px-6 py-2.5 font-semibold text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-400/30"
                                        title="Ver en Realidad Aumentada"
                                    >
                                        {/* El ícono AR ahora es verde oscuro (text-green-800) */}
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                                        </svg>
                                        Ver en AR
                                        {/* El ícono de flecha ahora es negro (stroke-gray-900) */}
                                        <svg
                                            aria-hidden="true"
                                            viewBox="0 0 10 10"
                                            height="10"
                                            width="10"
                                            fill="none"
                                            className="mt-0.5 ml-2 -mr-1 stroke-gray-900 stroke-2"
                                        >
                                            <path d="M0 5h7" className="transition opacity-0 group-hover:opacity-100"></path>
                                            <path d="M1 1l4 4-4 4" className="transition group-hover:translate-x-[3px]"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            {/* 👆 Fin del Botón AR */}

                        </div>
                        {/* Miniaturas */}
                        <div className="flex space-x-4 justify-center lg:justify-start">
                            {/* ... (Tu código de miniaturas) ... */}
                            {[1, 2, 3, 4].map((item, index) => (
                                <button key={index} className={`w-20 h-20 rounded-xl p-1 ${index === 0 ? 'border-2 border-green-800 bg-gray-100' : 'bg-gray-50 border border-transparent hover:border-gray-300'} transition overflow-hidden relative`}>
                                    <img src={mainFoodImage} alt={`Vista ${index + 1}`} className="object-cover w-full h-full rounded-lg opacity-90 hover:opacity-100" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Columna Derecha: Detalles */}
                    <div className="flex flex-col justify-center">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">Estofado Windsor Terrace</h1>
                        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                            Un equilibrio perfecto de sabores rústicos. Cordero braseado lentamente hasta que se deshace, servido sobre una cama de puré de tubérculos y vegetales de temporada glaseados.
                        </p>

                        {/* Rating */}
                        <div className="flex items-center space-x-2 mb-6">
                            <div className="flex text-green-500">
                                {'★★★★★'.split('').map((star, i) => <span key={i} className="text-xl">{star}</span>)}
                            </div>
                            <span className="text-gray-500 font-medium">(121 reseñas)</span>
                        </div>
                        <div className="border-b border-gray-200 mb-6"></div>

                        {/* Precio */}
                        <div className="mb-8">
                            <div className="flex items-baseline space-x-3">
                                <span className="text-4xl font-bold text-gray-900">$32.00</span>
                            </div>
                            <p className="text-gray-500 mt-1">Precio por porción individual.</p>
                        </div>

                        {/* Guarniciones */}
                        <div className="mb-8">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Elige tu Guarnición</h3>
                            <div className="flex flex-wrap gap-3">
                                {['Puré Rústico', 'Vegetales Asados', 'Papas Fritas', 'Ensalada Fresca'].map((side, index) => (
                                    <button key={side} className={`px-6 py-3 rounded-full text-sm font-bold border-2 transition-all ${index === 0 ? 'border-green-800 bg-green-50 text-green-900' : 'border-gray-200 text-gray-700 hover:border-gray-400 hover:bg-gray-50'}`}>
                                        {side}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Botones de compra */}
                        <div className="flex space-x-4 mb-10">
                            <button className="flex-1 bg-green-900 hover:bg-green-800 text-white text-lg font-bold py-4 px-8 rounded-full transition-colors shadow-lg shadow-green-900/20">
                                Ordenar Ahora
                            </button>
                            <button className="flex-1 bg-white border-2 border-green-900 text-green-900 hover:bg-green-50 text-lg font-bold py-4 px-8 rounded-full transition-colors">
                                Añadir al Carrito
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            {/* --- 4. Modal de QR (Overlay) --- */}
            {showAR && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 transition-opacity">
                    <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full relative animate-fadeIn">
                        {/* Botón Cerrar */}
                        <button
                            onClick={() => { setShowAR(false); setQrError(false); }}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Experiencia AR</h3>
                            <p className="text-gray-500 mb-6 text-sm">Escanea este código con tu celular para ver el platillo en tu mesa.</p>

                            <div className="bg-gray-100 p-4 rounded-xl inline-block mb-4 border border-gray-200 min-w-[200px] min-h-[200px] flex items-center justify-center">
                                {/* 👇 Lógica de renderizado condicional con el estado 'qrError' */}
                                {!qrError ? (
                                    <img
                                        src={qrImage}
                                        alt="Código QR AR"
                                        className="w-48 h-48 object-contain"
                                        onError={() => setQrError(true)} // Si la carga falla, activa el estado de error
                                    />
                                ) : (
                                    // Si hay error, muestra este mensaje
                                    <div className="text-center text-gray-400 text-xs">
                                        <p>QR no disponible</p>
                                        <p>Verifica /public/images/qr-code.png</p>
                                    </div>
                                )}
                            </div>

                            <button
                                onClick={() => { setShowAR(false); setQrError(false); }}
                                className="w-full bg-green-800 text-white font-bold py-2 rounded-lg hover:bg-green-900 transition-colors"
                            >
                                Entendido
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}