$(document).ready(function()
{
	$("#search").on("click", function(){
		//if(doValidations()){
		   	$.ajax({url: "js/mydata.txt", success: function(result){
	       		 createDataTable(JSON.parse(result));;
	    	}});
    	//}
	});

	$('#clearall').on("click",function(){
		$('.errorMsg').html("");	
    });

});

function numbersonly(e){
    var unicode=e.charCode? e.charCode : e.keyCode
        if (unicode<48||unicode>57)
            return false 
}


function createDataTable(dataArray){

  for(var i in dataArray){
  	var status = (dataArray[i].status==24)?"Application Denied":"Application Accepted";
  	var sno = (i*1+1);
  	console.log(sno);
  	var tr = "<tr><td>" +sno+ "</td><td>" + dataArray[i].tranDate + "</td><td>"+ dataArray[i].storeNum + "</td><td>" + status + "</td><td>" + dataArray[i].custFirstName + "</td><td>" + dataArray[i].custLastName + "</td><td>"+ dataArray[i].custMN + "</td><td>" + dataArray[i].custAdd + "</td><td>" + dataArray[i].custDob + "</td><td>"+ dataArray[i].assocLastName + "</td><td>" + dataArray[i].assocFirstName + "</td><td>" + dataArray[i].assocId + "</td><td>" +"<a href="+"#"+">"+"<img src="+"img/deletsRow.png"+">"+ "</td></tr>";
    $(".report tbody").append(tr); 	
  }

  if(dataArray.length > 0)
  	$('#reporttable').removeClass('hide');
  else
  	$('#reporttable').addClass('hide');
}
