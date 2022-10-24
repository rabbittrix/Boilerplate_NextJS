import { Checkered, Panel, Border, Content, Box, Layer } from './styles'

export default function index() {
  return (
    <Panel>
      <Checkered>
        <img src="/img/Rectangle.png" alt="rectangle" />
        <img src="/img/background.png" alt="checkered background" />
      </Checkered>
      <Layer>
        <Border side="right" />
        <Content>
          <Box>
            <img src="/img/nowCm.png" alt="NOW CM" />
            <p>/ 6 rue Dicks / 1417 Luxembourg / +44-7490-373236</p>
          </Box>
          <Box>
            <p>DOCUMENTATION</p>
            <p>IMPRINT</p>
            <p>PRIVACY POLICY</p>
            <p>TERMS OF SERVICE</p>
          </Box>
          <Box>
            <img src="/icons/twitter.png" alt="Twitter" />

            <img src="/icons/linkedin.png" alt="LinkedIn" />

            <img src="/icons/facebook.png" alt="LinkedIn" />
          </Box>
        </Content>
        <Border side="left" />
      </Layer>
    </Panel>
  )
}
