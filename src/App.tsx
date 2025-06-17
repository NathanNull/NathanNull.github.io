import React from "react"
import { Outlet } from "react-router-dom"

export default function App() {
  return <div style={styles.container}>
    <Outlet />
  </div>
}

const styles: { [n: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    backgroundColor: "#282c34",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
    minHeight: '100vh',
  }
}