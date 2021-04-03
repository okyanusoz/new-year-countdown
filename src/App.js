import 'bootstrap/dist/css/bootstrap.min.css'
import Config from './Config.js'
import { constructTimeLeftItem } from './TimeLeft.js'
import { useEffect, useState } from 'react'
import GitHubForkRibbon from 'react-github-fork-ribbon'

function App() {
  const [timeLeft, setTimeLeft] = useState("Loading...")

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
    }
    interval = setInterval(callback, 1000)

    callback()

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="App">
      <h2>{Config.countdownToText} {Config.year}</h2>
      <br />
      <h1>{timeLeft}</h1>
      <br />
      <GitHubForkRibbon href={`https://github.com/${Config.GITHUB_REPO}`} target="_blank" color="black" position="right">
        Fork me on GitHub
      </GitHubForkRibbon>
    </div>
  )
}

export default App
