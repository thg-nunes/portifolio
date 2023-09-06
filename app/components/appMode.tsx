'use client'
import { useEffect, useState } from 'react'
import { MoonStars, SunDim } from '@phosphor-icons/react'

export type AppModeProps = {}

export const AppMode = (): JSX.Element => {
  const [appMode, setAppMode] = useState<'dark' | 'light'>()

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark')
      setAppMode('dark')
    } else {
      document.documentElement.classList.remove('dark')
      setAppMode('light')
    }
  }, [])

  return (
    <div className="w-max">
      {appMode === 'dark' && (
        <SunDim
          size={24}
          weight="fill"
          className="cursor-pointer text-white"
          onClick={() => {
            document.documentElement.classList.remove('dark')
            setAppMode('light')
          }}
        />
      )}
      {appMode === 'light' && (
        <MoonStars
          size={24}
          weight="fill"
          className="cursor-pointer text-blue-950"
          onClick={() => {
            document.documentElement.classList.add('dark')
            setAppMode('dark')
          }}
        />
      )}
    </div>
  )
}
