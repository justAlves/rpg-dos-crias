import { db } from '@/services/firebase';
import { CharacterForm, Class } from '@/types/character.types';
import { get, ref } from '@firebase/database';
import React, { useEffect, useState } from 'react'
import ClassCard from './class-card';

interface StepTwoProps {
  setStep: (step: number) => void;
  setForm: (form: CharacterForm) => void;
  character: CharacterForm;
}

export default function StepTwo({ setStep, setForm, character }: StepTwoProps) {
  const [classes, setClasses] = useState<Class[]>([]);

  async function fetchRaces() {
    const dbRef = ref(db, 'classes/');
    const snapshot = await get(dbRef);

    if (snapshot.exists()) {
      const data = Object.entries(snapshot.val()).map(([key, value]) => ({
        id: key,
        ...(value as object)
      }));

      setClasses(data as Class[]);
      console.log(data);
    }
  }

  useEffect(() => {
    fetchRaces();
  }, [])
  //@follow-up
  return (
    <div
      className='p-4 grid grid-cols-2 gap-4 md:grid-cols-4'
    >
      {classes && classes.length > 0 && classes?.map((classe, index) => (
        <ClassCard
          key={index}
          classe={classe}
          onClick={(skillsId) => {
            setForm({
              ...character,
              class: classe.name,
              skills: skillsId
            })
            setStep(3)
          }}
        />
      ))}
    </div>
  )
}
