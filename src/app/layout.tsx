import "../styles/index.scss";
import Footer from "@/components/Footer";
import { getCategories } from "@/fetching/getCategories";

export const metadata = {
  title: 'Your Audio Needs | Audiophile',
  description: 'Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const categories = await getCategories();

  return (
    <html lang="en">
      <body>
        {children}
        <Footer categories={categories} />
      </body>
    </html>
  )
}
