let svg = document.getElementById('svg')
let svgb = document.getElementById('svgb')




svg.addEventListener('click', () => {
    let flex = document.getElementById('flex');
    flex.classList.remove('flex')
    flex.classList.add('flexb')
    let body = document.getElementById('body');
    body.classList.add('bodyb')
})

svgb.addEventListener('click', () => {
    let flex = document.getElementById('flex');
    flex.classList.add('flex')
    flex.classList.remove('flexb')
    let body = document.getElementById('body');
    body.classList.remove('bodyb')
})