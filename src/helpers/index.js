import React, { useEffect, useState, useRef } from "react"

export function useCursorHover(className) {
  const eleRef = useRef(null)
  const [hover, setHover] = useState(false)
  useEffect(() => {
    const cursor = document.querySelector("#cursor")
    const addClass = () => {
      setHover(true)
      cursor.classList.add(className)
    }
    const removeClass = () => {
      setHover(false)
      cursor.classList.remove(className)
    }
    eleRef.current.addEventListener("mouseover", addClass)
    eleRef.current.addEventListener("mouseleave", removeClass)
    // ele.classList.add(className)
    return () => {
      eleRef.current.removeEventListener("mouseover", addClass)
      eleRef.current.removeEventListener("mouseleave", removeClass)
    }
  }, [])
  return [eleRef, hover]
}


export function useScroll(trigger = 0.8) {
  const ref = useRef()
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      // console.log(
      //   "YO",
      //   ref.current.getBoundingClientRect().top,
      //   window.innerHeight
      // )
      //If element is visible removeEventListener
      if (
        ref.current.getBoundingClientRect().top <
        window.innerHeight * trigger
      ) {
        setVisible(true)
        window.removeEventListener("scroll", handleScroll, { passive: true })
      }
    }
    document.querySelector('#ScrollContent').addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      document.querySelector('#ScrollContent').removeEventListener("scroll", handleScroll, { passive: true })
    }
  }, [])
  useEffect(() => {
    if (
      ref.current.getBoundingClientRect().top <
      window.innerHeight * trigger
    ) {
      setVisible(true)
    }
  }, [])
  return [ref, visible]
}
export function useScroll1(trigger = 0.8) {
  const ref = useRef()
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      console.log(
        "YO",
        ref.current.getBoundingClientRect().top,
        window.innerHeight
      )
      //If element is visible removeEventListener
      if (
        ref.current.getBoundingClientRect().top <
        window.innerHeight * trigger
      ) {
        setVisible(true)
        window.removeEventListener("scroll", handleScroll, { passive: true })
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll, { passive: true })
    }
  }, [])
  useEffect(() => {
    if (
      ref.current.getBoundingClientRect().top <
      window.innerHeight * trigger
    ) {
      setVisible(true)
    }
  }, [])
  return [ref, visible]
}