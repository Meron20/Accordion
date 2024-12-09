// Variables

const accordion = document.getElementsByClassName('content-container');

for( i = 0; i < accordion.length; i++) {

    accordion[i].addEventListener('click', function () {

        // accordion can be ' this ' in this case   

        //element.classList.toggle(className) syntax for toggle it is used for add or remove className in css

        // Here we add class name which is  called 'active'
        this.classList.toggle('active')
    })
}