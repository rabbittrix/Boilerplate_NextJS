import { ImgPanel, Link, TextPanel, Border, Panel, Content, Box } from './styles'

export default function index() {
  return (
    <Panel>
      <Border side="right" />
      <Content>
        <Box>
          <ImgPanel>
            <img src="/img/investors.png" alt="investors" />
          </ImgPanel>
          <TextPanel>
            <div>
              <div>
                <h1>Issuers</h1>
              </div>
              <div>
                <p>&#10004; Lower entry costs for new issuers (80%)</p>
                <p>&#10004; Full automation of Documentation</p>
                <p>&#10004; Access to real-time investor dialogue</p>
                <p>&#10004; Real-time execution</p>
              </div>
              <Link>NOWCM FOR ISSUERS &#8680;</Link>
            </div>
          </TextPanel>
        </Box>
        <Box>
          <TextPanel>
            <div>
              <div>
                <h1>Banks</h1>
              </div>
              <div>
                <p>&#10004; Time savings during execution (50%)</p>
                <p>
                  &#10004; Modular white-labeling and co-development solutions
                </p>
                <p>&#10004; Better originate-to-distribute ratios</p>
                <p>
                  &#10004; Transition capital-intensive loan clients to
                  fee-paying DCM clients with SEDIP
                </p>
              </div>
              <Link>NOWCM FOR BANKS &#8680;</Link>
            </div>
          </TextPanel>
          <ImgPanel>
            <img src="/img/banks.png" alt="investers" />
          </ImgPanel>
        </Box>
        <Box>
          <ImgPanel>
            <img src="/img/investors.png" alt="investers" />
          </ImgPanel>
          <TextPanel>
            <div>
              <div>
                <h1>Investors</h1>
              </div>
              <div>
                <p>&#10004; Transparency and real-time price discovery</p>
                <p>
                  &#10004; Actionable real-time execution thanks to modular link
                  to documentation
                </p>
                <p>&#10004; Lower operating risk & STP processes</p>
                <p>&#10004; Native regulatory compliance</p>
                <p>&#10004; Automatic matching</p>
              </div>
              <Link>NOWCM FOR INVESTORS &#8680;</Link>
            </div>
          </TextPanel>
        </Box>
        <Box>
          <TextPanel>
            <div>
              <div>
                <h1>Regulators</h1>
              </div>
              <div>
                <p>&#10004; Time savings during execution (50%)</p>
                <p>
                  &#10004; Modular white-labeling and co-development solutions
                </p>
                <p>&#10004; Better originate-to-distribute ratios</p>
                <p>
                  &#10004; Transition capital-intensive loan clients to
                  fee-paying DCM clients with SEDIP
                </p>
              </div>
              <Link>NOWCM FOR REGULATORS &#8680;</Link>
            </div>
          </TextPanel>
          <ImgPanel>
            <img src="/img/banks.png" alt="investers" />
          </ImgPanel>
        </Box>
        <Box>
          <ImgPanel>
            <img src="/img/investors.png" alt="investers" />
          </ImgPanel>
          <TextPanel>
            <div>
              <div>
                <h1>Intermediaries</h1>
              </div>
              <div>
                <p>&#10004; Transparency and real-time price discovery</p>
                <p>
                  &#10004; Actionable real-time execution thanks to modular link
                  to documentation
                </p>
                <p>&#10004; Lower operating risk & STP processes</p>
                <p>&#10004; Native regulatory compliance</p>
                <p>&#10004; Automatic matching</p>
              </div>
              <Link>NOWCM FOR INTERMIDIARIES &#8680;</Link>
            </div>
          </TextPanel>
        </Box>
      </Content>
      <Border side="left" />
    </Panel>
  )
}
