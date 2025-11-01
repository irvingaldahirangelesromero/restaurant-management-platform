import React from 'react';
import Link from 'next/link';

export default function HomePage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className="space-x-4">
                <Link href="/login" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                    Iniciar Sesión
                </Link>
                <Link href="/register" className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition duration-300">
                    Registrarse
                </Link>
            </div>
        </div>
    );
}