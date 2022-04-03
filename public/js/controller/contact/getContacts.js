import { buildSpinner, alert, contactList , init } from '../../init.js';

//Get all Contact List
export function getContact(params) {
    
    var contentContacts = $('#contentContacts');

    // Show loading to contact list
    buildSpinner(contentContacts);

    // Fetch request get all contact list
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
            // Save contact list to class ContactList
            contactList.contacts = contacts;
            // Build contact list
            let html = contactList.buildContactList();
            contentContacts.html(html);
            // Init event and listener for newly build contact list
            init();

        } else {
            alert('error');
        }

    })
    .catch(function (err) {
        console.log('Error Contact: ' + err);
    });

}
