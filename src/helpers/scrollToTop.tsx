import React from "react"
import { withRouter } from "react-router-dom"

function ScrollToTop({ history, children }: any) {
  React.useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0)
    })
    return () => {
      unlisten()
    }
  }, [])

  return <>{children}</>
}

export default withRouter(ScrollToTop)
