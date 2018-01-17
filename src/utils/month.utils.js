const numberToMonth = {
  '0': 'Janvier',
  '1': 'Février',
  '2': 'Mars',
  '3': 'Avril',
  '4': 'Mai',
  '5': 'Juin',
  '6': 'Juillet',
  '7': 'Aout',
  '8': 'Septembre',
  '9': 'Octobre',
  '10': 'Novembre',
  '11': 'Décembre',
};

const monthToString = monthHighlighted => numberToMonth[monthHighlighted];

export default monthToString;
