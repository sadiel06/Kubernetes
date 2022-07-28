const express = require('express')
const colors = require('colors')
const fun = require('./functions')
const app = express()


const arrElements=[4,2,3,1,5,6,7,8,10,9,11,12,15,14,13]


app.get('/binaria/:uid', (req, res) => {
    const wanted=req.params.uid
    const resul = fun.busquedaBinaria(arrElements,wanted)
    
    if(resul == -1)
    {
        res.send('<h1>Valor no encontrado</h1>')
    }
    
    res.send('<h1>valor encontrado</h1>')

});



app.get('/burbuja', (req,res)=>{
    let original= arrElements
    const wanted = req.params.uid
    const resul = fun.bubbleSort(arrElements)

    if(resul.pos ==-1)
    {
        res.send('<h1>Valor no encontrado</h1>')
    }

    res.send('<h1>valores ordenados: '+resul+'</h1>\n')
})


app.listen(3001,()=>{

    console.log('api runing ...'.green)
  
})