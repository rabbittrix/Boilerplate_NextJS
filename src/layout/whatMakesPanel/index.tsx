import { Border, Panel, Content, Text, Title, Container, Box } from './styles'

export default function index() {
  return (
    <Panel>
      <Border side="right" />
      <Content>
        <Text>WHAT MAKES</Text>
        <div>
          <Title>Now Markets</Title>
        </div>
        <Container>
          <Box isGlow>
            <img src="/img/nowBlue.png" alt="NOW Markets" />
            <p>Markets</p>
          </Box>
          <Box>
            <img src="/img/now.png" alt="NOW Bonds" />
            <p>Bonds</p>
          </Box>
          <Box>
            <img src="/img/now.png" alt="NOW Books" />
            <p>Books</p>
          </Box>
        </Container>
      </Content>
      <Border side="left" />
    </Panel>
  )
}
