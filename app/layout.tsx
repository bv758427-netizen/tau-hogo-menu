import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
 title: "TAU HOGO — Digital Menu",
 description: "Digital menu for TAU HOGO, Almaty.",
};
export default function RootLayout({children}:{children:React.ReactNode}) {
 return <html lang="ru"><body>{children}</body></html>;
}
