import ContactList from './model/contactList.js';
import Contact from './model/contact.js';
import { getContact } from './controller/contact/getContacts.js';

// new contactlist
export let contactList = new ContactList([new Contact(1, '', '', '')]);

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

function openModal(){
    $(document).on('click', '[data-toggle="open-modal"]', function (e) {
        e.preventDefault();
        var target = $(this).attr('data-target');
        $(target).addClass('modal-open');
    });
}

function closeModal(){
    $(document).on('click', '[data-toggle="close-modal"]', function (e) {
        e.preventDefault();
        var target = $(this).attr('data-target');
        $(target).removeClass('modal-open');
    });

}

function clickCreateContact(){
    $('#create-contact').on('click', function(e){
        document.getElementById("addContactForm").reset();
        $('#edit-contact').val('');
        $('#btn-add-contact').html('Submit');
        
                    
        var html = '';
        html += '<i class="fa-solid fa-address-book fa-5x py-3"></i>';
        html += '<p>No contact selected</p>';

        $('#info-contact').html(html);
    })
}

function menuOpenClick() {
    $('.menu-open').on('click', function (e) {
        $(this).hide();
        $(this).next().show();
    })
}

function menuCloseClick() {
    $('.menu-close').on('click', function (e) {
        $(this).parent().prev().show();
        $(this).parent().hide();
    })
}

function initBtnDelete(){
    $('.btn-delete').on('click', function (e) {
        $(this).parent().prev().show();
        $(this).parent().hide();
        var id = $(this).attr('data-id');
        $('#delete-contact').val(id);
    })
}

function initBtnEdit(){
    $('.btn-edit').on('click', function (e) {
        $(this).parent().prev().show();
        $(this).parent().hide();
        var id = $(this).attr('data-id');
        $('#edit-contact').val(id);
        $('#modalCreateContact').addClass('modal-open');
        $('#name').val(contactList.getContact(id).name);
        $('#phone').val(contactList.getContact(id).phone);
        $('#address').val(contactList.getContact(id).address);
        $('#btn-add-contact').html('Update');
    })
}

function initBtnContact(){
    $('.btn-contact').on('click', function(e){
        let id = $(this).attr('data-id');
        let contact = new Contact(contactList.getContact(id).id, contactList.getContact(id).name, contactList.getContact(id).phone, contactList.getContact(id).address);
        let html = contact.buildContact();
        $('#info-contact').html(html);
    })
}

export function buildSpinner(element){
    var html = '';
    html += '<div class="self-center justify-self-center"><i class="fa-solid fa-circle-notch fa-spin"></i></div>';
    $(element).html(html);
}

export function resetButton(element, text){
    element.prop("disabled",false);
    element.html(text);
}

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
