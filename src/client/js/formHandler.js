const fetch = require('node-fetch')

export const handleSubmit = (url) => {
    var h3 = document.querySelector('h3')
    var text = document.querySelector('#text')
    var agreement = document.querySelector('#agreement')
    var subjectivity = document.querySelector('#subjectivity')
    var confidence = document.querySelector('#confidence')
    var irony = document.querySelector('#irony')
    var scoreTag = document.querySelector('#score_tag')
    var errorMessage = document.querySelector('#errMsg')
    try {
        fetch('http://localhost:8000/add-url', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url })
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.code == 212) {
                    h3.innerHTML = ''
                    text.innerHTML = ''
                    agreement.innerHTML = ''
                    subjectivity.innerHTML = ''
                    confidence.innerHTML = ''
                    irony.innerHTML = ''
                    scoreTag.innerHTML = ''
                    errorMessage.innerHTML = ' Error : ' + data.errMsg
                    document.querySelector('.loading').style.display = 'none'
                    document.querySelector('.failedToFetch').innerHTML = ''
                } else {
                    h3.innerHTML = 'Form Results : '
                    text.innerHTML = 'Text : ' + data.text
                    agreement.innerHTML = 'Agreement : ' + data.agreement
                    subjectivity.innerHTML = 'Subjectivity : ' + data.subjectivity
                    confidence.innerHTML = 'Confidence : ' + data.confidence
                    irony.innerHTML = 'Irony : ' + data.irony
                    scoreTag.innerHTML = 'Score_tag : ' + data.score_tag
                    errorMessage.innerHTML = ' '
                    document.querySelector('.loading').style.display = 'none'
                    document.querySelector('.failedToFetch').innerHTML = ''
                }
            })
            .catch((err) => {
                console.log(err)
                var results = document.querySelectorAll('.result')
                results.forEach((result) => {
                    result.innerHTML = ''
                    document.querySelector('.loading').style.display = 'none'
                    document.querySelector(
                        '.failedToFetch'
                    ).innerHTML = `<h4> ${err}. Please , Make Sure the server Is Running on <span style="color:red; text-decoration:underline;">PORT 8000</span> </h4>`
                })
            })

        return true
    } catch (err) {
        console.log(err)
        return false
    }
}
