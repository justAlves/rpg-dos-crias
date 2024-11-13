import { Character } from "@/types/character.types";

export function getAttributeName(attribute: keyof Character['attributes']){
  switch (attribute) {
    case 'stealth':
      return 'Furtividade'
    case 'fighting':
      return 'Briga'
    case 'charisma':
      return 'Carisma'
    case 'defense':
      return 'Defesa'
    case 'poisonResistance':
      return 'Resistência a veneno'
    case 'perception':
      return 'Percepção'
    case 'survival':
      return 'Sobrevivência'
    case 'fireResistance':
      return 'Resistência a fogo'
    case 'intimidation':
      return 'Intimidação'
    case 'atlhetics':
      return 'Atletismo'
    case 'magic':
      return 'Magia'
    case 'healing':
      return 'Cura'
    case 'alchemy':
      return 'Alquimia'
    case 'lockpicking':
      return 'Lockpicking'
    case 'archery':
      return 'Arquearia'
    case 'animalHandling':
      return 'Trato com animais'
    case 'deception':
      return 'Enganação'
    case 'insight':
      return 'Intuição'
    case 'investigation':
      return 'Investigação'
    case 'sleightOfHand':
      return 'Destreza manual'
    case 'endurance':
      return 'Resistência'
    case 'craftsmanship':
      return 'Artesanato'
    case 'nature':
      return 'Natureza'
    case 'history':
      return 'História'
    default:
      return ''
  }
}