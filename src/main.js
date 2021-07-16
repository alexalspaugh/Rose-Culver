const nextTag = document.querySelector('.next')
const prevTag = document.querySelector('.prev')
const outputTag = document.querySelector('h2')

const pages = [
    {copy: "a Brooklyn-based graphic designer"},
    {copy: "Kanye West's biggest fan"},
    {copy: "looking for a job at the start of October"},
    {copy: 'letting you <a href="pdf.pdf">download her PDF</a>'}
]

let pageNumber = 0

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
}

nextTag.addEventListener('click', function() {
    next()
})

prevTag.addEventListener('click', function () {
    prev()
})
