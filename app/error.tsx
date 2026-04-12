'use client';

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div style={{ padding: 24 }}>
      <h2>Ocurrió un error.</h2>
      <p>{error.message}</p>
      <button onClick={() => reset()} style={{ marginTop: 12 }}>
        Reintentar
      </button>
    </div>
  );
}