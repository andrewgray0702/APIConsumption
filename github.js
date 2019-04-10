var results = "";//  <--- results or .results IS TO BE RENAMED according to new css / html values
        // Below is a promise chain .then the return of .then is sent to the next .then
        document.getElementById('submit').addEventListener("click", function(e){
            e.preventDefault();
            document.querySelectorAll('figure').forEach(val => val.remove());
            document.querySelector(".results").innerText = "";
            var jobLocal = document.querySelector("#loc").value;
            console.log(jobLocal);
            var jobDescription = document.querySelector("#desc").value;;
            console.log(jobDescription);
            var jobType = document.querySelector("#full").value;
            console.log(jobType);
            if(jobLocal.length != 0) {
            
            fetch('https://jobs.github.com/positions.json?description+=' + jobDescription + '&location=' + jobLocal + '&type=' + jobType)
            .then(response => response.json())
            .then(function(json){
              document.querySelector(".results").innerText = "Search has returned " + json.totalResults + " results"; // This is where to send the information we get from the API
              json.Search.forEach(function(val){
                var jobPost = document.createElement("div");
                var companyName = document.createElement("h3");
                var companyUrl = document.createElement("a");
                companyUrl.appendChild(companyUrl);
                companyUrl.href = val.company_url;
                companyName.innerText = val.company;
                jobPost.innerText = val.title + " Location: " + val.location ;
                document.querySelector('#containerResults').appendChild(newFigure); // <--- containerResults to be RENAMED
              })
            })
        }
            else {
                document.querySelector('#Error').innerText = "Location is Required"
            }
        });
        function buildEntry(){

        }