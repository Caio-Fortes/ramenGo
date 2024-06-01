document.addEventListener('DOMContentLoaded', function() {
    scrollBroths(0, 0, 'container_select_broth', 'widget-circle-select-broths');
    scrollBroths(0, 0, 'container_select_proteins', 'widget-circle-select-proteins');
});

function scrollBroths(indiceSelected, scrollTo, idContainerScroll, widgetsClass){
    const elemento = document.getElementById(idContainerScroll);
    elemento.scrollTo(scrollTo, 0);

    let allElements = document.getElementsByClassName(widgetsClass);
    for(let i = 0; i < allElements.length; i++){
        let elementStyle = allElements[i].style;
        if(i === indiceSelected){
            elementStyle.backgroundColor = '#FF4E42'
            elementStyle.height = '12px';
            elementStyle.width = '36px';
            elementStyle.borderRadius = '8px';
        }
        else{
            elementStyle.backgroundColor = '#E0DBBF'
            elementStyle.height = '12px';
            elementStyle.width = '12px';
            elementStyle.borderRadius = '50%';
        }
    }
}
