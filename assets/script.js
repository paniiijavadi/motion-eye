let _main = document.getElementsByTagName('main')[0]
let _eyes = document.querySelectorAll('.eye>div')
_main.onmousemove = (e) => {
    let x = ((e.clientX) - (_main.offsetLeft)) * 100 / window.innerWidth + '%'
    let y = ((e.clientY) - (_main.offsetTop)) * 100 / window.innerHeight + '%'
    _eyes[0].style.top = y
    _eyes[0].style.left = x
    _eyes[1].style.top = y
    _eyes[1].style.left = x
    _eyes[0].style.transform = 'translate(-'+x+',-'+y+')'
    _eyes[1].style.transform='translate(-'+x+',-'+y+')'
}