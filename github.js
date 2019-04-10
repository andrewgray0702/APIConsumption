var results = "";
        // Below is a promise chain .then the return of .then is sent to the next .then
        document.getElementById('submit').addEventListener("click", function(e){
            e.preventDefault();
            document.querySelectorAll('figure').forEach(val => val.remove());
            document.querySelector(".results").innerText = "";
            var jobLocal = document.querySelector("#jobLoCal").value;
            console.log(jobLocal);
            var jobDescription = document.querySelector("#jobDescription").value;;
            console.log(jobDescription);
            var jobType = document.querySelector("#type").value;
            console.log(jobType);
            if(jobLocal.length != 0) {
            
            fetch('https://jobs.github.com/positions.json?description+=' + jobDescription + '&location=' + jobLocal + '&type=' + jobType)
            .then(response => response.json())
            .then(function(json){
              document.querySelector(".results").innerText = "Search has returned " + json.totalResults + " results"; // This is where to send the information we get from the API
              json.Search.forEach(function(val){
                var newFigure = document.createElement("figure");
                var newFigcaption = document.createElement("figcaption");
                var newImg = document.createElement("img");
                var companyName = document.createElement("h2");
                newFigure.appendChild(newImg);
                newImg.src = val.Poster;
                newFigure.appendChild(newFigcaption);
                newFigcaption.innerText = val.Title + " Year: " + val.Year ;
                document.querySelector('#containerResults').appendChild(newFigure);
              })
            })
        }
            else {
                document.querySelector('#Error').innerText = "Location is Required"
            }
        });
        function buildEntry(){

        }