import React from 'react'
import { useApi } from './useApi'

const PokemonType = ({ type }) => {
  const { data, error, isLoading } = useApi(type.url)

  if (isLoading || error || !data) {
    return <div>{type.name}</div>
  }

  const icon = data.sprites['generation-viii']['sword-shield'].name_icon

  return (
    <div>
      <img src={icon} alt={`${type.name} type`} />
    </div>
  )
}

export default PokemonType
