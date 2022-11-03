function postalCodeSearch(postalCode){
    let api_endpoint_url = 'https://developers.onemap.sg/commonapi/search?searchVal=' + postalCode + '&returnGeom=Y&getAddrDetails=Y&pageNum=1'
    axios.get(api_endpoint_url)
    .then(response => {
      var location = response.data;
      console.log(location);

      var address = document.getElementById('inputAddress');
      console.log(address);
    
      address.value = location.results[0].ADDRESS;
      
      
    }).catch(error => {
      alert("Please enter a valid postal code!");
    });
}

function recaptchaCallback(){
  var btnSubmit = document.getElementById("btn_submit");

  btnSubmit.removeAttribute('disabled');
}

window.recaptchaCallback = recaptchaCallback;
