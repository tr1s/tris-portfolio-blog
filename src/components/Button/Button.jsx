import React from 'react'
import { Link } from 'gatsby'

const Button = ({ text, type, route }) => {
  if (type === 'link') {
    return (
      <Link to={route}>
        {text}
      </Link>
    )
  }
}

export default Button
