const getSpecificPerson = require('./getCurrentJson.js');

let changeLink = (link) => {
    let findID = link.split('/')[2];
    let changedLink = '';
    if (link === '/pages') {
        changedLink = './moduleHtml/pages.html';
    } else if (link === '/pages/about'){
        changedLink = './moduleHtml/about.html';
    } else if (link === '/pages/sports') {
        changedLink = './moduleHtml/sport.html';
    } else if (link === '/files/people') {
        changedLink = './textFiles/people.txt';
    } else if (link === '/files/shops'){
        changedLink = './textFiles/shops.txt';
    } else if (link === '/contacts'){
        changedLink = './contacts/contacts.json';
    } else if(link === `/contacts/${findID}`){
        changeLink = getSpecificPerson(findID-1);
    }
    else {
        changedLink = './index.html'
    }

    return changedLink;
}

module.exports = changeLink;