
        // Below is a promise chain .then the return of .then is sent to the next .then
        document.getElementById('submit').addEventListener("click", function(e){
            e.preventDefault();
            document.querySelectorAll('figure').forEach(val => val.remove());
            var jobLocal = document.querySelector("#loc").value;
            console.log(jobLocal);
            var jobDescription = document.querySelector("#desc").value;
            console.log(jobDescription);
            var jobType = document.querySelector("#full").value;
            console.log(jobType);
            if(jobLocal.length != 0) {
            
            fetch('https://jobs.github.com/positions.json?description+=' + jobDescription + '&location=' + jobLocal + '&type=' + jobType)
            .then(response => response.json())
            .then(function(json){
              json.Search.forEach(function(val){
                var jobPost = document.createElement("div");
                var companyName = document.createElement("h3");
                var companyUrl = document.createElement("a");
                companyUrl.appendChild(companyUrl);
                companyUrl.href = val.company_url;
                companyName.innerText = val.company;
                jobPost.innerText = val.title + " Location: " + val.location ;
                document.querySelector('#resultsArea').appendChild(jobPost); // <--- #resultsArea has been RENAMED
              });
            });
        }
            else {
                document.querySelector('#Error').innerText = "Location is Required";
            }
        });
        function buildEntry(){

        }