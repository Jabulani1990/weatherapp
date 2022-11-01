
const path = require('path')
const express = require('express')
const hbs = require('hbs')

const axios = require('axios')
//const forecast = require('./utils/forecast')
const app = express()

const publicDirectoryPath = path.join(__dirname, "../public")
const viewsPath = path.join(__dirname,"../templates/views")
const partialsPath =  path.join(__dirname,"../templates/partials")

//set up handle bar engine and location
app.set('view engine','hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//set up static path location
app.use(express.static(publicDirectoryPath))


// app.get('', (req, res)=>{
//         res.send("<h2>Weather</h2>")
// })

app.get('',(req, res)=>{
    res.render('index', {
        title:'Weather Web App',
        name:'Oyewale Abdulganiyu'
    })
})

app.get('/help',(req, res)=>{
    res.render('help',  {
        title:'Help'
    })
})

app.get('/about',(req, res)=>{
    res.render('about',  {
        title:'About'
    })
})

app.get('/weather', (req, res)=>{
    if(!req.query.lat && !req.query.lon)
    {  
        return res.send({
            error:'Address must be provided'
        })
    }

    
const url = 'https://api.openweathermap.org/data/2.5/weather?lat='+ req.query.lat +'&lon='+ req.query.lon +'&appid=a84e241542926463c3d665e97dc941d1'
    axios.get(url).then(function (response) {
       const weather = response.data.main
       res.send({
        forecast: weather
        })
       
    }).catch((error)=> {

        if(error)
        {
            res.send({ error:error })
        }
    });
    
    
})

app.get('/help/*', (req,res)=>{
    res.send('Help Articles Not Found')
})

app.get('*', (req,res)=>{
    res.send('404 Page Not Found')
})


app.listen(3000, ()=>{
    console.log("Server is up on port 3000")
})