import Link from "next/link";

export default function Footer() {
  return (
    <footer className="foot">
      <div className="foot-grid">
        <div>
          <Link className="brand" href="/"><span className="mark" aria-hidden="true" />Averon Safety</Link>
          <p>Mobile data terminals for public safety.</p>
        </div>
        <div>
          <h4>Products</h4>
          <Link href="/products">Averon MDT</Link>
        </div>
        <div>
          <h4>Solutions</h4>
          <Link href="/#solutions">Patrol</Link>
          <Link href="/#solutions">Dispatch</Link>
          <Link href="/#solutions">Command staff</Link>
        </div>
        <div>
          <h4>Company</h4>
          <Link href="/contact">Contact</Link>
          <Link href="/contact">Request a demo</Link>
        </div>
      </div>
      <div className="foot-base">© {new Date().getFullYear()} Averon Safety. All rights reserved.</div>
    </footer>
  );
}
