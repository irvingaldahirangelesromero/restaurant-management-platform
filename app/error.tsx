'use client';

export default function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
    return (
        <div>
            <h2>Ocurrió un error</h2>
            <p>{error.message}</p>
            <button onClick={reset}>Intentar de nuevo</button>
        </div>
    );
}