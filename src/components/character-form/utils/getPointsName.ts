export function getPointsName(key: string) {
  switch (key) {
    case 'strength':
      return 'Força';
    case 'dexterity':
      return 'Destreza';
    case 'constitution':
      return 'Constituição';
    case 'intelligence':
      return 'Inteligência';
    case 'wisdom':
      return 'Sabedoria';
    default:
      return '';
  }
}