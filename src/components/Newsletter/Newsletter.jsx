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

          <form
            className={newsletterStyles.form}
            action="https://app.convertkit.com/forms/1669991/subscriptions"
            method="post"
          >
            <label htmlFor="name">
              <input type="text" id="name" name="fields[first_name]" placeholder="Enter your first name:" />
            </label>
            <label htmlFor="email">
              <input type="email" name="email_address" id="email" placeholder="Enter your email:" required />
            </label>
            <button type="submit">Submit</button>
        </form>
        </div>
      </div>
    </section>

  )
}

export default Newsletter;
