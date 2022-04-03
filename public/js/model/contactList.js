import Contact from './contact.js';
 
 export default class ContactList{

    contacts = [];

    constructor(contacts) {
        contacts.forEach(contact => {
            this.contacts.push(new Contact(contact.id, contact.name, contact.phone, contact.address));
        });
        this.contacts = contacts;
    }

    //Define Mutator
    //add contact
    addContact(contact) {
        this.contacts.push(contact);
    }

    //get contact
    getContact(id) {
        return this.contacts.find(contact => parseInt(contact.id) === parseInt(id));
    }

    //get all contacts
    getContacts() {
        return this.contacts;
    }

    //delete contact
    deleteContact(id) {
        this.contacts = this.contacts.filter(contact => parseInt(contact.id) === parseInt(id));
    }

    //update contact
    updateContact(id, name, phone, address) {
        let contact = this.getContact(id);
        contact.name = name;
        contact.phone = phone;
        contact.address = address;
    }

    // HTML builder for contact list
    buildContactList(){
        var html = '';

        for (var i = 0; i < this.contacts.length; i++) {

            html += '<div class="grid grid-flow-col ">';
            html += '<div class="col-span-2">';
            html += '<button data-id="'+ this.contacts[i].id +'" class="btn-contact btn btn-ghost py-2 inline-block text-left btn-wide" style="width: -webkit-fill-available;">';
            html += '<div ">' + this.contacts[i].name + '</div>';
            html += '</button>';
            html += '</div>';
            html += '<div class="text-right">';
            html += '<label class="justify-items-end">';
            html += '<div class="menu-open btn btn-ghost fill-current text-right"><i class="fa-solid fa-ellipsis-vertical"></i></div>';
            html += '<div class="list-menu fill-current text-right hidden">';
            html += '<div data-id="'+ this.contacts[i].id +'" class="btn btn-ghost btn-edit"><i class="fa-solid fa-pen-to-square"></i></div>';
            html += '<div data-id="'+ this.contacts[i].id +'" data-toggle="open-modal" data-target="#modalDeleteContact" class="btn btn-ghost btn-delete"><i class="fa-solid fa-trash-alt"></i></div>';
            html += '<div class="menu-close btn btn-ghost"><i class="fa-solid fa-xmark"></i></div>';
            html += '</div>';
            html += '</label>';
            html += '</div>';
            html += '</div>';
        }

        return html;
    }
}