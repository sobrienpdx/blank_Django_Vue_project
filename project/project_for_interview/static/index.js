var app = new Vue({
    el: '#hello_hopscotch',
		delimiters: ['${','}'],
		http: {
        // root: 'http://localhost:8000/api/',
				root: '/api/',
        headers: {
        },
		},
    data: {
				message:null,
        message2:null,
        pushed:false,





    },

    methods: {
			write_message: function(){
        console.log(this.message)
			},

      write_another_message: function(){
        console.log(this.message2)
      },

      be_ironic: function(){
        console.log(this.pushed)
        this.pushed = !this.pushed
      },
      jump_page: function(){
        console.log("escape")
        window.location.href = 'jquery_page';
      },











		},
		mounted: function() {

		},
});
