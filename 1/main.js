new Vue({
    el: '#app',
    data() {
        return {
            'index' : 0,
            activeClass: 'index' + 1,
            errorClass: 'text-danger',
            info: null
        };
    },
    mounted() {
        axios
            .get('https://swapi.dev/api/people/?format=json')
            .then(response => (this.info = response.data.results))

    },
    methods: {
        show(index){
            alert(index)
        }
    }
});

