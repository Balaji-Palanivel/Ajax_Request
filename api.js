		function fun()
				{				 
				 let x = document.getElementById("cc").value;
				 let u ='https://openlibrary.org/search/authors.json?q=';
				 let URL = u+x;				
				 ajaxCall(URL);
				 }
		function ajaxCall(URL) {
			$.ajax({
			       
				url: URL ,
				type: "GET",
				success: function (data) {
				
				let temp  = "";	
				temp += "<tr>";
						temp += "<td>"+ "#" +"</td>";
						temp += "<td>" +"NAME"+ "</td>";
						temp += "<td>" +"TYPE"+ "</td>";
						temp += "<td>" +"BIRTH DATE"+ "</td>";
						temp += "<td>" +"WORK COUNT"+ "</td>";
						temp += "<td>" +"TOP SUBJECTS"+ "</td>";
						temp += "<td>" +"VERSION"+ "</td></tr>";
							 
					for (const [key, value] of Object.entries(data))
					{	
					  if (key == "numFound" && value == 0)
					  {
					   
		  			     document.getElementById("msg").innerHTML = "No Author's are available in this name ";
					  }	
					  else{
					   if (key == "docs")
					   {
					   
					   for (var i=0;i<value.length;i++)
					   {   						
					      	temp += "<tr>";
					      	temp += "<th>"+ i +"</th>";
						temp += "<td>"+ value[i]["name"] +"</td>";	
						temp += "<td>"+ value[i]["type"] +"</td>";
						temp += "<td>"+ value[i]["birth_date"] +"</td>";
						temp += "<td>"+ value[i]["work_count"] +"</td>";
						temp += "<td>"+ value[i]["top_subjects"] +"</td>";
						temp += "<td>"+ value[i]["_version_"] +"</td></tr>";												
					  }  
						}		
					}
					}
			
				document.getElementById("data").innerHTML = temp;	
										
								
				},


				error: function (error) {
					console.log(`Error ${error}`);
				}
			});
		}
				 				 	
