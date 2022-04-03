import { buildSpinner, resetButton, alert } from '../../init.js';
import { getContact } from './getContacts.js';

//Delete Contact
$('#btn-delete-contact').on('click', function (event) {

event.preventDefault();
if (navigator.onLine) {

        let deleteBtn = $(this);

        buildSpinner(deleteBtn);
        deleteBtn.prop("disabled",true);

        var formData = new FormData(); 
        formData.append('_method', 'DELETE');
        fetch("api/contact/"+$('#delete-contact').val()+"", {
                method: 'POST',
                credentials: "same-origin",
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
                },
                body: formData,
            })
            .then(function (response) {
                return response.json();
            }).then(function (resultsJSON) {

                resetButton(deleteBtn, "Confirm");

                var results = resultsJSON

                if (results.status == 'success') {

                    getContact();
                    
                    $('#modalDeleteContact').removeClass('modal-open');

                    alert('success');

                } else {
                    alert('error');
                }

            })
            .catch(function (err) {
                console.log('Error Delete Contact: ' + err);
            });
    

    } else {
        alert('warning');
    }
});
