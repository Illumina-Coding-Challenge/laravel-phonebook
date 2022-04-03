import ContactList from './model/contactList.js';
import Contact from './model/contact.js';
import { getContact } from './controller/contact/getContacts.js';

// new contactlist
export let contactList = new ContactList([new Contact(1, '', '', '')]);

//Initialize event and listener
init();
getContact();

export function init(){
    openModal();
    closeModal();
    clickCreateContact();
    menuOpenClick();
    menuCloseClick();
    initBtnDelete();
    initBtnEdit();
    initBtnContact();
}

// To open modal
function openModal(){
    $(document).on('click', '[data-toggle="open-modal"]', function (e) {
        e.preventDefault();
        var target = $(this).attr('data-target');
        $(target).addClass('modal-open');
    });
}

// To close modal
function closeModal(){
    $(document).on('click', '[data-toggle="close-modal"]', function (e) {
        e.preventDefault();
        var target = $(this).attr('data-target');
        $(target).removeClass('modal-open');
    });

}

// Process when click create contact
function clickCreateContact(){
    $('#create-contact').on('click', function(e){

        // Reset contact form
        document.getElementById("addContactForm").reset();
        $('#edit-contact').val('');
        $('#btn-add-contact').html('Submit');
        
        // Reset contact content      
        var html = '';
        html += '<i class="fa-solid fa-address-book fa-5x py-3"></i>';
        html += '<p>No contact selected</p>';
        $('#info-contact').html(html);

    })
}

// To open menu
function menuOpenClick() {
    $('.menu-open').on('click', function (e) {
        $(this).hide();
        $(this).next().show();
    })
}

// To closed menu
function menuCloseClick() {
    $('.menu-close').on('click', function (e) {
        $(this).parent().prev().show();
        $(this).parent().hide();
    })
}

// Delete contact button
function initBtnDelete(){
    $('.btn-delete').on('click', function (e) {
        // Open & hide menu
        $(this).parent().prev().show();
        $(this).parent().hide();
        // Append val to input
        var id = $(this).attr('data-id');
        $('#delete-contact').val(id);
    })
}

// Edit contact button
function initBtnEdit(){
    $('.btn-edit').on('click', function (e) {
        // Open & hide menu
        $(this).parent().prev().show();
        $(this).parent().hide();
        // Append val to input
        var id = $(this).attr('data-id');
        $('#edit-contact').val(id);
        // Open contact modal
        $('#modalCreateContact').addClass('modal-open');
        // Append value to contact form
        $('#name').val(contactList.getContact(id).name);
        $('#phone').val(contactList.getContact(id).phone);
        $('#address').val(contactList.getContact(id).address);
        $('#btn-add-contact').html('Update');
    })
}

// Info Contact button
function initBtnContact(){
    $('.btn-contact').on('click', function(e){
        // Build contact content
        let id = $(this).attr('data-id');
        let contact = new Contact(contactList.getContact(id).id, contactList.getContact(id).name, contactList.getContact(id).phone, contactList.getContact(id).address);
        let html = contact.buildContact();
        $('#info-contact').html(html);
    })
}

// Build spinner for loading
export function buildSpinner(element){
    var html = '';
    html += '<div class="self-center justify-self-center"><i class="fa-solid fa-circle-notch fa-spin"></i></div>';
    $(element).html(html);
}

// Reset button to original state
export function resetButton(element, text){
    element.prop("disabled",false);
    element.html(text);
}

// Build alert message
export function alert(type){
    if (type === 'error') {
        $('#alert-error').fadeIn().delay(3000).fadeOut();
    }
    else if(type === 'warning'){
        $('#alert-warning').fadeIn().delay(3000).fadeOut();
    }
    else if(type === 'success'){
        $('#alert-success').fadeIn().delay(3000).fadeOut();
    }
}
