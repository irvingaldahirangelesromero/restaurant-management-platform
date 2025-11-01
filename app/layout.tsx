import React from 'react';
import '@/app/ui/global.css';

export default function RootLayout({ children,}: {
        children: React.ReactNode;
    }) {
    return (
        <html lang="es">
            <body>
                (children)  {/* Representa el contenido de las páginas o layouts anidados. El RootLayout envuelve todo lo demás. */}
            </body>
        </html>
    );
}