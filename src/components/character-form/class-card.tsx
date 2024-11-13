import { Class } from '@/types/character.types'
import React from 'react'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hover-card';

interface ClassCardProps {
  classe: Class;
  onClick: (skillsId: string[]) => void;
}

export default function ClassCard({classe, onClick}: ClassCardProps) {

  return (
    <div
      className='px-8 py-4 flex flex-col items-center justify-center bg-black/50 rounded-lg transition-all hover:bg-black/60 hover:scale-105 cursor-pointer'
      onClick={() => onClick(classe.skillsId)}
    >
      <h2 className='text-xl text-center text-white  mb-2'>
        {classe.name}
      </h2>
      <p className='text-sm text-center text-white mb-4'>
        {classe.description}
      </p>
      {classe.skillsDescription.map((skill, index) => (
        <HoverCard
          key={index}
        >
          <HoverCardTrigger asChild>
            <div
              key={index}
              className={`flex items-center justify-center gap-2 text-white ${index === 0 ? 'bg-orange-500' : 'bg-pink-500'} px-2 py-1 rounded-full mb-4`}
            >
              <span className='text-sm'>
                {skill.name}
              </span>
            </div>
          </HoverCardTrigger>
          <HoverCardContent
            className={`border-none ${index === 0 ? 'bg-orange-500' : 'bg-pink-500'}`}
          >
            <p className='text-white'>
              {skill.description}
            </p>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  )
}
