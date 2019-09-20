const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

//define paths for Express config
const pubDirPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname, '../templets/views')
const partialsPath = path.join(__dirname, '../templets/partials')

// to set the handlebar view engine and view location from handlebar module
app.set('view engine','hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//use the static content from the path
app.use(express.static(pubDirPath))

//route to rendered the view templet from views directory
app.get('', (req, res) => {
    res.render('index',{
        title: 'Weather',
        name: 'Sekhar'
    })
})

app.get('/about', (req, res) => {
    res.render('about',{
        title: 'About Us',
        name: 'Sekhar'
    })
})

app.get('/help', (req, res) => {
    res.render('help',{
        title: 'Help',
        name: 'Sekhar'
    })
})

app.get('/help/*', (req, res) => {
    res.render('404',{
        title: 'Help article not found',
        name: 'Sekhar'
    })
})

app.get('*', (req, res) => {
    res.render('404',{
        title: 'Page Not Found',
        name: 'Sekhar'
    })
})
// app.get('',(req, res) =>{
//     res.send('<h1>Hello Express</h1>')
// })

// app.get('/help', (req, res) => {
//     res.send([{
//         name:'Sekhar',
//         age:48
//     },{
//         name:'RAM',
//         age:12
//     }])
// })

// app.get('/about', (req, res) => {
//     res.send('<center><h2><u>About Page</u></h2></center>')
// })

app.get('/weather', (req, res) => {
    res.send({
        forcast:'Cloudy and may rain tonight',
        location:'Hyderabad'
    })
})
// start server at port 3000 only one time 
app.listen(3000, () => {
    console.log('App server is up and running on port 3000')
})