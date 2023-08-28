import { Red_Hat_Display, Red_Hat_Text } from 'next/font/google'
import './normalize.scss'
import './globals.css'
import './app.scss'
import Provider from '@/components/provider'
import { ThemeProvider } from '@/components/theme-provider'

export const red_hat_display = Red_Hat_Display({
  subsets: ['latin'],
  variable: '--font-red-hat-display',
  display: 'swap'
})

export const red_hat_text = Red_Hat_Text({
  subsets: ['latin'],
  variable: '--font-red-hat-text',
  display: 'swap'
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${red_hat_display.variable} ${red_hat_text.variable}`} suppressHydrationWarning>
      <Provider>
        <body className="dark:bg-black dark:text-white">
          <ThemeProvider attribute="class" enableSystem>
            {children}
          </ThemeProvider>
        </body>
      </Provider>
    </html>
  )
}