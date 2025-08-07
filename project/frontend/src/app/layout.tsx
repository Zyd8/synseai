import './globals.css';
import Link from 'next/link';
import { ReactNode } from 'react';

export const metadata = {
  title: 'SynseAI',
  description: 'A sample app with Next.js App Router',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav style={{ padding: 12 }}>
          <Link href="/">Landing</Link> |{" "}
          <Link href="/home">Home</Link> |{" "}
          <Link href="/login">Login</Link> |{" "}
          <Link href="/signup">Sign Up</Link>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
