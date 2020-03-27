$(function() {

const output = document.querySelector('.output');
const queryURL= "http://mvc.ad.jocoks.com/OrgDataMVC/DirectReports/DEPT/CMO";

$.ajax ({
  url: queryURL,
  method: "GET",
  }).then(function(data){
  console.log(data);
  data.forEach(function(person){
      console.log(person.Name + ' ' + person.Title);

    $("#alertbtn").click(function(){
        output.innerHTML += `
        ${person.Name} ${person.Title}
        <br>
        `
        })
  })


  })


});
