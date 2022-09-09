const minAgeDrinking = parseInt(
  prompt("Let me know your age to check if you can legally drink alcohol")
);

if (minAgeDrinking < 18) {
  alert("No puedes beber alcohol!");
} else if (minAgeDrinking > 70) {
  alert("Puedes beber alcohol pero no te pases!");
} else {
  console.log("Puede beber sin problemas.");
}
