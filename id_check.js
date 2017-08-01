// Validate ID

function validateID(clientID, clientCountry) {

if(clientCountry === "ZW"){
	clientID = clientID.toString().replace(" ","");
	clientID = clientID.toString().replace(" ","");
	clientID = clientID.toString().replace("-","");
	var ZWIDRegEx = /^[0-9]{2}[0-9]{6,7}[a-zA-Z][0-9]{2}/;
	if (ZWIDRegEx.test(clientID)) return true; return false;
}

if(clientCountry === "NG"){
	clientID = clientID.toString().replace(" ","");
	var NGIDRegEx = /^[0-9]{11}/;
	if (NGIDRegEx.test(clientID)) return true; return false;
}

if(clientCountry === "GM"){
	clientID = clientID.toString().replace(" ","");
	var GMIDRegEx = /^[0-9]{11}/;
	if (GMIDRegEx.test(clientID)) return true; return false;
}

if(clientCountry === "ZA"){
	clientID = clientID.toString().replace(" ","");
	r = /^\d{10}[0-1]\d{2}$/;
	if (! r.test(clientID)) return false;
	n = clientID;
	p1 = parseInt(n[0]) + parseInt(n[2]) + parseInt(n[4]) + parseInt(n[6]) + parseInt(n[8]) + parseInt(n[10]);
	p2 = (parseInt(n[1] + n[3] + n[5] + n[7] + n[9] + n[11]) * 2).toString();
	p3 = 0;
	for (i=0; i < p2.length; i++) {
	p3+= parseInt(p2[i]);
	}
	check = 10 - (p1 + p3).toString()[(p1 + p3).toString().length -1];
	check_char = check > 9 ? check.toString()[1] : check.toString();
	if (check_char != clientID[12]) return false; return true;
}

}

// Translate ID

function translateID(clientID, clientCountry){

if (clientCountry === 'ZW'){

//	console.log(clientID);

  if(validateID(clientID1, clientCountry1)){

	// District where ID was collected
	collectionDistrict = clientID.slice(0, 2);
//	console.log("ID was collected in District " + collectionDistrict);

	// Village of origin, usually from the paternal side
	familyDistrict = clientID.slice(-2);
// console.log("Client originates from Village " + familyDistrict);

	// Verify letter - Queue Number
	queueNumber = clientID.slice(2, -3);
//	console.log("Unique Identifier is " + queueNumber);

	console.log(clientID + " is as a valid Zimbabwean ID number for a resident of " + collectionDistrict + " district whose paternal parent originates from " + familyDistrict + " village.");

	// console.log("Alphabet check letter is " + queueNumber % 23);

    } else {
	console.log("This is not a valid Zimbabwean ID Number.");
    }

}

else if (clientCountry === 'ZA'){

//	console.log(clientID);

  if(validateID(clientID2, clientCountry2)){

	// Date of Birth
	var dob = { year:clientID.slice(0, 2), month:clientID.slice(2, 4), date:clientID.slice(4, 6) };

	var gender = clientID.slice(7, 8);
	var status = clientID.slice(10, 11);

	var clientGender = (gender > 4) ? "Female" : "Male";
	var clientStatus = (status) ? "South African" : "Permanent Resident";

	console.log(clientID + " is a valid South African ID number for a " + clientGender + " " + clientStatus + " who was born on " + dob["date"] + " " + dob["month"] + " " + dob["year"] + ".");

    } else {

	console.log("This is not a valid South African ID Number.");

    }

}

}

var clientID1 = '631222666S70';
var clientCountry1 = 'ZW';

var clientID2 = '8207165128086';
var clientCountry2 = 'ZA';

translateID(clientID1, clientCountry1);

translateID(clientID2, clientCountry2);
