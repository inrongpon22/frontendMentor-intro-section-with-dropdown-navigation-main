const featuresMenu = document.getElementById('drop-down-features');
const featuresDrop = document.getElementById('features-drop');

const companyMenu = document.getElementById('drop-down-company');
const companyDrop = document.getElementById('company-drop');

featuresMenu.addEventListener('mouseenter', e => {
    featuresDrop.classList.remove('hidden')
})
featuresMenu.addEventListener('mouseleave', e => {
    featuresDrop.classList.add('hidden')
})

companyMenu.addEventListener('mouseenter', e => {
    companyDrop.classList.remove('hidden');
})
companyMenu.addEventListener('mouseleave', e => {
    companyDrop.classList.add('hidden');
})