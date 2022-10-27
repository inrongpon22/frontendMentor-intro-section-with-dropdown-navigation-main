const featuresMenu = document.getElementById('drop-down-features');
const featuresDrop = document.getElementById('features-drop');
const hamMenu = document.getElementById('ham-menu');


const companyMenu = document.getElementById('drop-down-company');
const companyDrop = document.getElementById('company-drop');

featuresMenu.addEventListener('click', e => {
    featuresDrop.classList.toggle('hidden')
})

companyMenu.addEventListener('click', e => {
    companyDrop.classList.toggle('hidden');
})

hamMenu.addEventListener('click', e => {
    console.log('first')
})