document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]')
    const questions = document.querySelectorAll('[data-faq-question]')

    const heroSection = document.querySelector('.hero')
    const heroHeight = heroSection.clientHeight

    window.addEventListener('scroll', function() {
        const currentPosition = window.scrollY

        if (currentPosition < heroHeight) {
            hiddenHeader()
        } else {
            showHeader()
        }
    })

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(button) {
            const targetTab = button.target.dataset.tabButton
            const tab = document.querySelector(`[data-tab-id=${targetTab}]`)
            hideAllTabs()
            tab.classList.add('cast__list--is-active')
            removeActiveButton()
            button.target.classList.add('cast__tabs__button--is-active')
        })
    }

    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', toggleAnswer)
    }
})

function hiddenHeader() {
    const header = document.querySelector('header')
    header.classList.add('header--is-hidden')
}

function showHeader() {
    const header = document.querySelector('header')
    header.classList.remove('header--is-hidden')
}

function toggleAnswer(element) {
    const classAnswer = 'faq__questions__item--is-open'
    const parentElement = element.target.parentNode

    parentElement.classList.toggle(classAnswer)
}

function removeActiveButton() {
    const buttons = document.querySelectorAll('[data-tab-button]')
    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('cast__tabs__button--is-active')
    }
}

function hideAllTabs() {    
    const tabsContainer = document.querySelectorAll('[data-tab-id]')

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('cast__list--is-active')
    }
}