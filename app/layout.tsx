import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Header, Footer, WhatsApp } from "@/components/site";
const inter=Inter({subsets:["latin"],variable:"--font-inter"});
const poppins=Poppins({subsets:["latin"],weight:["500","600","700"],variable:"--font-poppins"});
export const metadata:Metadata={title:{default:"Ballal-Group SARL | Immobilier à Abidjan",template:"%s | Ballal-Group SARL"},description:"Ballal-Group SARL vous accompagne dans la vente, l'achat et la gestion de biens immobiliers à Abidjan."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="fr" className={`${inter.variable} ${poppins.variable}`}><body><Header/>{children}<WhatsApp/><Footer/></body></html>}
