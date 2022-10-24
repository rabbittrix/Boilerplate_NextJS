import {
  Panel,
  Border,
  Content,
  TextPanel,
  Box,
  ButtonPanel,
  InfoPanel,
  InfoBox,
  InnerBox,
  Link
} from './styles'
import Button from '../../components/custombutton'

const insights = [
  {
    title: 'insights',
    img: '/icons/new.png',
    h5: (
      <h5>
        Eppf becomes active <br /> mesmber of SWIFT`
      </h5>
    ),
    link: <Link>DISCOVER MORE &#8680;</Link>
  },
  {
    title: 'insights',
    img: '/icons/new.png',
    h5: (
      <h5>
        Eppf becomes active <br /> mesmber of SWIFT`
      </h5>
    ),
    link: <Link>DISCOVER MORE &#8680;</Link>
  },
  {
    title: 'insights',
    img: '/icons/new.png',
    h5: (
      <h5>
        Eppf becomes active <br /> mesmber of SWIFT`
      </h5>
    ),
    link: <Link>DISCOVER MORE &#8680;</Link>
  },
  {
    title: 'insights',
    img: '/icons/new.png',
    h5: (
      <h5>
        Eppf becomes active <br /> mesmber of SWIFT`
      </h5>
    ),
    link: <Link>DISCOVER MORE &#8680;</Link>
  }
]

export default function index() {
  return (
      <Panel>
        <Border side="right" />
        <Content>
          <Box>
            <TextPanel>
              <p>LATEST INSIGHTS FOR</p>
              <h2>NOW MARKETS</h2>
            </TextPanel>
            <ButtonPanel>
              <Button
                text="VIEW ALL INSIGHTS "
                border
                src="icons/nowMarketsArrow.png"
              ></Button>
            </ButtonPanel>
          </Box>
          <InfoBox>
            {insights.map((insight, index) => (
              <InfoPanel key={index} side="right">
                <InnerBox>
                  <p>{insight.title}</p>
                  <img src={insight.img} alt="new" />
                </InnerBox>
                {insight.h5}
                {insight.link}
              </InfoPanel>
            ))}
          </InfoBox>
        </Content>
        <Border side="left" />
      </Panel>
  )
}
