const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';

function getRow(firstRow, secondRow) {

	firstRowResult = getRowsLetters(firstRow);
	secondRowResult = getRowsLetters(secondRow);

	if (firstRowResult > secondRowResult){ return firstRow; }
	else { return secondRow; }
	
}

function getRowsLetters(row){
	
	let counter = 0;
	for (let i = 0; i < row.length; i++){
		if (row.charAt(i) == "а") {
    		 counter++;
  		}
	}
    return counter;
	 
}

console.log(getRow(firstRow, secondRow)); // мама мыла раму