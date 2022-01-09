$( document ).ready(function() {
    $jsonObj = 0;
    $.getJSON(' https://swapi.dev/api/people/?format=json', function(data) {
        //data is the JSON string
        $jsonObj = JSON.stringify(data);
        console.log($jsonObj);
    });
});