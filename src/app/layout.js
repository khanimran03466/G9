import HCCfooter from "./components/shared-content/HCCfooter";
import "./globals.css";
import { Inter } from "next/font/google";
import Modals from "./components/shared-content/Modals";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        />
      </head>

      <body className={inter.className} class="base" id="home">
        {/* <Header /> */}

        {children}

        <HCCfooter />
        <Modals />

      
      </body>
    </html>
  );
}
