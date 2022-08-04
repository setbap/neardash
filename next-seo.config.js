/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "NearDash",
  titleTemplate: "%s | Business Intelligence Dashboard for Near",
  defaultTitle:
    "NearDash | Business Intelligence Dashboard for Near ",
  description:
    "Best Business Intelligence Dashboard for Near by Flipside Crypto and Setbap ",
  canonical: "https://NearDash.vercel.app/",
  openGraph: {
    url: "https://NearDash.vercel.app/",
    title: "NearDash",
    description:
      "Best Business Intelligence Dashboard for Near by Flipside Crypto and Setbap ",
    images: [
      {
        url: "https://og-image.sznm.dev/**NearDash**.vercel.app.png?theme=dark&md=1&fontSize=125px",
        alt: "NearDash by Flipside Crypto and Setbap",
      },
    ],
    site_name: "NearDash",
  },
  twitter: {
    handle: "@flipsidecrypto",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
