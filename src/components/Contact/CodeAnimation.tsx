"use client"
import { useState, useEffect} from 'react'

export function CodeAnimation() {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentSequence, setCurrentSequence] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [cursorVisible, setCursorVisible] = useState(true)

  const sequences = [
    `// Brewing coffee...\nawait fetch('/api/coffee', {\n  method: 'BREW',\n  body: JSON.stringify({ strength: 'dangerous' })\n})`,

    `// Ordering pizza...\nawait fetch('/api/pizza', {\n  method: 'ORDER',\n  body: JSON.stringify({ toppings: ['pepperoni', 'extra cheese'] })\n})`,

    `// Playing music...\nawait fetch('/api/spotify', {\n  method: 'PLAY',\n  body: JSON.stringify({ volume: 100, shame: true })\n})`,

    `// Searching for memes...\nawait fetch('/api/memes', {\n  method: 'GET',\n  body: JSON.stringify({ category: 'programming' })\n})`
  ]


  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(v => !v)
    }, 500)
    return () => clearInterval(cursorInterval)
  }, [])

  useEffect(() => {
    const currentSequenceText = sequences[currentSequence]

    if (!isDeleting && currentIndex < currentSequenceText.length) {
      const timer = setTimeout(() => {
        const nextChar = currentSequenceText[currentIndex]
        setDisplayText(prev => prev + nextChar)
        setCurrentIndex(currentIndex + 1)
      }, 80)

      return () => clearTimeout(timer)
    } else if (!isDeleting && currentIndex >= currentSequenceText.length) {
      const pauseTimer = setTimeout(() => {
        setIsDeleting(true)
      }, 5000)
      return () => clearTimeout(pauseTimer)
    } else if (isDeleting && displayText.length > 0) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev.slice(0, -1))
      }, 60)
      return () => clearTimeout(timer)
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false)
      setCurrentIndex(0)
      setCurrentSequence((currentSequence + 1) % sequences.length)
    }
  }, [currentIndex, currentSequence, isDeleting, displayText])

  const renderHighlightedCode = (text: string) => {
    const lines = text.split('\n')
    return lines.map((line, lineIndex) => {
      let highlightedLine = line

      highlightedLine = highlightedLine
        .replace(/(\/\/.*)/g, '<span class="text-cyan-400">$1</span>')
        .replace(/(const|await)/g, '<span class="text-purple-400">$1</span>')
        .replace(/(fetch|JSON\.stringify)/g, '<span class="text-yellow-300">$1</span>')
        .replace(/(\/api\/contact)/g, '<span class="text-green-300">$1</span>')
        .replace(/(Your Name|your\.email@domain\.com)/g, '<span class="text-orange-300">$1</span>')
        .replace(/(\{|\}|\(|\))/g, '<span class="text-pink-400">$1</span>')

      return (
        <div key={lineIndex} className="flex">
          <span className="text-gray-500 text-xs select-none mr-3 w-4">{lineIndex + 1}</span>
          <span
            className="flex-1 text-xs"
            dangerouslySetInnerHTML={{ __html: highlightedLine }}
          />
        </div>
      )
    })
  }

  return (
    <div className="bg-gray-900 rounded-lg p-4 font-mono h-full border border-green-500/30 relative overflow-hidden">
      <div className="flex items-center gap-2 mb-3">
        <div className="flex gap-1">
          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        </div>
        <span className="text-green-400 text-xs">contact_terminal.js</span>
      </div>

      <div className="bg-black/30 rounded p-3 border border-green-500/20 min-h-[120px]">
        <div className="text-green-400 text-xs leading-relaxed">
          {renderHighlightedCode(displayText)}
          {cursorVisible && !isDeleting && (
            <div className="flex">
              <span className="text-gray-500 text-xs select-none mr-3 w-4">{(displayText.split('\n').length) + 1}</span>
              <span className="bg-green-400 w-1 h-3 animate-pulse mt-0.5"></span>
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-between items-center mt-3 text-xs text-gray-500">
        <div className="flex items-center gap-1">
          <div className={`w-1 h-1 rounded-full ${isDeleting ? 'bg-yellow-500' : 'bg-green-500'}`}></div>
          <span className="text-xs">{isDeleting ? 'Deleting...' : 'Typing...'}</span>
        </div>
        <span className="text-xs">JS</span>
      </div>
    </div>
  )
}