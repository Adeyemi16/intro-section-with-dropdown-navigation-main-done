let svg = document.getElementById('svg')
let svgb = document.getElementById('svgb')




svg.addEventListener('click', () => {
    let flex = document.getElementById('flex');
    flex.classList.remove('flex')
    flex.classList.add('flexb')
})

svgb.addEventListener('click', () => {
    let flex = document.getElementById('flex');
    flex.classList.add('flex')
    flex.classList.remove('flexb')
})