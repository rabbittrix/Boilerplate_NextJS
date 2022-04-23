import { screen, render } from '@testing-library/react'
import Main from '.'

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
