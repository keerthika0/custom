const app = require('express')()

app.get('/api/', (req, res) => {
    res.sendStatus(200)
})

app.listen(3000, () => {
    console.log('Server started')
})

app.use((req, res, next) => {
   console.log(`${req.method} ${req.originalUrl}`)
   next()
})

app.use((req, res, next) => {
   res.on("finish", () => {
       console.log(`${req.method} ${req.originalUrl} ${res.statusCode}`)
   })
   next()
})

