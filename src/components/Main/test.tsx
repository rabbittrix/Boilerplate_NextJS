import { screen, render } from '@testing-library/react'
import Main from '.'

describe('<Main />', () => {
  it('should render without crashing', () => {
    render(<Main />)
    expect(
      screen.getByRole('heading', { name: /WELLA Company/i })
    ).toBeInTheDocument()
  })
})
