export function healthSorting (characters) {
   let outcome = characters.sort((x, y) => y.health - x.health);
   return outcome;
}