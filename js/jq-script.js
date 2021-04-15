function liGen() {
  
  const list = $('#myUl');

  for (let i = 0; i < 10; i++) {
    
    $.ajax({
      url: "https://flynn.boolean.careers/exercises/api/random/mail",
      method: 'GET',
  
      success: function(data) {
  
        const rndEmail = data.response;
        // console.log(rndEmail);
  
        list.append('<li>' + rndEmail + '</li>');
      },
  
      error: function() {
          console.log('error');
      }
    });
  }
}

function init() {
  
  liGen();
}

$(init);