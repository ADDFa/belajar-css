const showNavbar = ev => {
    const header = document.querySelector('header')
    const nav = document.querySelector('header nav')

    return nav.style.display = header.contains(ev.target) ? 'flex' : 'none'
    // if (!header.contains(ev.target)) return nav.style.display = 'none'
    // if (header.contains(ev.target)) return nav.style.display = 'flex'
}

document.addEventListener('click', showNavbar)