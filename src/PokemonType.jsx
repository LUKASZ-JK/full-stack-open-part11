import React from 'react'

const getTypeIconUrl = typeUrl => {
  const typeId = typeUrl.split('/').filter(Boolean).pop()

  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/${typeId}.png`
}

const PokemonType = ({ type }) => {
  const icon = getTypeIconUrl(type.url)

  return (
    <div>
      <img src={icon} alt={`${type.name} type`} />
    </div>
  )
}

export default PokemonType
