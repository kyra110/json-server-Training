async function getUtilisateurs() {
  const first = await fetch("http://localhost:3000/utilisateurs").then((response)=>{
    return response.json()
  })
  console.log(first);
}
getUtilisateurs()