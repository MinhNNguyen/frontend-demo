import { AppBar } from '@/components/AppBar';
import ThemeRegistry from '@/components/ThemeRegistry';

export const metadata = {
  title: 'Recipe Site',
  description: 'A modern recipe sharing platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <AppBar />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}