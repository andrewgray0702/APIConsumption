
// Below is a promise chain .then the return of .then is sent to the next .then
document.querySelector('#submitButton').addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelectorAll('.jobPost').forEach(val => val.remove());
  var jobLocal = document.querySelector("#loc").value;
  console.log(jobLocal);
  var jobDescription = document.querySelector("#desc").value;
  console.log(jobDescription);
  var jobType = document.querySelector("#full").checked;
  console.log(jobType);
  if (jobDescription.length != 0) {
    // https://jobs.github.com/positions.json?page=1&Search&location=new york
    // var queryString = 'https://us.jooble.org/api/&description=' + jobDescription + '&location=' + jobLocal + '&type=' + jobType "61d82599-8f71-4526-ae47-6af3d399ee0b"
    var queryString = 'https://jobs.search.gov/jobs/search.json?query=' + jobDescription;
    // var request = new Request(queryString, {method: 'GET', mode: 'no-cors'})
    fetch(queryString).then(response => response.json())
      .then(function (json) {
        console.log("here");
        json.forEach(function (val) {
          var jobPost = document.createElement("div"); jobPost.className = "jobPost";
          var companyName = document.createElement("h3");
          var companyUrl = document.createElement("a");
          var description = document.createElement("div");
          var localPosition = document.createElement("div");
          description.innerText = val.position_title;
          localPosition.innerText = "Position: " + val.position_title+ " Location: " + val.locations;
          companyUrl.href = val.company_url;
          companyName.innerText = val.organization_name;
          jobPost.appendChild(companyName);
          jobPost.appendChild(companyUrl);
          jobPost.appendChild(description);
          jobPost.appendChild(localPosition);
          document.querySelector('#resultsArea').appendChild(jobPost); // <--- containerResults to be RENAMED
        })
      })
  }
});
function buildEntry() {

}