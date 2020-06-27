
const profileArea = document.querySelector(".one")
function profile() {
    let profile_section = document.createElement("section")
    let h1 = document.createElement("h1")
    let p = document.createElement("p")

    h1.className = "h1"
    p.className = "p"


    h1.textContent = "The penguin"
    p.textContent = "Name : "
    section.appendChild(h1)
    section.appendChild(p)
}


data.map((prof, index) => {
    const body = document.querySelector("body")
    const page = document.createElement('div');
    const profile_section = document.createElement("section")


    ////////////////////////////////////////////// Profile Section 
    //class names
    body.className = "well"
    body.id = "well"
    page.className = "panel"
    profile_section.className = "profile_section"

    // name
    const div_name = document.createElement('div')
    const h1_name = document.createElement("h1")
    const p_name = document.createElement("p")
    h1_name.className = `h1  el`

    h1_name.textContent = prof.Profile.name
    p_name.textContent = "Name : "

    div_name.appendChild(p_name)
    div_name.appendChild(h1_name)

    // height
    const div_height = document.createElement('div')
    const h1_height = document.createElement("h1")
    const p_height = document.createElement("p")


    h1_height.textContent = prof.Profile.height
    p_height.textContent = "Height : "
    h1_height.className = "h1"
    h1_height.className = `h1  el}`


    div_height.appendChild(p_height)
    div_height.appendChild(h1_height)

    // hair
    const div_hair = document.createElement('div')
    const h1_hair = document.createElement("h1")
    const p_hair = document.createElement("p")
    h1_hair.className = `h1  el`

    h1_hair.textContent = prof.Profile.hair
    p_hair.textContent = "Hair : "

    div_hair.appendChild(p_hair)
    div_hair.appendChild(h1_hair)

    // weight
    const div_weight = document.createElement('div')
    const h1_weight = document.createElement("h1")
    const p_weight = document.createElement("p")

    h1_weight.textContent = prof.Profile.weight
    p_weight.textContent = "Weight : "

    div_weight.appendChild(p_weight)
    div_weight.appendChild(h1_weight)

    // Bussinese
    const div_bussinese = document.createElement('div')
    const div_bussineseList = document.createElement('div')
    const h1_bussinese = document.createElement("h1")
    const p_bussinese = document.createElement("p")

    div_bussineseList.innerHTML = prof.Bussinese.map(bussines => `<h1> ${bussines} </h1>`).join("")
    p_bussinese.textContent = "Bussinese : "
    div_bussinese.appendChild(p_bussinese)
    div_bussinese.appendChild(div_bussineseList)

    ////////////////////////////////////////////// Profile Section  END

    ////////////////////////////////////////////// Profile Image Start
    const profile_image = document.createElement("section")
    profile_image.className = "profile_image"
    const p_image = document.createElement("p")
    const img = document.createElement("img")

    // img.setAttribute("data-src", prof.image.image_src)
    img.src = prof.image.image_src
    p_image.textContent = "Ilustrated by" + prof.image.artist

    ////////////////////////////////////////////// Profile Image End

    ///////////////////////////////////////////////---- Profile Case Start
    const profile_case = document.createElement("section")
    profile_case.className = "profile_case"
    const h1_case = document.createElement("h1")
    const p_Case = document.createElement("p")

    const div_case_archive = document.createElement("div")
    const h1_case_archive = document.createElement("h1")
    const p_case_archive = document.createElement("p")

    // div_bussineseList.innerHTML = prof.Bussinese.map(bussines => `<h1> ${bussines} </h1>`).join("")



    h1_case.textContent = `${prof.personalFile.name}(${prof.personalFile.vilian_name})`
    p_Case.textContent = prof.personalFile.info

    div_case_archive.innerHTML = prof.Cases.map(file => `<h1> ${file.case_name} </h1> \n <p>${file.case_info}</p>`)

    ///////////////////////////////////////////////---- Profile Case End


    /////// DOM 
    //Profile Section
    profile_section.appendChild(div_name)
    profile_section.appendChild(div_height)
    profile_section.appendChild(div_hair)
    profile_section.appendChild(div_weight)
    profile_section.appendChild(div_bussinese)
    // Profile Image
    profile_image.appendChild(img)
    profile_image.appendChild(p_image)
    //Profile Case
    profile_case.appendChild(h1_case)
    profile_case.appendChild(p_Case)
    profile_case.appendChild(div_case_archive)





    // profileArea.appendChild(profile_section)
    page.appendChild(profile_section)
    page.appendChild(profile_image)
    page.appendChild(profile_case)
    body.appendChild(page)

})
const sec = document.querySelectorAll('section')

var els = document.querySelectorAll('.h1 .el');

// var nodeList = anime({
//     targets: els,
//     translateX: 250
// });



var textWrapper = document.querySelector('.ml3');
var textP = document.querySelector('.text')
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
textP.innerHTML = textP.textContent.replace(/\S/g, "<span class='letterP'>$&</span>");

//m4
var textWrapper4 = document.querySelector('.ml4');
var textP4 = document.querySelector('.text4')
textWrapper4.innerHTML = textWrapper4.textContent.replace(/\S/g, "<span class='letter4'>$&</span>");
textP4.innerHTML = textP4.textContent.replace(/\S/g, "<span class='letterP4'>$&</span>");



// anime({
//     loop: 0,
//     targets: '.ml3 .letter ,  .text .letterP',
//     opacity: [0, 1],
//     easing: "easeInOutQuad",
//     duration: 100,
//     delay: (el, i) => 50 * (i + 1)
// })

// anime({
//     loop: 0,
//     targets: ' .ml4 .letter4 , .text4 .letterP4',
//     opacity: [0, 1],
//     easing: "easeInOutQuad",
//     duration: 100,
//     delay: (el, i) => 50 * (i + 1)
// })