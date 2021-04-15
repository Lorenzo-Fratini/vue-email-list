function init() {
  
    new Vue({
        
        el: '#app',
        
        data () {
          return {
            emails: []
          }
        },
       
        mounted () {
          for (let i = 0; i < 10; i++) {

              axios
              .get('https://flynn.boolean.careers/exercises/api/random/mail')
              .then(response => (this.emails.push(response.data.response)))
          }
        }
      })
  }
  
  document.addEventListener('DOMContentLoaded', init);