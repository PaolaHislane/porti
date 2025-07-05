/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')  

const sendEmail = (e) => {
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_0gv5nbe', 'template_1ydbpmc', '#contact-form', '8TmqdN_C6lxpRzOfq')
    .then(() => {
        contactMessage.textContent = 'Mensagem enviada com sucesso ✅'

        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)

        contactForm.reset()
    }, () => {
        contactMessage.textContent = 'Mensagem não enviada, erro no serviço ❌'
    })
}

contactForm.addEventListener('submit', sendEmail)