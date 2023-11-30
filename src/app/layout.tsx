import "./globals.css";

export const metadata = {
  title: "Brainwave Broadcasting",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="dark" lang="en">
      <body className="min-h-[100svh] flex flex-row items-center justify-center">
        {children}
      </body>
    </html>
  );
}
