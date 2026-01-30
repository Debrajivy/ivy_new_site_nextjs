import Navbar from "@/components/layout/Navbar";
import FooterMain from "@/components/layout/Footer";

export default function AIHelpCenterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Navbar />
      {children}
      <FooterMain />
    </div>
  );
}