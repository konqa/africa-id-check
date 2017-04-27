// Validate ID

function validateID(clientID, clientCountry) {

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
if (check_char != clientID[12]) return false;
//return true;

console.log(clientID + " is a valid SA ID Number.");
}

}


// Translate ID

function translateID(clientId, clientCountry){

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

translateID(clientId1, clientCountry1);

translateID(clientId2, clientCountry2);

validateID(clientId2, clientCountry2);
