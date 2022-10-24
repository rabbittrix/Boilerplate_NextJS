import { ImgPanel, Text, SubTitle ,TextPanel, Border, Panel, Content } from './styles'
import Button from '../../components/custombutton'

export default function index() {
  return (
    <Panel>
      <Border side="right" />
      <Content>
        <ImgPanel>
          <img src="img/nowCp.png" alt="now cp logo" />
        </ImgPanel>
        <TextPanel>
          <h3>NowCP</h3>
          <SubTitle>World Premiere on Fixed Income markets!</SubTitle>
          <Text>&#10004; NEU CP and ECP marketplace</Text>
          <Text>&#10004; Firm orders or fully intermediated soft o 853 & RFQs</Text>
          <div className='d-flex'>
            <Button text="Zero Operation Risk" border></Button>
            <Button text="Automatic Matching" border></Button>
          </div>
          <div className='d-flex'>
            <Button text="Live ISIN" border></Button>
            <Button text="Primary & Secundary markets" border></Button>
          </div>
        </TextPanel>
      </Content>
      <Border side="left" />
    </Panel>
  )
}
