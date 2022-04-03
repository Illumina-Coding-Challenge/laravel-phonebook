import { buildSpinner, alert, contactList , init } from '../../init.js';

//Get all Contact List
export function getContact(params) {
    
    var contentContacts = $('#contentContacts');

    buildSpinner(contentContacts);

    fetch("api/contact", {
        method: 'get',
        credentials: "same-origin",
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
        },
    })
    .then(function (response) {
        return response.json();
    }).then(function (resultsJSON) {

        var results = resultsJSON

        if (results.status == 'success') {
            var contacts = results.data;

            contactList.contacts = contacts;

            let html = contactList.buildContactList();
            contentContacts.html(html);

            init();

        } else {
            alert('error');
        }

    })
    .catch(function (err) {
        console.log('Error Contact: ' + err);
    });

}
