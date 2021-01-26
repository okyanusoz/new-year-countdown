import 'bootstrap/dist/css/bootstrap.min.css'
import Config from './Config.js'
import { constructTimeLeftItem } from './TimeLeft.js'
import { useEffect, useState } from 'react'
import GitHubForkRibbon from 'react-github-fork-ribbon'

function App() {
  const [timeLeft, setTimeLeft] = useState("Loading...")
  const [secondsLeft, setSecondsLeft] = useState(0)

  useEffect(() => {
    var interval
    const callback = () => {
      const now = new Date().getTime()
      const distance = new Date(Config.countdownDate) - now
      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)
      if(distance < 0){
        setTimeLeft("Expired. Happy new year!")
        setSecondsLeft(0)
        clearInterval(interval)
        return
      }

      // Construct timeLeft
      const timeLeftItems = [
        // format: itemValue, itemSingularName, itemPlurralName
        [days, "day", "days"], 
        [hours, "hour", "hours"],
        [minutes, "minute", "minutes"], 
        [seconds, "second", "seconds"]
      ]
      const timeLeftArray = []
      for (let i = 0, len = timeLeftItems.length; i < len; i++) {
        let item = constructTimeLeftItem(...timeLeftItems[i])
        if(item){
          timeLeftArray.push(item)
        }
      }
      const timeLeft = timeLeftArray.join(" ")
      setTimeLeft(timeLeft)
      setSecondsLeft(parseInt(distance / 1000))
    }
    interval = setInterval(callback, 1000)

    callback()

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="App">
      <h2>Countdown to {Config.year}</h2>
      <br />
      <h1>{timeLeft}</h1>
      <br />
      {secondsLeft ? (
        <div className="seconds-left">
          <h3>OR</h3>
          <br />
          {secondsLeft} seconds
        </div>
      ) : null}
      <br />
      <GitHubForkRibbon href={`https://github.com/${Config.GITHUB_REPO}`} target="_blank" position="right">
        Fork me on GitHub
      </GitHubForkRibbon>
    </div>
  )
}

export default App