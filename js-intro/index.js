// const minAgeDrinking = parseInt(
//   prompt("Let me know your age to check if you can legally drink alcohol")
// );

// if (minAgeDrinking < 18) {
//   console.log("No puedes beber alcohol!");
// } else if (minAgeDrinking >= 70) {
//   console.log("Puedes beber alcohol pero no te pases!");
// } else {
//   console.log("Puede beber sin problemas.");
// }

const askMembersWuTang = prompt(
  "Let me know you favourite member of the Wu Tang Clan and I'll tell you theit neighborhood"
);

let nghoodWuTangMember = "";

switch (askMembersWuTang) {
  case "RZA":
  case "Raekwon":
  case "GZA":
  case "U-God":
  case "Masta Killa":
    nghoodWuTangMember = "Brooklyn";
    break;
  case "Ol' Dirty Bastard":
    nghoodWuTangMember = "Fort Greene";
    break;
  case "Method Man":
  case "Ghostface Killah":
  case "Inspectah Deck":
  case "Cappadonna":
    nghoodWuTangMember = "Staten Island";
    break;
  default:
    nghoodWuTangMember = "New York New York";
    break;
}

console.log(`${askMembersWuTang} is from ${nghoodWuTangMember}`);
