const nextTag = document.querySelector('.next')
const prevTag = document.querySelector('.prev')
const outputTag = document.querySelector('h2')
const circleTag = document.querySelector('.circle')
const bodyTag = document.querySelector('body')
const randomTag = document.querySelector('.random')

const pages = [
    { copy: "a Brooklyn-based graphic designer", background: "#edc7a9", circle: "#3e78ed" },
    { copy: "Kanye West's biggest fan", background: "#a1fffe", circle: "#e34a47" },
    { copy: "looking for a job at the start of October", background: "#d3c7f3", circle: "#f7fe00" },
    { copy: 'letting you <a href="pdf.pdf">download her PDF</a>', background: "#faffb8", circle: "#b472e6" }
]

let pageNumber = 0

const random = function () {
    pageNumber = Math.floor( Math.random() * pages.length)

    update()
}

const next = function () {
    pageNumber = pageNumber + 1

    if (pageNumber > pages.length - 1) {
        pageNumber = 0
    }

    update()
}

const prev = function () {
    pageNumber = pageNumber - 1

    if (pageNumber < 0) {
        pageNumber = pages.length - 1
    }

    update()
}

const update = function () {
    outputTag.innerHTML = pages[pageNumber].copy
    bodyTag.style.backgroundColor = pages[pageNumber].background
    circleTag.style.backgroundColor = pages[pageNumber].circle
}

nextTag.addEventListener('click', function() {
    next()
})

prevTag.addEventListener('click', function () {
    prev()
})

randomTag.addEventListener('click', function () {
    random()
})


