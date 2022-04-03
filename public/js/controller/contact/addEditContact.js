import { buildSpinner, resetButton, alert, contactList } from '../../init.js';
import { getContact } from './getContacts.js';
import Contact from '../../model/contact.js';


//Add Contact
$('#addContactForm').on('submit', function (event) {

    event.preventDefault();
    if (navigator.onLine) {
        var formElement = $(this);
    
        Array.prototype.slice.call(formElement)
            .forEach(function (formValidate) {
                if (!formValidate.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                } else {
                    let form = formElement[0];
                    let btnSubmitForm = $('#btn-add-contact');
    
                    buildSpinner(btnSubmitForm);
                    btnSubmitForm.prop("disabled",true);
    
                    let id_contact = $('#edit-contact').val();
    
                    let formData = new FormData(form);
    
                    let url = ""+$('meta[name="host"]').attr('content')+"/api/contact";
    
                    if(id_contact){
                        formData.append('_method', 'PUT');
                        url = ""+$('meta[name="host"]').attr('content')+"/api/contact" + "/" + id_contact;
                    }
                  
                        fetch(url, {
                            method: 'post',
                            credentials: "same-origin",
                            headers: {
                                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
                            },
                            body: formData,
                        })
                        .then(function (response) {
                            return response.json();
                        }).then(function (resultsJSON) {
    
                            resetButton(btnSubmitForm, "Submit");
    
                            var results = resultsJSON
    
                            if (results.status == 'success') {
    
                                getContact();

                                if(id_contact){
                                    
                                    let contact = new Contact(results.data.id, results.data.name, results.data.phone, results.data.address);
                                    let html = contact.buildContact();
                                    console.log(html)
                                    $('#info-contact').html(html);
                                }
                                
                                $('#modalCreateContact').removeClass('modal-open');
    
                                $('#alert-success').fadeIn().delay(3000).fadeOut();
    
                                form.reset();
    
                            } else {
                                resetButton(btnSubmitForm, "Submit");
    
                                alert('error');
                            }
    
                        })
                        .catch(function (err) {
                            console.log('Error Add Contact: ' + err);
                        });
                }
    
                formValidate.classList.add('was-validated');
            });
    } else {
        alert('warning');
    }
    });
  