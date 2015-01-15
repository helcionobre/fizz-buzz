
$(document).ready(function() {

	function fizzBuzz(par) 
	{
			//alert("got it");
			//alert(par);
			for (i = 1; i <= par; i++) 
			{
				if (i % 3 === 0 && i % 5 === 0) 
				{
					//alert("par1");
					$(".numberlist").append("<li>FizzBuzz</li>");
					
				}	
				else if (i % 3 === 0) 
				{
					$(".numberlist").append("<li>Fizz</li>");
					//alert("par2");
				}
				else if (i % 5 === 0) 
				{
					$(".numberlist").append("<li>Buzz</li>");
					//alert("par3");
				}
				else 
				{
					$(".numberlist").append("<li>" + i + "</li>");
					//alert("par4");
				}
			}
			//alert(par);
	};

	// assign number to variable after button click
	$(".addnumber").on("click", ".addbutton", function() 
	{
		var value_string = document.getElementById("enternumber").value;
		var value_number = parseInt(value_string);
	
	// check if enter number
		if (isNaN(value_number)) 
		{
			alert ("Please enter a number");
		}
		else if (value_number % 1 != 0) {
			alert ("Please enter integer");
		}
		else 
		{
			$(".numberlist").empty();
			fizzBuzz(value_number);	
		}
	});
});
