const app = require('./index')

const PORT = 8000
app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}! http://localhost:${PORT}`)
})
