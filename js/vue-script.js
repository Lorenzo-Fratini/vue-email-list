function init() {
  
    new Vue({
        
        el: '#app',
        
        data () {
          return {
            info: null
          }
        },
       
        mounted () {
          axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => (this.info = response.data.response))
            .catch(error => console.log(error))
        }
      })
  }
  
  document.addEventListener('DOMContentLoaded', init);