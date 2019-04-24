import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

class LoadSubreddit extends React.Component {
  state = {
    subReddit: ''
  }

handleChange = (e) => {
  this.setState({
    subReddit: e.target.value
  })
}

render () {
  return (
    <React.Fragment>
      <input subReddit="" onChange={this.handleChange} value={this.state.subReddit} />

      <button onClick={() => dispatchEvent(fetchPosts(this.subReddit))}>Go to subreddit</button>
    </React.Fragment>
  )
}
}
// const LoadSubreddit = ({ children, dispatch }) => (
//   <div>
//     <button onClick={() => dispatch(fetchPosts('newzealand'))}>
//       Fetch Posts
//     </button>
//     {children}
//   </div>
// )

export default connect()(LoadSubreddit)
