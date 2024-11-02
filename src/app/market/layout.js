import Header from "@/components/Header";
import '@rainbow-me/rainbowkit/styles.css';
import Footer from '@/components/Footer';

export default function MarketLayout({ children }) {

    return (
        <html leng="en">
            <head>
                <title> Market </title>
            </head>
            <body>          

                <section>

                    {children}

                </section>
       
            </body>


        </html>
    )

}