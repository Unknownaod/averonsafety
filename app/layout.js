import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export const metadata = {
  title: "Averon Safety | Mobile data terminals for public safety",
  description: "Averon MDT puts live 911 activity, calls, maps, person and vehicle search, BOLOs and reports in one terminal.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
