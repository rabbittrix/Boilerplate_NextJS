import Button from '../../components/custombutton'
import {
  Checkered,
  Gradient,
  Panel,
  Border,
  Layer,
  Content,
  Text,
  Title,
  Logo
} from './styles'

export default function index() {
  return (
    <Panel>
      <Checkered>
        <img src="/img/Rectangle.png" alt="rectangle" />
        <img src="/img/background.png" alt="checkered background" />
      </Checkered>
      <Gradient src="/img/gradientOverlay.png" alt="gradient background" />
      <Layer>
        <Border side="right" />
        <Content>
          <Text>
            REGULATED MTF FOR PRIMARY & SECUNDARY FIXED INCOME MARKETS
          </Text>
          <Title>
            Now <br />
            Markets
          </Title>
          <Button
            text="Contact One Of Our Experts"
            border
            src="icons/nowMarketsArrow.png"
          ></Button>
          <Logo>
            <img
              src="/img/scrollToDiscover.png"
              alt="scroll to discover image"
            />
          </Logo>
        </Content>
        <Border side="left" />
      </Layer>
    </Panel>
  )
}
