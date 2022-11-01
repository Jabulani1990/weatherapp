const axios = require('axios')

const forecast = (lat, lon) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat='+ lat + '& lon='+ lon + '&appid=a84e241542926463c3d665e97dc941d1'
    axios.get(url)
    .then(function (response) {
        //console.log(JSON.parse(JSON.stringify(response.data)))
    })
    .catch((error)=> {

        if(error)
        {
              // console.log(error)
        }
    })
    .finally(function () {
         //  always executed
    });
   
}

 