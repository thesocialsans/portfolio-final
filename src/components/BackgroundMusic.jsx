import { useEffect, useRef, useState } from 'react'
import './BackgroundMusic.css'

const TARGET_VOLUME = 0.6

function SpeakerOnIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor" />
      <path
        d="M16.5 8.5a5 5 0 0 1 0 7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M19 6a8.5 8.5 0 0 1 0 12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

function SpeakerOffIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor" />
      <path
        d="M16 9l5 6M21 9l-5 6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

function BackgroundMusic() {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = TARGET_VOLUME
  }, [])

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
      return
    }

    audio.volume = TARGET_VOLUME
    audio
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => setIsPlaying(false))
  }

  return (
    <>
      <audio ref={audioRef} src="/audio/bg-music.mp3" loop preload="none" />
      <button
        type="button"
        className="bg-music-toggle"
        onClick={toggle}
        aria-label={isPlaying ? 'Mute background music' : 'Play background music'}
        aria-pressed={isPlaying}
      >
        {isPlaying ? <SpeakerOnIcon /> : <SpeakerOffIcon />}
      </button>
    </>
  )
}

export default BackgroundMusic
