function check_id(clientId, clientCountry){

if (clientCountry === 'ZW'){

	console.log(clientId);

	// District where ID was collected
	collectionDistrict = clientId.slice(0, 2);
	console.log("ID was collected in District " + collectionDistrict);

	// Village of origin
	familyDistrict = clientId.slice(-2);
	console.log("Client originates from Village " + familyDistrict);

	// Verify letter
	queueNumber = clientId.slice(2, -3);
	console.log("ID Queue Number is " + queueNumber);
	//console.log("Alphabet check letter is " + queueNumber % 23);

}

else if (clientCountry === 'ZA'){

	console.log(clientId);

	// Date of Birth
	var yob = clientId.slice(0, 2);
	var mob = clientId.slice(2, 4);
	var dob = clientId.slice(4, 6);

	var gender = clientId.slice(7, 8);
	var status = clientId.slice(10, 11);

	var clientGender = (gender > 4) ? "Female" : "Male";
	var clientStatus = (status) ? "South African" : "Permanent Resident";

	console.log("Client was born on " + dob + "-" + mob + "-" + yob);
	console.log("Client is " + clientGender);
	console.log("Client is a " + clientStatus);

}

}

var clientId1 = '631222666S70';
var clientCountry1 = 'ZW';

var clientId2 = '8207165128086';
var clientCountry2 = 'ZA';

check_id(clientId1, clientCountry1);

check_id(clientId2, clientCountry2);
