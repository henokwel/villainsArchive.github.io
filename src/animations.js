const sec = document.querySelectorAll('section')

let h1s = document.querySelector('h1');
let textP = document.querySelector('p')
h1s.innerHTML = h1s.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
textP.innerHTML = textP.textContent.replace(/\S/g, "<span class='letterP'>$&</span>");


const option = {
    root: null,
    threshold: 0,
    // rootMargin:"-150px"
}
const obeserve = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return
        // console.log(entry.target);

        // entry.target.classList.toggle('invert')



        anime({
            loop: 0,
            targets: '.h1 .letter ,  .p .letterP',
            opacity: [0, 1],
            easing: "easeInOutQuad",
            duration: 400,
            delay: (el, i) => 10 * (i + 1)
        })

        obeserve.unobserve(entry.target)

    })
}, option)

// one.appendChild(profile())
sec.forEach(section => {
    obeserve.observe(section)
})
