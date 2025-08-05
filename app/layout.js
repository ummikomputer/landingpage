// app/layout.js
export const metadata = {
  title: 'Landing Page',
  description: 'Landing page modern dan responsif',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
