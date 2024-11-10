import { Race } from '@/types/character.types'
import React from 'react'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hover-card';

interface RaceCardProps {
  race: Race;
  onClick: (raceId: string) => void;
}

export default function RaceCard({race, onClick}: RaceCardProps) {

  const getEmojiFromRaceName = (name: string) => {
    switch (name) {
      case 'Humano':
        return '🧑'
      case 'Elfo':
        return '🧝‍♂️'
      case 'Anão':
        return '🧔'
      case 'Draconato':
        return '🐲'
      case 'Golem da Natureza':
        return '🌳'
      default:
        return ''
    }
  }

  return (
    <div
      className='px-8 py-4 flex flex-col items-center justify-center bg-black/50 rounded-lg transition-all hover:bg-black/60 hover:scale-105 cursor-pointer'
      onClick={() => onClick(race.name)}
    >
      <span className='text-3xl'>
        {getEmojiFromRaceName(race.name)}
      </span>
      <h2 className='text-xl text-center text-white  mb-2'>
        {race.name}
      </h2>
      <p className='text-sm text-center text-white mb-4'>
        {race.description}
      </p>
      {race.perks.map((perk, index) => (
        <HoverCard
          key={index}
        >
          <HoverCardTrigger asChild>
            <div
              key={index}
              className={`flex items-center justify-center gap-2 text-white ${index === 0 ? 'bg-orange-500' : 'bg-pink-500'} px-2 py-1 rounded-full mb-4`}
            >
              <span className='text-sm'>
                {perk.name}
              </span>
            </div>
          </HoverCardTrigger>
          <HoverCardContent
            className={`border-none ${index === 0 ? 'bg-orange-500' : 'bg-pink-500'}`}
          >
            <p className='text-white'>
              {perk.description}
            </p>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  )
}
