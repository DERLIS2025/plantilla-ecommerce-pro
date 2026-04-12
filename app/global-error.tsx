'use client';

export default function GlobalError({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="es-PY">
      <body style={{ padding: 24 }}>
        <h2>Error global</h2>
        <p>{error.message}</p>
        <button onClick={() => reset()} style={{ marginTop: 12 }}>
          Reintentar
        </button>
      </body>
    </html>
  );
}