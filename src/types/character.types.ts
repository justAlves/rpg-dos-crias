export interface CharacterForm {
  race: string;
  class: string;
  skills: string[];
  attributes: {
    stealth: number;
    fighting: number;
    charisma: number;
    defense: number;
    poisonResistance: number;
    perception: number;
    survival: number;
    fireResistance: number;
    intimidation: number;
    atlhetics: number;
    magic: number;              // Perícia em magia, controle de feitiços e conjuração
    healing: number;            // Habilidade de curar ferimentos e tratar doenças
    alchemy: number;            // Conhecimento em misturar poções e substâncias alquímicas
    lockpicking: number;        // Habilidade em destrancar fechaduras e mecanismos
    archery: number;            // Proficiência em arco e flecha
    animalHandling: number;      // Habilidade de domar, treinar e cuidar de animais
    deception: number;          // Capacidade de enganar e disfarçar intenções
    insight: number;            // Capacidade de ler intenções e emoções dos outros
    investigation: number;       // Habilidade para investigar e procurar pistas
    sleightOfHand: number;       // Destreza com as mãos, útil para roubo e truques
    endurance: number;          // Capacidade de suportar dor, exaustão e condições adversas
    craftsmanship: number;       // Habilidade em criar e consertar itens e ferramentas
    nature: number;             // Conhecimento sobre plantas, animais e ambientes selvagens
    history: number;            // Conhecimento de história e lendas antigas
  };
  characterPoints: {
    strength: number; // Força física, poder e resistência
    dexterity: number; // Agilidade, destreza e precisão
    constitution: number; // Resistência física, saúde e vitalidade
    intelligence: number; // Capacidade de aprendizado, raciocínio e memória
    wisdom: number; // Percepção, intuição e força de vontade
  };
  basicInfo: {
    name: string;
    age: number
    description: string;
  };
  life: number;
  mana: number;
}

interface CharacterItem {
  name: string;
  description: string;
  quantity: number;
}

interface Weapon extends CharacterItem {
  diceQuantity: number;
  diceType: number;
}

export interface Character extends CharacterForm {
  id: string;
  bag: CharacterItem[];
  weapons: Weapon[];
}

interface Perk {
  description: string;
  name: string;
}

export interface Race {
  id: string;
  description: string;
  name: string;
  perks: Perk[];
  perksToChoose: number;
  attributes: CharacterForm['attributes'];
}

interface SkillsDescription {
  name: string;
  description: string;
}

export interface Class {
  id: string;
  description: string;
  name: string;
  skillsDescription: SkillsDescription[];
  skillsId: string[];
}
