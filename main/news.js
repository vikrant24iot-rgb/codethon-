fetch('https://api.thenewsapi.com/v1/news/all?api_token=SUzuxN8lbftXuEjjFsEj5Vhec46MjOhjeTYREUNA&search=cybersecurity,cybercrime&language=en')
  .then(res => res.json())
  .then(data => {
    console.log(data); 
  })
  .catch(err => console.error(err))