import '../ui/globals.css';

export default function RootLayout({ children,}: {
        children: React.ReactNode;
    }) {
    return (
        <html lang="es">
            <body className='bg-gray-50'>
                {children}  {/* Representa el contenido de las páginas o layouts anidados. El RootLayout envuelve todo lo demás. */}
            </body>
        </html>
    );
}