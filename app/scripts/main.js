'use strict';

let req = (() => {
  let notify = humane.create({ timeout: 4000, baseCls: 'humane-original' });
  let fields = ['contact_form_name', 'contact_form_email', 'contact_form_message'];

  return () => {
    let formData = new FormData();
    fields.map((field) => formData.append(field,document.getElementById(field).value));

    let request = new XMLHttpRequest();
    request.onreadystatechange = () => {
      if(request.readyState === 4 && request.status === 200) {
        fields.map((field) => document.getElementById(field).value = '');
        notify.log('Danke für ihre Nachricht. Wir melden uns in kürze.');
      } else if(request.readyState === 4) {
        notify.log('Die Nachricht wurde nicht abgeschickt. Versuchen Sie es später noch einmal');
      }
    };
    request.open('POST', window.location.origin + '/sendmail.php');
    request.send(formData);

    return false;
  };
})();
