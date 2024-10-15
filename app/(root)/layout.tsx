
import Footer from "@/components/shared/Footer"
import Header from "@/components/shared/Header"


export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
        <body>
          <Header />
          {children}
          <Footer/>
        </body>
      </html>
  )
}
