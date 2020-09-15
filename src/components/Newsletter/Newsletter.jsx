import React from 'react';

import newsletterStyles from './Newsletter.module.scss';

const Newsletter = () => {
  return (
    <section className={newsletterStyles.newsletter}>
      <div className="inner-wrapper">
        <div className={newsletterStyles.newsletterContainer}>
          <div className={newsletterStyles.info}>
            <h2 className={newsletterStyles.title}>Sign up</h2>
            <p>Sign up to get the latest about my learning journey via blog posts.</p>
          </div>

          <form action="" className={newsletterStyles.form}>
            <label htmlFor="email">
              <input type="email" id="email" placeholder="Enter your email..."/>
            </label>
            <button type="submit">Submit</button>
        </form>
        </div>
      </div>
    </section>

  )
}

export default Newsletter;
