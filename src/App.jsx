import useRoutesElements from "./routes/useRoutesElements"

function App() {
  const elements = useRoutesElements()

  return (
    <>
      { elements }
    </>
  )
}

export default App
