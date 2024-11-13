import { db } from '@/services/firebase';
import { CharacterForm, Race } from '@/types/character.types';
import { get, ref } from '@firebase/database';
import React, { useEffect, useState } from 'react'
import RaceCard from './race-card';

interface StepOneProps {
  setStep: (step: number) => void;
  setForm: (form: CharacterForm) => void;
  character: CharacterForm;
}

export default function StepOne({ setStep, setForm, character }: StepOneProps) {
  const [races, setRaces] = useState<Race[]>([]);

  async function fetchRaces() {
    const dbRef = ref(db, 'races/');
    const snapshot = await get(dbRef);

    if (snapshot.exists()) {
      const data = Object.entries(snapshot.val()).map(([key, value]) => ({
        id: key,
        ...(value as object)
      }));

      setRaces(data as Race[]);
      console.log(data);
    }
  }

  useEffect(() => {
    fetchRaces();
  }, [])
  return (
    <div
      className='p-4 grid grid-cols-2 gap-4 md:grid-cols-4'
    >
      {races && races.length > 0 && races?.map((race, index) => (
        <RaceCard
          key={index}
          race={race}
          onClick={(raceId) => {
            setForm({
              ...character,
              race: raceId,
              attributes: {
                ...character.attributes,
                ...race.attributes
              }
            })
            setStep(2)
          }}
        />
      ))}
    </div>
  )
}
