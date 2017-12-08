import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>This is a Website</h1>
    <p>There are many like this, but this one is mine.</p>
    <p>We are still learning or ways around this.</p>
    <img src="http://lorempixel.com/400/200" alt="an image" />
    <blockquote>
      Lorem ipsum dolor sit amet, at probatus corrumpit mea. Feugait civibus sea ne, ex est detracto erroribus laboramus, sed te volumus omittam prodesset. Nam voluptua appareat efficiantur ne. Duo in sumo prima, harum choro vulputate in vis. Sea eu vide perfecto.
    </blockquote>
    <p>Just showing off stuff to Mark</p>
    <h2>Some links to look at:</h2>
    <ul>
      <li>
        <Link to="/page-2/">Go to page 2</Link>
      </li>
    </ul>
  </div>
)

export default IndexPage
