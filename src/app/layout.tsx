import './globals.css'
import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>

    )
}
