'use strict';

let req = (() => {
  let notify = humane.create({ timeout: 4000, baseCls: 'humane-original' });
  let fields = ['contact_form_name', 'contact_form_email', 'contact_form_message'];

  return () => {

    let formData = new FormData();
    fields.map((field) => formData.append(field,document.getElementById(field).value));
    if(grecaptcha.getResponse().length === 0) {
      notify.log('Bitte bestätigen Sie dass Sie kein Roboter sind');
      return false;
    } else {
      formData.append('recaptcha',grecaptcha.getResponse());
    }

    let request = new XMLHttpRequest();
    request.onreadystatechange = () => {
      if(request.readyState === 4 && request.status === 200) {
        fields.map((field) => document.getElementById(field).value = '');
        notify.log('Danke für ihre Nachricht. Wir melden uns in kürze.');
        grecaptcha.reset();
      } else if(request.readyState === 4) {
        notify.log('Die Nachricht wurde nicht abgeschickt. Versuchen Sie es später noch einmal');
      }
    };
    request.open('POST', window.location.origin + '/sendmail.php');
    request.send(formData);
    ga('send','event','ContactForm','send');

    return false;
  };
})();


let recapCallback = (() => {
  return () => {
    grecaptcha.render('recaptcha', {
      'sitekey' : '6Lct7x8TAAAAAEThkkPJ6Za7tkhtDAiL2_eZT-va'
    });
  };
})();
