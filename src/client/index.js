import { handleSubmit } from './js/formHandler'
import { checkURL } from './js/checkURL'
import './styles/resets.scss'
import './styles/base.scss'
import './styles/form.scss'
import './styles/footer.scss'
import './styles/header.scss'
import './styles/messages.scss'

window.addEventListener('DOMContentLoaded', () => {
    const btnSubmit = document.getElementById('btn-submit')
    const errorBar = document.querySelector('.errors')

    btnSubmit.addEventListener('click', (e) => {
        e.preventDefault()
        //url validation
        const userURL = document.getElementById('article-url').value
        if (checkURL(userURL)) {
            console.log('url validated fetching in process for  ' + userURL)
            document.querySelector('.loading').style.display = 'block'
            handleSubmit(userURL)
            errorBar.style.display = 'none'
        } else {
            errorBar.innerHTML = '❌ Please, Enter a valid URL'
            errorBar.style.display = 'block'
            const results = document.querySelectorAll('.result')
            results.forEach((result) => {
                result.innerHTML = ''
            })
        }
    })
})
