import { contactList , init } from '../../init.js';
import Contact from '../../model/contact.js';

// Search for contacts
$("#searchContact").on("input", function() {
    var search = $(this).val();
    var contacts = contactList.contacts;
    var html = '';

    if (search.length > 0) {
        for (var i = 0; i < contacts.length; i++) {
            if (contacts[i].name.toLowerCase().indexOf(search.toLowerCase()) > -1) {
                let contact = new Contact(contacts[i].id, contacts[i].name, contacts[i].email, contacts[i].phone);
                html += contact.buildContactSingle();
            }
        }
    } else {
        html = contactList.buildContactList();
    }

    $('#contentContacts').html(html);
    init(); 
});