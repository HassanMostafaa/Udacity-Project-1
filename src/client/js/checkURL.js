function checkURL(value) {
    try {
        var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi
        var regexp = new RegExp(expression)
        return regexp.test(value)
    } catch (err) {
        console.log(err)
        return false
    }
}
export { checkURL }
