sample = {"J. K. Rowling":"0","Marjorie Rowling":"1","Nick Rowling":"2","Louise Rowling":"3","W. E. Rowling":"4","Sheryl L. Rowling":"5","John R. Rowling":"6","Michael Rowling Hawkesworth":"7","Amy Rowling":"8","J.Thompson Rowling":"9","C. W. Rowling":"10","Noël Rowling":"11","Dr. Xavier Joss Rowling":"12","Mary J Rowling":"13","P.W. and Lang Noella Rowling":"14","Charles Rowling":"15","Matthew Rowling":"16","Cathy Rowling":"17","Marije Rowling":"18","Sarah Rowling":"19","Edwina Rowling":"20","J K Rowling":"21","ROWLING":"22","J.K . Rowling":"23","James Rowling":"24","J.K. Rowling":"25"}		
		
		
		function fun()
				{
				 let x = document.getElementById("cc").value;
				 var y = sample[x]
				 console.log(y);
		function ajaxCall() {
			$.ajax({
			       
				url:'https://openlibrary.org/search/authors.json?q=rowling',
				type: "GET",
				success: function (data) {
				
				let temp  = "";	
				 			 
					for (const [key, value] of Object.entries(data))
					{		
					   if (key == "docs"){
					   
					      	temp += "<tr>";
						temp += "<td>"+ "TYPE" +"</td>";	
						temp += "<td>"+ value[y]["type"] +"</td></tr>";
						temp += "<tr>";
						temp += "<td>"+ "NAME" +"</td>";	
						temp += "<td>"+ value[y]["name"] +"</td></tr>";						
						temp += "<tr>";
						temp += "<td>"+ "BIRTH DATE" +"</td>";	
						temp += "<td>"+ value[y]["birth_date"] +"</td></tr>";
						temp += "<tr>";
						temp += "<td>"+ "VERSION" +"</td>";	
						temp += "<td>"+ value[y]["_version_"] +"</td></tr>";
					
						}		
					 }
			
				document.getElementById("data").innerHTML = temp;	
										
								
				},


				error: function (error) {
					console.log(`Error ${error}`);
				}
			});
		}
		ajaxCall();
				 				 
				}
		
				

		
	
