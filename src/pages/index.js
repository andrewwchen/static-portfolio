import * as React from 'react'

const styles = {
  background: "white",
  color: "black",
  textAlign: "center",
  fontFamily: "Andale Mono, monospace",
  height: "100vh",
  width: "100vw",
  position: "absolute",
  top: 0,
  left: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}


const IndexPage = () => {
  return (
    <main style={styles}>
      <div>
        <h1>Andrew W. Chen</h1>
        <h2> <a href="resume.pdf">Resume</a> </h2>
        <h2> <a href="https://github.com/andrewwchen">GitHub</a> </h2>
      </div>
    </main>
  )
}

export const Head = () => <title>Andrew W. Chen</title>

export default IndexPage