var app = new Vue({
    el: '#hello_world',
		delimiters: ['${','}'],
		http: {
        // root: 'http://localhost:8000/api/',
				root: '/api/',
        headers: {
        },
		},
    data: {
				message:null,





    },

    methods: {
			write_message: function(){
        console.log(this.message)
			},












		},
		mounted: function() {

		},
});
