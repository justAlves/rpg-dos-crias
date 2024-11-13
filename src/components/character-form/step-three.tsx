import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Minus, Plus } from 'lucide-react'
import { CharacterForm } from '@/types/character.types';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hover-card';
import { toast } from 'sonner';

interface StepThreeProps {
  setStep: (step: number) => void;
  setForm: (form: CharacterForm) => void;
  character: CharacterForm;
}

export default function StepThree({ setStep, setForm, character }: StepThreeProps) {
  const [points, setPoints] = useState(5)
  const [characterPoints, setCharacterPoints] = useState({
    strength: 1,
    dexterity: 1,
    constitution: 1,
    intelligence: 1,
    wisdom: 1,
  })

  const handleContinue = () => {
    if(points > 0) {
      toast.info('Você ainda tem pontos para distribuir')
      return
    }

    setForm({
      ...character,
      characterPoints: characterPoints
    })

    setStep(4)
  }

  const handlePoints = (subOrAdd: 'sub' | 'add', attribute: 'strength' | 'dexterity' | 'constitution' | 'intelligence' | 'wisdom') => {
    if (subOrAdd === 'sub') {
      if(characterPoints[attribute] === 1) return
      if (points === 5) return
      setPoints(points + 1)
      setCharacterPoints({
        ...characterPoints,
        [attribute]: characterPoints[attribute] - 1
      })
    } else {
      if (characterPoints[attribute] === 5) return
      setPoints(points - 1)
      setCharacterPoints({
        ...characterPoints,
        [attribute]: characterPoints[attribute] + 1
      })
    }
  }

  return (
    <div className='flex flex-col mt-8 w-80'>
      <span>Pontos disponíveis: {points}</span>
      <div
        className='flex items-center gap-4 mt-4 justify-between'
      >
        <Button onClick={() => handlePoints('add', 'strength')}><Plus/></Button>
        <span>Força: {characterPoints.strength}</span>
        <Button onClick={() => handlePoints('sub', 'strength')}><Minus/></Button>
        <HoverCard> 
          <HoverCardTrigger>
            <div className='size-8 flex justify-center items-center bg-gray-400 rounded-full text-black'>
              <span>?</span>
            </div>
          </HoverCardTrigger>
          <HoverCardContent>
            <p className='text-white'>A força é a capacidade do personagem de causar dano físico e carregar peso.</p>
          </HoverCardContent>
        </HoverCard>
      </div>
      <div
        className='flex items-center gap-4 mt-4 justify-between'
      >
        <Button onClick={() => handlePoints('add', 'dexterity')}><Plus/></Button>
        <span>Destreza: {characterPoints.dexterity}</span>
        <Button onClick={() => handlePoints('sub', 'dexterity')}><Minus/></Button>
        <HoverCard>
          <HoverCardTrigger>
            <div className='size-8 flex justify-center items-center bg-gray-400 rounded-full text-black'>
              <span>?</span>
            </div>
          </HoverCardTrigger>
          <HoverCardContent>
            <p className='text-white'>A destreza é a capacidade do personagem de se esquivar de ataques e realizar ações que requerem precisão.</p>
          </HoverCardContent>
        </HoverCard>
      </div>
      <div
        className='flex items-center gap-4 mt-4 justify-between'
      >
        <Button onClick={() => handlePoints('add', 'constitution')}><Plus/></Button>
        <span>Constituição: {characterPoints.constitution}</span>
        <Button onClick={() => handlePoints('sub', 'constitution')}><Minus/></Button>
        <HoverCard>
          <HoverCardTrigger>
            <div className='size-8 flex justify-center items-center bg-gray-400 rounded-full text-black'>
              <span>?</span>
            </div>
          </HoverCardTrigger>
          <HoverCardContent>
            <p className='text-white'>A constituição é a resistência física e a saúde do personagem.</p>
          </HoverCardContent>
        </HoverCard>
      </div>
      <div
        className='flex items-center gap-4 mt-4 justify-between'
      >
        <Button onClick={() => handlePoints('add', 'intelligence')}><Plus/></Button>
        <span>Inteligência: {characterPoints.intelligence}</span>
        <Button onClick={() => handlePoints('sub', 'intelligence')}><Minus/></Button>
        <HoverCard>
          <HoverCardTrigger>
            <div className='size-8 flex justify-center items-center bg-gray-400 rounded-full text-black'>
              <span>?</span>
            </div>
          </HoverCardTrigger>
          <HoverCardContent>
            <p className='text-white'>A inteligência é a capacidade do personagem de aprender e resolver problemas.</p>
          </HoverCardContent>
        </HoverCard>
      </div>
      <div
        className='flex items-center gap-4 mt-4 justify-between'
      >
        <Button onClick={() => handlePoints('add', 'wisdom')}><Plus/></Button>
        <span>Sabedoria: {characterPoints.wisdom}</span>
        <Button onClick={() => handlePoints('sub', 'wisdom')}><Minus/></Button>
        <HoverCard>
          <HoverCardTrigger>
            <div className='size-8 flex justify-center items-center bg-gray-400 rounded-full text-black'>
              <span>?</span>
            </div>
          </HoverCardTrigger>
          <HoverCardContent>
            <p className='text-white'>A sabedoria é a capacidade do personagem de perceber o ambiente e resistir a efeitos mentais.</p>
          </HoverCardContent>
        </HoverCard>
      </div>
      <Button className='mt-8 bg-orange-500 text-white hover:bg-orange-500/80' onClick={handleContinue}>Próximo</Button>
    </div>
  )
}
