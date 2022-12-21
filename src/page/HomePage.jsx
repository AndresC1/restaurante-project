import React from 'react'
import useContextDataApp from '../hooks/useContextData'

export default function HomePage() {
  const contexto = useContextDataApp()
    return (
    <div>{contexto.hola}</div>
  )
}
