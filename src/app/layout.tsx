// import type { Metadata } from "next";
// import "./globals.css";


// export const metadata: Metadata = {
//   title: "instaDeepFake",
//   description: "Creator: JMU",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="sk">
//       <body >
//         {children}
//       </body>
//     </html>
//   );
// }

import type { Metadata } from 'next';
import BottomNavBar from '@/components/Navbar'; // Adjust path based on your structure

export const metadata: Metadata = {
  title: 'instaDeepFake',
  description: 'Creator: JMU',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body>
        {children}
        <BottomNavBar /> {/* Bottom Navigation Bar will appear on every page */}
      </body>
    </html>
  );
}
