import { Inter } from "next/font/google";
import ThemeRegistry from "../theme/ThemeRegistry";
import { Analytics } from "@vercel/analytics/react";
import MasterLayout from "@/components/Common/MasterLayout";
import Hotjar from '@hotjar/browser';

import Script from "next/script";
import hotjarScript from "../../public/hotjar";

const siteId = 4961548;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);

// Initializing with `debug` option:
Hotjar.init(siteId, hotjarVersion, {
  debug: true
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Naziullah | Full Stack Developer | React | Next js | Node js",
  description: "Develop by Naziullah Shawn",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeRegistry>
        <body className={inter.className}>
          {" "}
          <Script
            id="hotjar-script"
            strategy="afterInteractive"
            onLoad={hotjarScript}
          />
          <MasterLayout>{children}</MasterLayout>
          <Analytics />
        </body>
      </ThemeRegistry>
    </html>
  );
}
