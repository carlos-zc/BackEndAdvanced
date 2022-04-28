const express = require('express')

const app = express()
const port = 4000

app.get('/', (req,res) => {
    return res.json({
        nombre: 'Carlos',
        correo: 'carloszapatac17@gmail.com'
    })
})

app.listen(port,()=>{
    console.log("Escuchando en: http://localhost:"+port)
})