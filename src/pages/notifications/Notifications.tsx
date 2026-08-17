import { BasePage, StatusBar, TopBar } from '../../common/components/Layout'
import type { Navigate } from '../../common/types'

const Notifications = ({ go }: { go: Navigate }) => {
  return (
    <BasePage>
      <StatusBar />
      <TopBar title="Notifications" back={() => go('home')} />
    </BasePage>
  )
}


export default Notifications
