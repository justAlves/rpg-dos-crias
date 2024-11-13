import { CharacterForm } from '@/types/character.types';
import React, { useState } from 'react'
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { toast } from 'sonner';

interface StepFiveProps {
  setStep: (step: number) => void;
  setForm: (form: CharacterForm) => void;
  character: CharacterForm;
}

export default function StepFive({ setStep, setForm, character }: StepFiveProps) {

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [description, setDescription] = useState("");

  const handleContinue = () => {
    if(!name || !age || !description) {
      toast.error('Preencha todas as informações');
      return;
    }

    setForm({
      ...character,
      basicInfo: {
        name,
        age,
        description
      }
    });

    setStep(6);
  }

  return (
    <div
      className='flex flex-col gap-4 w-1/2'
    >
      <span>Para finalizar, alguma informações básicas</span>
      <div>
        <label htmlFor="name">Nome</label>
        <Input 
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="age">Idade</label>
        <Input 
          id="age" 
          type="number"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="description">Descrição</label>
        <Textarea 
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div
        className='flex justify-start items-center'
      >
        <Button
          onClick={handleContinue}
          className='bg-orange-500 hover:bg-orange-500/50 text-white'
        >
          Continuar
        </Button>
      </div>
    </div>
  )
}
