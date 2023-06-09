let svg = document.getElementById('svg')
let svgb = document.getElementById('svgb')
let link = document.getElementById('link');
let linkb = document.getElementById('linkb');



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

link.addEventListener('click', () => {
    let features = document.getElementById('features');
    features.classList.toggle('hide')
    features.classList.toggle('features')

    let svg = document.getElementById('down');
    svg.classList.toggle('hideb');
    let svgb = document.getElementById('up');
    svgb.classList.toggle('hideb')
})

linkb.addEventListener('click', () => {
    let features = document.getElementById('featuresb');
    features.classList.toggle('hide')
    features.classList.toggle('featuresb')

    let svg = document.getElementById('downb');
    svg.classList.toggle('hideb');
    let svgb = document.getElementById('upb');
    svgb.classList.toggle('hideb')
})