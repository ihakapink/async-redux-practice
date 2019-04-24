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
    <form onChange={this.handleSubmit}>
      <label>
      Subreddit:
        <input type="text" value={this.state.value} onChange={this.handle} />
      </label>
      <input type="submit" value="Submit" />
    </form>
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
