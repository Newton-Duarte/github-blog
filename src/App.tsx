import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'
import { Profile } from './components/Profile'
import { Posts } from './components/Posts'
import Main from './components/Main'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <Main>
        <Profile />
        <Posts />
      </Main>
    </ThemeProvider>
  )
}
