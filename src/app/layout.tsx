import "./globals.css";
import "windi.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
