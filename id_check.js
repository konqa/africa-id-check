function check_id(clientId, clientCountry){

if (clientCountry === 'ZW'){

	console.log(clientId);

	// District where ID was collected
	collectionDistrict = clientId.slice(0, 2); 
	console.log("ID was collected in District " + collectionDistrict);

	// Village of origin
	familyDistrict = clientid.slice(-2); 
	console.log("Client originates from Village " + familyDistrict);

	// Verify letter
	queueNumber = clientId.slice(2, -3); 
	//console.log("ID Queue Number is " + queueNumber);
	console.log("Alphabet check letter is " + queueNumber % 23);

}

else if (clientCountry === 'ZA'){
	
	console.log(clientId);

	// Date of Birth
	yob = clientId.slice(0, 2); 
	mob = clientId.slice(2, 4); 
	dob = clientId.slice(4, 6); 
	console.log("Client was born on " + dob + "-" + mob + "-" + yob);

}



}

// Impose Zimbabwean ID numbers
var clientId1 = '631222666S70';
var clientId1 = '631126875Y24';
var clientId1 = '22214781Y00';
var clientId1 = '24087995A24';

var clientCountry1 = 'ZW';

// Impose South Arican ID numbers
var clientId2 = '8206160000000';

var clientCountry2 = 'ZA';

check_id(clientId1, clientCountry1);
check_id(clientId2, clientCountry2);
