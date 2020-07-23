function loadTxt(){
    fetch('/covid19data/dateCount.txt').then(function (response){

        return response.text();

    }).then(function (data){

        console.log(data);
        let split_data
        split_data = data.split(/\r?\n/);
        document.getElementById("output-date").innerHTML = "Last Updated: " +split_data[0];
        document.getElementById("output-count").innerHTML = split_data[1];

    }).catch(function (error){

        console.log(error);

    })
}

loadTxt();