import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="container-shell grid gap-8 py-12 md:grid-cols-4">
        <div>
          <h3 className="text-base font-semibold">Atelier&Co</h3>
          <p className="mt-2 text-sm text-muted">
            Refined essentials for modern interiors.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Shop</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>
              <Link href="/shop">All Products</Link>
            </li>
            <li>
              <Link href="/shop">New Arrivals</Link>
            </li>
            <li>
              <Link href="/shop">Best Sellers</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Company</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>About</li>
            <li>Journal</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Support</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>Shipping</li>
            <li>Returns</li>
            <li>FAQ</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
