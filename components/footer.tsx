export function Footer() {
  return (
    <footer className="mt-12 border-t border-border bg-white">
      <div className="container-shell grid gap-10 py-12 md:grid-cols-4">
        
        {/* Marca */}
        <div>
          <h3 className="text-lg font-bold">Portal Verde</h3>
          <p className="mt-2 text-sm text-text-soft">
            Tu ecommerce paraguayo para jardinería, plantas y vida verde.
          </p>
        </div>

        {/* Atención */}
        <div>
          <h4 className="text-sm font-semibold">Atención al cliente</h4>
          <ul className="mt-3 space-y-2 text-sm text-text-soft">
            <li>Centro de ayuda</li>
            <li>Envíos y entregas</li>
            <li>Cambios y devoluciones</li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="text-sm font-semibold">Contacto</h4>
          <ul className="mt-3 space-y-2 text-sm text-text-soft">
            <li>Asunción, Paraguay</li>
            <li>+595 981 000 000</li>
            <li>hola@portalverde.com.py</li>
          </ul>
        </div>

        {/* Empresa */}
        <div>
          <h4 className="text-sm font-semibold">Empresa</h4>
          <ul className="mt-3 space-y-2 text-sm text-text-soft">
            <li>Sobre Portal Verde</li>
            <li>Trabajá con nosotros</li>
            <li>Términos y privacidad</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border py-4">
        <p className="container-shell text-xs text-text-soft">
          © {new Date().getFullYear()} Portal Verde. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}