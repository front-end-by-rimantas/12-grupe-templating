"use strict";

function templating() {
    const sections = document.querySelectorAll('[data-templating]');

    for ( let i=0; i<sections.length; i++ ) {
        const section = sections[i];
        const dataID = section.id;
        const data = DATA[dataID];
        const keys = Object.keys(data[0]);
        const template = section.innerHTML;
        let HTML = '';
        let templateHTML = '';

        for ( let b=0; b<data.length; b++ ) {
            templateHTML = template;
            
            for ( let k=0; k<keys.length; k++ ) {
                while ( templateHTML.indexOf(`{{${keys[k]}}}`) >= 0 ) {
                    templateHTML = templateHTML.replace(`{{${keys[k]}}}`, data[b][ keys[k] ])
                }
            }
            HTML += templateHTML;
        }
        section.innerHTML = HTML;
    }
    
    return;
}