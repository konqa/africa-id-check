# Africa ID Check

**A system to verify and translate African National Identity Numbers.**

Each country in Africa has its own way of uniquely identifying its citizens and residents mostly from birth by use of an ID number. These ID numbers follow a different syntax or formation, country by country.

This project aims to create an application where the user can punch in an ID number, select the country and the result will tell the user if the supplied ID number is in a valid format for the specified country.

###Case: Zimbabwe

Zimbabwean ID number follows this format: **CC-NNNNNNN AVV**.
* The first two digits (CC) represent the district in which the applicant resides or registered for the national document.
* The next six digits (NNNNNN) denote the unique personal code for the applicant.
* The next character is an alphabetical check letter (A).
* The last two digits (VV) denote the village of origin usually from the paternal side.

So when a user punches an ID number such as 23-5252121 T56, the application will respond with the message:

> This as a valid Zimbabwean ID number formation.
> The client is from Zaka village.

To make the application more useful, it will also give the user the district (2 digit Code) where the ID was physically collected and the village of origin (2 digit Code) of the ID holder. Work is in place to obtain the actual district and village names.

###Case: South Africa

A South African ID number is a 13-digit number which is defined by the following format: **YYMMDDSSSSCAZ**.

* The first six digits (YYMMDD) are based on your date of birth – 23 January 1988 is 880123.
* The next four digits (SSSS) are used to define your gender –  females are assigned numbers in the range 0000-4999 and males from 5000-9999.
* The next digit (C) shows if you are an SA citizen – 0 – or a permanent resident – 1.
* The next digit (A) was used until the late 1980s to indicate a person’s race. This has been eliminated and old ID numbers were reissued to remove this and now there is either an 8 or 9 without a determined meaning.
* The last digit (Z) is a checksum digit – used to check that the number sequence is accurate using the Luhn algorithm.

The graphic below details the different sections of an ID number, based on the fictitious sequence 8801235111088.

![south-african-id-number](https://cloud.githubusercontent.com/assets/775284/26289613/bdd2d044-3ea1-11e7-9127-a1458a16b40e.jpg)

So when a user enters an ID number and selects South Africa, if the ID number is valid as per above formation the response from the application will be:

>This as a valid South African ID number.
>The client is a female South African citizen who was born on 16 June 1972."

###Case: Rest of Africa

Currently working on obtaining formats and meanings of other African ID numbers.
