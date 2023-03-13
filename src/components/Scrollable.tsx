import { useState, useEffect, useRef, FC } from "react"
import React, { Component, PropsWithChildren } from "react"

interface items {
    _class: any
}

export const Scrollable: FC<PropsWithChildren<items>> = (props) => {
    const ref = useRef<HTMLInputElement>(null)
    
    useEffect(() => {
        const el = ref.current
        if (el) {
            const onWheel = (e: { preventDefault: () => void; deltaY: number }): void => {
                e.preventDefault()
                el.scrollTo({
                    left: el.scrollLeft + e.deltaY * 2,
                    behavior: 'smooth'
                })
            }

            el.addEventListener('wheel', onWheel)

            return () => el.removeEventListener('wheel', onWheel)
        }
        
    }, [])

   

    return (
        <div 
        ref={ref}
        className={props._class}
        >
           { props.children }
        </div>
    )
}