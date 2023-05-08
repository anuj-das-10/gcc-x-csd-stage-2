import { useEffect } from "react";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";
import '@/styles/globals.css'
import '@/styles/Home.module.css'
import { Header, Footer } from "@/components";
import AOS from "aos";
import 'aos/dist/aos.css'; // You can also use <link> for styles


export default function App({
  Component, pageProps: { session, ...pageProps }
}) {
  
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: false,
      offset: 100,
    });
  }, []);

  return (
    <>
      <Head />
      <Header />
      
      <Component {...pageProps}/>

      <Footer />
    </>
  )
}


