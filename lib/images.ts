// Professionele placeholder-fotografie (natuur, rust, verbinding).
// Bron: Unsplash. Vervang deze later door eigen beeldmateriaal.
const u = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  heroForest: u("photo-1470071459604-3b5ec3a7fe05", 1600), // mistig, rustig bos
  leaves: u("photo-1518495973542-4542c06a5843"), // zonlicht door bladeren
  trainingTeam: u("photo-1543269865-cbf427effbad"), // team in gesprek
  breathCalm: u("photo-1506126613408-eca07ce68773"), // rust / ademhaling
  miniRetreat: u("photo-1515377905703-c4788e51af15"), // thee, warme sfeer
  children: u("photo-1490750967868-88aa4486c946"), // speels, natuurlijk licht
  teamBreath: u("photo-1517971129774-8a2b38fa128e"), // rustige groep
  portrait: u("photo-1573496359142-b8d87734a5a2", 1200), // professioneel portret
  natureCalm: u("photo-1500530855697-b586d89ba3ee"), // rustig landschap
  path: u("photo-1441974231531-c6227db76b6e"), // bospad
};
