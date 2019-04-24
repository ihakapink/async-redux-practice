import React from 'react'

import ErrorMessage from './ErrorMessage'
import LoadSubreddit from './LoadSubreddit'
import SubredditList from './SubredditList'
import WaitIndicator from './WaitIndicator'
import { connect } from 'react-redux'

// const App = () => (
//   <div className='app'>
//     <ErrorMessage />
//     <LoadSubreddit>
//       <WaitIndicator />
//     </LoadSubreddit>
//     <SubredditList />
//   </div>
// )

function App (props) {
  return (
    <React.Fragment>
      <ErrorMessage />
      <LoadSubreddit>
        <WaitIndicator />
      </LoadSubreddit>
      <SubredditList />
    </React.Fragment>
  )
}

function mapStateToProps (state) {
  return {
    subReddit: state.subReddit
  }
}

export default connect(mapStateToProps)(App)
