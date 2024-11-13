import { Character, CharacterForm } from '@/types/character.types'
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner';
import { getAttributeName } from './utils/getAttributeName';
import { Select, SelectContent, SelectItem, SelectTrigger } from '../ui/select';
import { SelectValue } from '@radix-ui/react-select';
import { Button } from '../ui/button';

interface StepFourProps {
  setStep: (step: number) => void;
  setForm: (form: CharacterForm) => void;
  character: CharacterForm;
}

export default function StepFour({ setStep, setForm, character }: StepFourProps) {
  const [availablePoints, setAvailablePoints] = useState(character.race === "Humano" ? 25 : 15)
  const [attributes, setAttributes] = useState<Character["attributes"]>(character.attributes)

  const handleSetAttributes = (attribute: keyof Character["attributes"], value: string)  => {
    if (value === "nenhum") {
      setAttributes({
        ...attributes,
        [attribute]: 0
      })
      if(attributes[attribute] === 5) {
        setAvailablePoints(availablePoints + 5)
      }
      if(attributes[attribute] === 10) {
        setAvailablePoints(availablePoints + 10)
      }
      if(attributes[attribute] === 15) {
        setAvailablePoints(availablePoints + 15)
      }

      return
    }

    if (value === "treinado" && availablePoints < 5) {
      toast.error("Você não tem pontos suficientes para essa habilidade")
      return
    }
    if (value === "perito" && availablePoints < 10) {
      toast.error("Você não tem pontos suficientes para essa habilidade")
      return
    }
    if (value === "especialista" && availablePoints < 15) {
      toast.error("Você não tem pontos suficientes para essa habilidade")
      return
    }


    setAttributes({
      ...attributes,
      [attribute]: value === "treinado" ? 5 : value === "perito" ? 10 : 15
    })
    if(value === "treinado") {
      setAvailablePoints(availablePoints - 5)
    }
    if(value === "perito") {
      setAvailablePoints(availablePoints - 10)
    }
    if(value === "especialista") {
      setAvailablePoints(availablePoints - 15)
    }
  }

  const handleContinue = () => {
    if(availablePoints > 0) {
      toast.info('Você ainda tem pontos para distribuir')
      return
    }

    setForm({
      ...character,
      attributes: {
        ...character.attributes,
        ...attributes
      }
    })

    setStep(5)
  }

  useEffect(() => {
    console.log(character)
  }, [])

  return (
    <>    
      <span className='mt-8'>
        Pontos disponíveis: {availablePoints}
      </span>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
        {Object.keys(attributes).map((attribute) => (
          <div
            key={attribute}
            className='flex items-center gap-4 mt-4 justify-between'
          >
            <span>{getAttributeName(attribute as keyof Character['attributes'])}</span>
            <Select
              onValueChange={(value) => handleSetAttributes(attribute as keyof Character['attributes'], value)}
              defaultValue='nenhum'
            >
              <SelectTrigger>
                <SelectValue>
                  {attributes[attribute as keyof Character['attributes']] === 0 ? "Nenhum" : attributes[attribute as keyof Character['attributes']] === 5 ? "Treinado" : attributes[attribute as keyof Character['attributes']] === 10 ? "Perito" : "Especialista"}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem
                  value='nenhum'
                >
                  Nenhum
                </SelectItem>
                <SelectItem
                  value='treinado'
                >
                  Treinado
                </SelectItem>
                <SelectItem
                  value='perito'
                >
                  Perito
                </SelectItem>
                <SelectItem
                  value='especialista'
                >
                  Especialista
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        ))}
      </div>
      <Button
        className='mt-8 bg-orange-500 text-white hover:bg-orange-500/80'
        onClick={handleContinue}
      >
        Continuar
      </Button>
    </>
  )
}
