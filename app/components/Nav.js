import Link from "next/link";

export default function Nav() {
  return (
    <header className="nav">
      <Link className="brand" href="/"><span className="mark" aria-hidden="true" />Averon Safety</Link>
      <nav aria-label="Main">
        <Link href="/products">Products</Link>
        <Link href="/#solutions">Solutions</Link>
        <Link href="/#security">Security</Link>
        <Link href="/#integrations">Integrations</Link>
        <Link className="btn small" href="/contact">Request a demo</Link>
      </nav>
    </header>
  );
}
