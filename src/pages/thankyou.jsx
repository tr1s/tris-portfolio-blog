import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout/Layout';
import Head from '../components/head';
import thankyou from '../assets/images/thankyou/success.svg';

import thankyouStyles from './thankyou.module.scss';

class Thankyou extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Head title="Thank you ✌🏽" />
        <div className="inner-wrapper">
          <div className={thankyouStyles.thankyou}>
            <h1>
              Success{' '}
              <span>
                <img src={thankyou} alt="" />
              </span>
            </h1>
            <p>
              Now <strong>check your email to confirm your subscription</strong>. You'll now receive
              updates when I release a new post. In the meantime,{' '}
              <Link to="/blog">head back to the blog</Link>.
            </p>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Thankyou;
