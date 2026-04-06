export const metadata = {
  title: "Euphoric RP",
  description: "Euphoric RP Website"
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
