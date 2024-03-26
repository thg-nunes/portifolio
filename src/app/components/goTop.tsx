'use client'
import { BiArrowToTop } from 'react-icons/bi'
import { animateScroll } from 'react-scroll'

export const GoTop = (): JSX.Element => {
  return (
    <button
      onClick={() => {
        animateScroll.scrollToTop()
        history.pushState(null, '', '/')
      }}
      className="fixed bottom-10 right-5 rounded-full bg-green-550 p-2 duration-200 hover:scale-110"
    >
      <BiArrowToTop size={24} />
    </button>
  )
}
