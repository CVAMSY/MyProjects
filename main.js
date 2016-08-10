var productData = [];

$(document).ready(function(){
	var html = "";

	$.ajax({url: 'data/jsonResp.txt', success: function(resp){
  	productData = JSON.parse(resp).productList;

  	for(var i=0;i<productData.length;i++){
  		html += "<div class='col-md-4 col-xs-12' onmouseover='highlight(this)'><div class='product'><div class='img'>";
  		html += "<img src="+productData[i].imageUrls.sm+" class='img-responsive'/></div>";
  		html += "<div class='description'>"+productData[i].description+"</div>";
  		html += "<div class='price'>$"+productData[i].networkPrice+"</div>";
  		html += "<div class='btn-div'><input type='button' class='btn btn-default btn-block' value='View More'/></div>";
  		html += "<input type='hidden' value="+productData[i].itemNumber+" id='item-number'/>";
		html += "</div></div>";  		
  	}

  	$('#products').html(html);
  }});
});

function highlight(el){
	var id = $(el).find('#item-number').val();
	for(var i=0;i<productData.length;i++){
		if(id == productData[i].itemNumber){
			$('.hero-image .img').html("<img class='img-responsive' src="+productData[i].imageUrls.md+"></img>");
			$('.hero-image .desc').html(productData[i].description);
			$('.hero-image .atc').html("<input type='button' value='Add to Cart' class='btn btn-primary btn-block' id='atc' onClick='showAlert("+productData[i].networkPrice+")'/>");
			$('.hero-image .price').html("$"+productData[i].networkPrice);
		}
	} 
};

function showAlert(a){
	alert("Price of the Item: $"+a);
}