'use client'

import { type CharacterForm } from "@/types/character.types"
import { useState } from "react"
import StepOne from "./step-one"
import StepTwo from "./step-two"
import StepThree from "./step-three"
import StepFour from "./step-four"
import StepFive from "./step-five"
import Summary from "./summary"
import { ref, push as create } from "@firebase/database"
import { db } from "@/services/firebase"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { useUser } from "@clerk/nextjs"

export default function CharacterForm() {
  const { push } = useRouter()
  const { user } = useUser()

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
      },
      life: 20,
      mana: 20,
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
        return 'Pericias'
      case 5:
        return 'Informações básicas'
      default:
        return 'Resumo'
    }
  }

  const handleCreateCharacter = async () => {
    const dbRef = ref(db, 'characters/');
    await create(dbRef, {
      ...character,
      userId: user?.id
    });
    
    toast.success('Personagem criado com sucesso!')
    push('/characters')
  }
  
  return (
    <div>
      <h2>{getTitle()}</h2>
      {step === 1 && <StepOne character={character} setForm={setCharacter} setStep={setStep}/>}
      {step === 2 && <StepTwo character={character} setForm={setCharacter} setStep={setStep}/>}
      {step === 3 && <StepThree character={character} setForm={setCharacter} setStep={setStep}/>}
      {step === 4 && <StepFour character={character} setForm={setCharacter} setStep={setStep}/>}
      {step === 5 && <StepFive character={character} setForm={setCharacter} setStep={setStep}/>}
      {step === 6 && <Summary character={character} handleFinish={handleCreateCharacter}/>}
    </div>
  )
}
