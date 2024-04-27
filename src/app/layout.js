import { Inter } from "next/font/google";
import ThemeRegistry from "../theme/ThemeRegistry";
import { Analytics } from "@vercel/analytics/react";
import MasterLayout from "@/components/Common/MasterLayout";

import Script from "next/script";
import hotjarScript from "../../public/hotjar";

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
