import { screen, render } from '@testing-library/react'
import ContactPage from 'pages/contacte-nos'
import Main from '.'
import Footer from './Footer'
import Header from './Header'

describe('<Main />', () => {
  it('should render without crashing', () => {
    const { container } = render(<Main />)
    expect(
      screen.getByRole('heading', { name: /wella company/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the correct backgroud', () => {
    const { container } = render(<Main />)
    expect(container.firstChild).toHaveStyle({
      background: '-webkit-linear-gradient #06092b, #cccccc'
    })
  })
})

describe('<Header />', () => {
  it('should render logo', () => {
    const { container } = render(<Header />)
    const element = screen.getByRole('img') as HTMLImageElement
    expect(element.src).toContain('/img/wellaLogo.png')

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should have alt', () => {
    const { container } = render(<Header />)
    const element = screen.getByRole('img') as HTMLImageElement
    expect(element.alt).toContain('Wella')

    expect(container.firstChild).toMatchSnapshot()
  })
})

describe('<Footer />', () => {
  it('should render h2', () => {
    const { container } = render(<Footer />)
    expect(
      screen.getByRole('heading', { name: /mundo wella/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})

describe('<ContactPage />', () => {
  const data = {
    title: 'Contacte-nos',
    description: 'Fale connosco a qualquer momento...'
  }

  it('should render h1', () => {
    const { container } = render(<ContactPage data={data} />)
    expect(
      screen.getByRole('heading', { name: /contacte-nos/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render description', () => {
    const { container } = render(<ContactPage data={data} />)
    expect(
      screen.getByRole('heading', {
        name: /Fale connosco a qualquer momento.../i
      })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
