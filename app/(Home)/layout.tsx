import Navbar from "@/components/LandingPage/Navbar";


export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <div>
    <Navbar/>
    {children}
   </div>
  );
}
