const buscar = document.getElementById('button');
const msgErro = document.getElementById('msgErro');

buscar.addEventListener('click', (e) => {
  e.preventDefault();
  try{
    getWeather();   
  }catch(erro){
    msgErro.innerHTML = erro.message;
  }
})

function getWeather(){
  const weatherData = document.getElementById('weatherInfo');
  const city = document.getElementById('cidade').value;
  const apiKey = '3c5425c41e536cbdbabb422296ba0695'
  
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then((resposta)=>{
      return resposta.json();
      })
    .then((data)=>{
      weatherData.innerHTML = `
          <h2>${data.name}</h2>
          <p>Temperatura: ${data.main.temp}°C</p>
          <p>Tempo: ${data.weather[0].description}</p>
        `;
    })
    .catch((erro)=>{
      weatherInfo.innerHTML = '<p>Por favor, verifique as informações da cidade.</p>'
    })

}








