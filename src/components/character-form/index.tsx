'use client'

import { type CharacterForm } from "@/types/character.types"
import { useState } from "react"
import StepOne from "./step-one"

export default function CharacterForm() {
  const [step, setStep] = useState(1)
  const [character, setCharacter] = useState<CharacterForm>({
      race: "",
      class: "",
      skills: [],
      attributes: {
        stealth: 0,
        fighting: 0,
        charisma: 0,
        defense: 0,
        poisonResistance: 0,
        perception: 0,
        survival: 0,
        fireResistance: 0,
        intimidation: 0,
        atlhetics: 0,
        magic: 0,
        healing: 0,
        alchemy: 0,
        lockpicking: 0,
        archery: 0,
        animalHandling: 0,
        deception: 0,
        insight: 0,
        investigation: 0,
        sleightOfHand: 0,
        endurance: 0,
        craftsmanship: 0,
        nature: 0,
        history: 0,
      },
      characterPoints: {
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
      },
      basicInfo: {
        name: "",
        age: 0,
        description: "",
      }  
  })

  const getTitle = () => {
    switch (step) {
      case 1:
        return 'Para começar a criar seu personagem, selecione a sua raça:'
      case 2:
        return 'Agora, selecione a sua classe:'
      case 3:
        return 'Pontos do personagem'
      case 4:
        return 'Informações básicas'
      case 5:
        return 'Resumo'
    }
  }
  
  return (
    <div>
      <h2>{getTitle()}</h2>
      {step === 1 && <StepOne character={character} setForm={setCharacter} setStep={setStep}/>}
    </div>
  )
}
