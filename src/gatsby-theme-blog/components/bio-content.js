import React from "react"
import { Themed } from "theme-ui"

/**
 * Change the content to add your own bio
 */

export default function Bio() {
  return (
    <>
      Personal Blog by <Themed.a href="http://jimil-desai.s3-website.ap-south-1.amazonaws.com/">Jimil Desai</Themed.a>
      {` `}
      <br/>
      My GSoC experience
    </>
  )
}
