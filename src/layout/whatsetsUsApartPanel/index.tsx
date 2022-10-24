import { Panel, Border, Content, TextPanel, Box, InfoPanel } from './styles'

export default function index() {
  return (
    <Panel>
      <Border side="right" />
      <Content>
        <TextPanel>
          <p>WHY USE NOWCM</p>
          <h2>What Sets Us Apart</h2>
        </TextPanel>
        <Box>
          <InfoPanel side="right">
            <img
              className="mx-auto d-block"
              src="/img/europeanInstitution.png"
              alt="European Institution"
            />
            <p className="text-center">European Institution</p>
          </InfoPanel>
          <InfoPanel side="right">
            <img
              className="mx-auto d-block"
              src="/img/neutral.png"
              alt="Neutral"
            />
            <p className="text-center">Neutral</p>
          </InfoPanel>
          <InfoPanel>
            <img
              className="mx-auto d-block"
              src="/img/Regulated.png"
              alt="Regulated"
            />
            <p className="text-center">Regulated</p>
          </InfoPanel>
        </Box>
        <Box hasBorder>
          <InfoPanel side='right'>
            <img
              className="mx-auto d-block"
              src="/img/iso22.png"
              alt="Iso 2022"
            />
            <p>ISO 2022</p>
          </InfoPanel>
          <InfoPanel>
            <img
              className="mx-auto d-block"
              src="/img/data.png"
              alt="Data Sovereignty"
            />
            <p>Data Sovereignty</p>
          </InfoPanel>
        </Box>
      </Content>
      <Border side="left" />
    </Panel>
  )
}
