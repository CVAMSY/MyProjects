function doValidations(){
	var $transaction_date_from=$('#transaction_date_from').val();
	if ($transaction_date_from =="") {
			$('.errorMsg').html("Please enter date");
		return false;
	}else{
		$('.errorMsg').html("");
	}

	var $tdt=$('#tdt').val();
	if ($tdt =="") {
			$('.errorMsg').html("Please enter date");
		return false;
	}else{
		$('.errorMsg').html("");
	}

	var $sno = $('#sno').val();
	if($sno == "" || isNaN($sno)){
		$('.errorMsg').html("Please enter valid store number");
		return false;
	}else{
		$('.errorMsg').html("");
	}
	 
	 var $dropdown = $('#dropdown').val();
	if($dropdown==-1){
		$('.errorMsg').html("Please select any value from dropdown");
		return false;
	}else{
		$('.errorMsg').html("");
	}

	 var $cfname=$('#cfname').val();
	if ($cfname=="" || !isNaN($cfname)) {
		$('.errorMsg').html("Please enter Customer's firstname");
		return false;
	}else{
		$('.errorMsg').html("");
	}

	   var $clname=$('#clname').val();
	if ($clname=="" || !isNaN($clname)) {
		$('.errorMsg').html("Please enter Customer's lastname");
		return false;
	}else{
		$('.errorMsg').html("");

	}
	   var $afname=$('#afname').val();
	if (($afname=="") || !(isNaN($afname))) {
		$('.errorMsg').html("Please enter Associate's firstname");
		return false;
	}else{
		$('.errorMsg').html("");
	}
	  var $alname=$('#alname').val();
	if (($alname=="") || !(isNaN($alname))) {
		$('.errorMsg').html("Please enter Associate's lastname");
		return false;
	}else{
		$('.errorMsg').html("");
	}
	   var $uid=$('#uid').val();
	if (($uid=="") || !(isNaN($uid))) {
		$('.errorMsg').html("Please enter valid UserID");
		return false;
	}else{
		$('.errorMsg').html("");
	}

	return true;
}