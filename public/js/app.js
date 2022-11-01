

fetch('http://localhost:3000/weather?lat=144.34&lon=110.99').then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                console.log(data.error)
            }else{
                console.log(data.forecast)

            }
        })
})