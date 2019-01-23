export const fetchTeam = url => {
  fetch(url)
  .then(response => response.json())
  .then(team => team)
  .catch(err => {
    throw new Error("Failed to load team");
  });
}