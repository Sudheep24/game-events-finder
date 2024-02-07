import { Poppins } from "next/font/google";
import { Footer } from "../../components/shared/footer";
import { Header } from "../../components/shared/header";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      
      <div className="flex h-screen flex-col">
        <Header />
          <main className="flex-1">
          

          {children }
          
          </main>
        <Footer/>
      </div>
      
    
  );
}
