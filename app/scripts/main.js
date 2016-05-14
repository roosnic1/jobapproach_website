'use strict';

var notify = humane.create({ timeout: 4000, baseCls: 'humane-original' })


function sendForm() {

  console.log('send form');

  var formData = new FormData();
  formData.append('name',document.getElementById('contact_form_name').value);
  formData.append('email',document.getElementById('contact_form_email').value);
  formData.append('message',document.getElementById('contact_form_message').value);

  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if(request.readyState === 4 && request.status === 200) {
      document.getElementById('contact_form_name').value = '';
      document.getElementById('contact_form_email').value = '';
      document.getElementById('contact_form_message').value = '';
      notify.log('Danke für ihre Nachricht. Wir melden uns in kürze');
    } else {
      notify.log('Die Nachricht wurde nicht abgeschickt. Versuchen Sie es später no einmal');
    }
  };
  request.open('POST', window.location.origin + '/sendmail.php');
  request.send(formData);

  return false;
};
