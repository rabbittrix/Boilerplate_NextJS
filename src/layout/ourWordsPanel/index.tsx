import { TextPanel, ImgPanel, Panel, Border, Content, Box, Text, WhoServesPanel } from './styles'

export default function index() {
  return (
    <Panel>
      <Border side="right" />
      <Content>
        <TextPanel>
          <Box>
            <p>WE STAND BEHIND</p>
            <h2>Our Words</h2>
          </Box>
          <Text>
            <p>
              NowCM is the first and only regulated infra-structure with a
              complete and cloud-native workflow
            </p>
          </Text>
        </TextPanel>
        <ImgPanel>
          <img src="/img/ourWords.png" alt="our words image" />
        </ImgPanel>
        <WhoServesPanel>
        <p>FOR WHOM ARE OUR PRODUCTS MADE FOR</p>
        <h2>WHO WE SERVE</h2>
        </WhoServesPanel>
      </Content>
      <Border side="left" />
    </Panel>
  )
}
