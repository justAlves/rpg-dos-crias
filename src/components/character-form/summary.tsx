import { CharacterForm } from '@/types/character.types';
import React from 'react'
import { getAttributeName } from './utils/getAttributeName';
import { getPointsName } from './utils/getPointsName';
import { Button } from '../ui/button';

interface SummaryProps {
  character: CharacterForm;
  handleFinish: () => void;
}

export default function Summary({ character, handleFinish }: SummaryProps) {
  const selectedAttributes = Object.entries(character.attributes).filter(([, value]) => value > 0);

  return (
    <div
      className='flex mt-8'
    >
      <div className='flex flex-col gap-4'>
        <h1>Resumo do seu personagem</h1>
        <p><strong>Nome:</strong> {character.basicInfo.name}</p>
        <p><strong>Idade:</strong> {character.basicInfo.age}</p>
        <p><strong>Descrição:</strong> {character.basicInfo.description}</p>
        <p><strong>Raça:</strong> {character.race}</p>
        <p><strong>Classe:</strong> {character.class}</p>
        <p><strong>Atributos:</strong> {selectedAttributes.map(([key,]) => `${getAttributeName(key as keyof CharacterForm["attributes"])}`).join(', ')}</p>
        <p><strong>Pontos de personagem:</strong></p>
        <ul>
          {Object.entries(character.characterPoints).map(([key, value]) => (
            <li key={key}>{getPointsName(key as keyof CharacterForm["characterPoints"])}: {value}</li>
          ))}
        </ul>
        <Button
          className='bg-orange-500 text-white hover:bg-orange-500/50'
          onClick={handleFinish}
        >
          Finalizar
        </Button>
      </div>
    </div>
  )
}
