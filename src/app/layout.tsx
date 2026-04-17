import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/footer/Footer";

export const metadata = {
  title: {
    default: "TAIT",
    template: "%s | TAIT",
  },
  description:
    "Technology at the Heart of the Mission - digital transformation for the Church through systems, media, research, and innovation.",
  keywords: [
    "TAIT",
    "Adventist Technology",
    "Church Systems",
    "Digital Mission",
    "Media Evangelism",
    "Research and Innovation",
  ],
  authors: [{ name: "TAIT" }],

  icons: {
    icon: "/images/TAIT.jpg",
  },

  openGraph: {
    title: "TAIT",
    description:
      "Technology at the Heart of the Mission - digital transformation for the Church.",
    type: "website",
    images: [
      {
        url: "/images/TAIT.jpg",
        width: 800,
        height: 800,
        alt: "TAIT Logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "TAIT",
    description:
      "Technology at the Heart of the Mission - digital transformation for the Church.",
    images: ["/images/TAIT.jpg"],
  },

  metadataBase: new URL("https://tait.tz"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Noto Sans Font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
/>
        {/* Tailwind CDN */}
        <script src="https://cdn.tailwindcss.com"></script>

        {/* Tailwind Config (Grapevine Theme) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                theme: {
                  extend: {
                    colors: {
                      primary: '#7f264a'
                    },
                    fontFamily: {
                      sans: ['Noto Sans', 'sans-serif']
                    }
                  }
                }
              }
            `,
          }}
        />
      </head>

      <body className="font-sans bg-white text-gray-800">

        {/* NAVBAR */}
        <Navbar />

        {/* PAGE CONTENT */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* FOOTER */}
        <Footer />

      </body>
    </html>
  );
}