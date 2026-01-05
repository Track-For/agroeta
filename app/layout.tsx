import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
//

export const metadata: Metadata = {
    title: 'AgroETA',
    description: 'AgroETA - Soluções inteligentes para o agronegócio',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-BR">
            <head>
                <link rel="icon" href="/gota-2.png" type="image/png" />

                {/* ================= GOOGLE TAG MANAGER ================= */}
                <Script id="gtm" strategy="afterInteractive">
                    {`
            (function(w,d,s,l,i){w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TBSJW5S4');
          `}
                </Script>

                {/* ================= META PIXEL ================= */}
                <Script id="meta-pixel" strategy="afterInteractive">
                    {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;
            n.version='2.0';n.queue=[];
            t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1135238857807025');
            fbq('track', 'PageView');
          `}
                </Script>
            </head>

            <body>
                {/* ================= GTM (NOSCRIPT) ================= */}
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-TBSJW5S4"
                        height="0"
                        width="0"
                        style={{ display: 'none', visibility: 'hidden' }}
                    />
                </noscript>

                {/* ================= META PIXEL (NOSCRIPT) ================= */}
                <noscript>
                    <img
                        height="1"
                        width="1"
                        style={{ display: 'none' }}
                        src="https://www.facebook.com/tr?id=1135238857807025&ev=PageView&noscript=1"
                        alt=""
                    />
                </noscript>

                {children}

                {/* ================= BOTÃO WHATSAPP ================= */}
                <a
                    href="https://wa.me/554999117406"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed z-50 bottom-6 right-6 flex items-center px-5 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full shadow-lg transition-all duration-300 gap-2"
                    style={{
                        boxShadow: '0 4px 24px 0 rgba(37, 211, 102, 0.3)',
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        width="28"
                        height="28"
                        fill="currentColor"
                    >
                        <path d="M16 3C9.373 3 4 8.373 4 15c0 2.646.865 5.093 2.338 7.09L4.062 29.25a1 1 0 001.188 1.188l7.16-2.276A11.94 11.94 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.77 0-3.45-.46-4.91-1.26l-.35-.19-4.25 1.35 1.36-4.13-.22-.35C6.46 18.45 6 16.77 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.29-7.71c-.29-.15-1.71-.84-1.98-.93-.27-.1-.47-.15-.67.15-.19.29-.29.93-.94 1.12-.17.19-.35.21-.64.07-.29-.15-1.23-.45-2.34-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.35.43-.52.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51-.17-.01-.36-.01-.56-.01-.19 0-.5.07-.76.36-.26.29-1 1-.99 2.43.01 1.43 1.03 2.81 1.18 3.01.15.19 2.03 3.1 4.93 4.22.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.56-.08 1.71-.7 1.95-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.34z" />
                    </svg>
                    Solicitar Orçamento
                </a>
            </body>
        </html>
    );
}
