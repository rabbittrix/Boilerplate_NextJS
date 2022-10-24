import Button from '../custombutton'
import { Nav, Border, BorderBottom, Menu, Logo, Rectangle, Actions } from './style'

export default function index() {
  return (
    <Nav>
      <Border side="right" />
      <Logo>
        <img src="img/nowCm.png" alt="NOW CM"/>
      </Logo>
      <Menu>
        <BorderBottom>
          PRODUCTS
        </BorderBottom>
        <BorderBottom>
          SOLUTIONS
        </BorderBottom>
        <BorderBottom>
          INSIGHTS
        </BorderBottom>
        <BorderBottom>ABOUT</BorderBottom>
        <BorderBottom isLast>
          TEAM
        </BorderBottom>
        <Rectangle></Rectangle>
      </Menu>
      <Actions>
        <Button
          text="    Login"
          border={false}
          src="icons/rightArrow.svg"
          left
        ></Button>
        <Button text="Contact" border></Button>
      </Actions>
      <Border side="left" />
    </Nav>
  )
}
