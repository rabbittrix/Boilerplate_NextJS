import Main from 'components/Main'
import Header from 'components/Header'
import Footer from 'components/Footer'
import MarkersPanel from 'layout/nowMarketsPanel'
import WhatMakesPanel from 'layout/whatMakesPanel'
import SetUsApartPanel from 'layout/whatsetsUsApartPanel'
import NowCpPanel from 'layout/nowCpPanel'
import OurWordsPanel from 'layout/ourWordsPanel'
import WhoWeServerPanel from 'layout/whoWeServePanels'
import LatestInsights from 'layout/latestInsightsPanel'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Page } from './styles'

export default function Home() {
  return (
    <Page>
      <Header />
      <MarkersPanel />
      <WhatMakesPanel />
      <NowCpPanel />
      <OurWordsPanel />
      <WhoWeServerPanel />
      <SetUsApartPanel />
      <LatestInsights />
      <Footer />
    </Page>
  )
}
