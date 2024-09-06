export function scrollHandle(e: any, hrefId?: any) {
    e && e.preventDefault()
    let id = e ? e.target.id : hrefId
    if(id === 'home-') {
        window.location.href = "/portfolio/#" + id.slice(0, id.length - 1)
        window.scrollTo(0, 0)
    } else {
        let position = document.getElementById(id.slice(0, id.length - 1))
        window.location.href = "/portfolio/#" + id.slice(0, id.length - 1)
        position && position.scrollIntoView({ behavior: "smooth", block: "center"})
    }
}