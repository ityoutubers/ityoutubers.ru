import Script from "next/script";

export default function Head({ params }) {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>ITYouTubers — сообщество создателей IT контента</title>
      <link rel="icon" type="image/png" href="/fav.png" />

      <Script src="https://www.googletagmanager.com/gtag/js?id=G-QBYCDEYL37" />
      <Script id="gtag">
        {`
          window.dataLayer = window.dataLayer || []; 
          function gtag() {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-QBYCDEYL37');
        `}
      </Script>
    </>
  );
}
