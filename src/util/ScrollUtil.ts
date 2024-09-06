export function scrollHandle(e: any) {
    e.preventDefault()
    let id = e.target.id
    let position = document.getElementById(id.slice(0, id.length - 1))
    window.location.href = "#" + id.slice(0, id.length - 1)
    position && position.scrollIntoView({ behavior: "smooth", block: "center"})
}