import axios from "axios";
let authUrl ='https://route-movies-api.vercel.app'
export async function getLoginData(values){
return await axios.post(`${authUrl}/signin`,values)
}
export async function getRegisterData(values){
    return await axios.post(`${authUrl}/signup`, values)
    }
export async function getHomeGames(){
    const options = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
        params: {'sort-by': 'popularity'},
        headers: {
          'X-RapidAPI-Key': '40980e0b03mshe779980ce6698bdp120974jsne85d23b457d4',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
      };
      
   return  await axios.request(options)}
   export async function getAllGames(){
    const options = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
        headers: {
          'X-RapidAPI-Key': '40980e0b03mshe779980ce6698bdp120974jsne85d23b457d4',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
      };
      
   return  await axios.request(options)}
export async function getSpecificGame(id){
    const options = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
        params: {id: `${id}`},
        headers: {
          'X-RapidAPI-Key': '40980e0b03mshe779980ce6698bdp120974jsne85d23b457d4',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
      };
      return await axios.request(options)
      
}
export async function getByCategory(type){
  const options = {
    method: 'GET',
    url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
    params: {category: `${type}`},
    headers: {
      'X-RapidAPI-Key': '40980e0b03mshe779980ce6698bdp120974jsne85d23b457d4',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  }; 
  return await axios.request(options)
}
export async function getByPlatform(type){
  const options = {
    method: 'GET',
    url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
    params: {platform: `${type}`},
    headers: {
      'X-RapidAPI-Key': '40980e0b03mshe779980ce6698bdp120974jsne85d23b457d4',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };
  return await axios.request(options)
}
export async function sortGames(type){
  const options = {
    method: 'GET',
    url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
    params: {'sort-by':`${type}` },
    headers: {
      'X-RapidAPI-Key': '40980e0b03mshe779980ce6698bdp120974jsne85d23b457d4',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };
  
  return await axios.request(options)
}