import { buildSpinner, resetButton, alert, contactList } from '../../init.js';
import { getContact } from './getContacts.js';
import Contact from '../../model/contact.js';


//Add Contact
$('#addContactForm').on('submit', function (event) {

    event.preventDefault();
    if (navigator.onLine) {
        // Get the element of the form field
        var formElement = $(this);
    
        
        Array.prototype.slice.call(formElement)
            .forEach(function (formValidate) {
                // Check if the form is valid
                if (!formValidate.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                } else {
                    let form = formElement[0];
                    let btnSubmitForm = $('#btn-add-contact');
    
                    // Disabled and build spinner
                    buildSpinner(btnSubmitForm);
                    btnSubmitForm.prop("disabled",true);
    
                    // Get value of id_contact
                    let id_contact = $('#edit-contact').val();
                    
                    // Create FormData object
                    let formData = new FormData(form);
                    
                    // Fetch request URL for Add contact 
                    let url = ""+$('meta[name="host"]').attr('content')+"/api/contact";
    
                    // If id_contact is not empty, then add edit contact by use PUT method
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
    
                            // Reset button to original state
                            resetButton(btnSubmitForm, "Submit");
    
                            var results = resultsJSON
    
                            if (results.status == 'success') {
                                
                                // Refresh contact list
                                getContact();

                                // If id_contact is not empty, build contact content
                                if(id_contact){
                                    let contact = new Contact(results.data.id, results.data.name, results.data.phone, results.data.address);
                                    let html = contact.buildContact();
                                    console.log(html)
                                    $('#info-contact').html(html);
                                }
                                
                                // Close modal
                                $('#modalCreateContact').removeClass('modal-open');
    
                                // Show success alert
                                $('#alert-success').fadeIn().delay(3000).fadeOut();
    
                                // Reset form
                                form.reset();
    
                            } else {
                                // Reset button to original state
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
  