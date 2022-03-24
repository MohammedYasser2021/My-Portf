function scrollHeader() {
  let header = document.querySelector('header')
  if (this.scrollY > 50) {
    header.classList.add('scroll-header')
  } else {
    header.classList.remove('scroll-header')
  }
}

window.addEventListener('scroll', scrollHeader)

// Mixer Portfolio
let mixerPortfolio = mixitup('.work-container', {
  selectors: {
    target: '.mix',
  },
  animation: {
    duration: 400,
  },
})

let spans = document.querySelectorAll('.work-item')
spans[0].classList.add('active')
spans.forEach((ele) => {
  ele.addEventListener('click', function () {
    spans.forEach((el) => {
      el.classList.remove('active')
    })
    this.classList.add('active')
  })
})

function invokeEmail() {
  emailjs.init('iwzuRaiX5b-vZ7haJ')
}
invokeEmail()

function sendEmail() {
  emailjs
    .send('service_mn9quw6', 'template_9it1hcr', {
      from_name: document.querySelector('#name').value,
      message: document.querySelector('#message').value,
      email_to: document.querySelector('#email').value,
    })
    .then(
      (response) => {
        console.log(response)
      },
      (error) => {
        console.log(error)
      },
    )
}

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault()
  sendEmail()
})

// open navbar
let navOpen = document.querySelector('.navbar-open')
let navbarMenu = document.querySelector('.navbar-menu')
let navOpenIcon = document.querySelector('.bar')
window.addEventListener('scroll', function () {
  if (this.scrollY > 80) {
    navOpen.style.right = '20px'
    navbarMenu.classList.remove('visible')
    navbarMenu.classList.add('hidden')
    navOpenIcon.classList.remove('fa-xmark')
    navOpenIcon.classList.add('fa-bars')
  } else {
    navOpen.style.right = '-60px'
    navbarMenu.classList.remove('hidden')
    navbarMenu.classList.add('visible')
  }
})
navOpen.addEventListener('click', function () {
  navbarMenu.classList.toggle('visible')
  if (navbarMenu.classList.contains('visible')) {
    navOpenIcon.classList.remove('fa-bars')
    navOpenIcon.classList.add('fa-xmark')
  } else {
    navOpenIcon.classList.remove('fa-xmark')
    navOpenIcon.classList.add('fa-bars')
  }
})

// scroll to top
let scrollBtn = document.querySelector('.scroll-to-top')

window.addEventListener('scroll', function () {
  this.scrollY >= 80
    ? (scrollBtn.style.right = '20px')
    : (scrollBtn.style.right = '-60px')
})

scrollBtn.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
})

let theme = document.querySelector('.change-theme')
let themeIcon = document.querySelector('.fa-regular')
theme.addEventListener('click', function () {
  document.body.classList.toggle('light-theme')
  if (document.body.classList.contains('light-theme')) {
    themeIcon.classList.remove('fa-moon')
    themeIcon.classList.add('fa-sun')
  } else {
    themeIcon.classList.add('fa-moon')
    themeIcon.classList.remove('fa-sun')
  }
})

let hours = new Date().getHours()

if (hours > 16 && hours <= 4) {
  themeIcon.classList.add('fa-moon')
  themeIcon.classList.remove('fa-sun')
  document.body.classList.remove('light-theme')
} else if (hours > 4 && hours <= 16) {
  document.body.classList.add('light-theme')
  themeIcon.classList.remove('fa-moon')
  themeIcon.classList.add('fa-sun')
}

AOS.init()
