

function ajaxCall() {
	$("#loading").show();
    let x = document.getElementById("cc").value;
	if (x === "") { alert("Plase give some name for search"); }
	else {
		let u = 'https://openlibrary.org/search/authors.json?q=';
		let URL = u + x;		
		$.ajax({

			url: URL,
			type: "GET",
			success: function (data) {
				$("#loading").hide();
				let temp = "";
	
				temp += "<tr>";
				temp += "<td>" + "S.No" + "</td>";
				temp += "<td>" + "NAME" + "</td>";
				temp += "<td>" + "TYPE" + "</td>";
				temp += "<td>" + "BIRTH DATE" + "</td>";
				temp += "<td>" + "WORK COUNT" + "</td>";
				temp += "<td>" + "TOP SUBJECTS" + "</td></tr>";
	
				for (const [key, value] of Object.entries(data)) {
					if (key == "numFound" && value == 0) { document.getElementById("msg").innerHTML = "No Author's are available in this name "; }
	
					else {
						if (key == "docs") {
	
							for (var i = 0; i < value.length; i++) {
	
								temp += "<tr>";
								temp += "<th>" + i + "</th>";
								temp += "<td id =" + value[i]['name'] + " onClick=fun2(this),document.getElementById('author').style.display='block';document.getElementById('fade').style.display='block'>" + value[i]["name"] + "</td>";
								temp += "<td>" + value[i]["type"] + "</td>";
								if (value[i]["birth_date"] === undefined) { temp += "<td>" + "--" + "</td>"; } else { temp += "<td>" + value[i]["birth_date"] + "</td>"; }
								temp += "<td>" + value[i]["work_count"] + "</td>";
								if (value[i]["top_subjects"] === undefined) { temp += "<td>" + "--" + "</td>"; } else { temp += "<td>" + value[i]["top_subjects"] + "</td></tr>"; }
	
							}
	
						}
					}
	
				}
	
				document.getElementById("data").innerHTML = temp;
	
			},
	
	
			error: function (error) {
				console.log(`Error ${error}`);
				$("#loading").hide();
			}
		});
	
	}
	}




//--------------------------------------------------------------------------------------------------------
function fun2(a) {
	
	let u = 'https://openlibrary.org/search/authors.json?q=';
	let URL = u + a.innerText;
	ajaxCall1(URL);
	function ajaxCall1(URL) {
		$.ajax({

			url: URL,
			type: "GET",
			success: function (data) {


				for (const [key, value] of Object.entries(data)) {
					if (key == "numFound" && value == 0) { document.getElementById("msg").innerHTML = "No Author's are available in this name "; }

					else {
						if (key == "docs") {
							for (var i = 0; i < value.length; i++) {

								document.getElementById("name").innerHTML = value[i]["name"];
								document.getElementById("type").innerHTML = value[i]["type"];
								document.getElementById("work_count").innerHTML = value[i]["work_count"];
								document.getElementById("_version_").innerHTML = value[i]["_version_"];
								let date;
								if (value[i]["birth_date"] === undefined) { date = "--"; } else { date = value[i]["birth_date"]; }
								document.getElementById("birth_date").innerHTML = date;
								document.getElementById("top_work").innerHTML = value[i]["top_work"];
								break;
							}

						}
					}

				}

			},


			error: function (error) {
				console.log(`Error ${error}`);
			}
		});
	}

}


function closeProfile() {
	
	document.getElementById("author").style.display="none";
	document.getElementById("fade").style.display="none";
}
 

//--------------------------------------------------------------------------------------------------------------------

    
