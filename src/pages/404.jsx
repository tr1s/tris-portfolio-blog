import React from 'react'

import Layout from '../components/Layout/Layout'
import Head from '../components/head'

class NotFoundPage extends React.Component {
  render () {
    return (
      <Layout location={this.props.location}>
        <Head title='404: Not Found' />
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Layout>
    )
  }
}

export default NotFoundPage
