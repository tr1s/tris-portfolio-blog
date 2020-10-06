import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout/Layout';
import Head from '../components/head';

import thankyouStyles from './thankyou.module.scss';

class Thankyou extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Head title="Thank you ✌🏽" />
        <div className="inner-wrapepr">
          <div className={thankyouStyles.thankyou}>
            <h1>Thank you for subscribing! ✌🏽</h1>
            <p>
              You'll now receive updates when I release a new post. In the meantime,{' '}
              <Link to="/">head back to the homepage</Link>.
            </p>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Thankyou;
