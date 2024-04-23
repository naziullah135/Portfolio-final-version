import { Inter } from "next/font/google";
import ThemeRegistry from "../theme/ThemeRegistry";
import { Analytics } from '@vercel/analytics/react';
import MasterLayout from "@/components/Common/MasterLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Naziullah | Portfolio",
  description: "Develop by Naziullah Shawn",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeRegistry>
        <body className={inter.className}>
          {" "}
          <MasterLayout>{children}</MasterLayout>
          <Analytics />
        </body>
      </ThemeRegistry>
    </html>
  );
}
