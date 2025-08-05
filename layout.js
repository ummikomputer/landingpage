// app/layout.js
export const metadata = {
  title: 'Landing Page',
  description: 'Landing Page dengan Next.js dan Tailwind CSS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
