import classNames from "classnames";
import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import { Metadata } from "next";

const inter = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={classNames(inter.className)}>
        <main>{children}</main>
      </body>
    </html>
  );
}
