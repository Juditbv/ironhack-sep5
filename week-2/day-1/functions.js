function myBiography(
  name,
  age,
  birthPlace,
  currentLocation,
  state,
  computer,
  pet,
  favoriteColor,
  hobby,
  currentlyReading
) {
  return `Hola, me llamo ${name}, tengo ${age} años y nací en ${birthPlace}. Actualmente vivo en ${currentLocation}, un pequeño pueblo en la comarca de la ${state}. Trabajo con un ordernador ${computer}, tengo un ${pet} y mi color favorito es el ${favoriteColor}. Además me encanta ${hobby} y actualmente estoy con ${currentlyReading}`;
}

console.log(
  myBiography(
    "Judit",
    28,
    "Barcelona",
    "Sant Martí Sesgueioles",
    "Anoia",
    "Mackbook Pro",
    "perro",
    "azul",
    "leer",
    "Un mundo feliz, de Aldous Huxley"
  )
);
