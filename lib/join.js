//Function for generate the genomic coordinates from a GenCoord object
function GenCoordJoin(obj)
{
	//Check for chromosome
	if(typeof obj.chr === 'undefined'){ throw new Error('No chromosome on object'); }

	//Check for start position
	if(typeof obj.start === 'undefined'){ throw new Error('No start position on object'); }

	//Check for end position
	if(typeof obj.end === 'undefined'){ throw new Error('No end position on object'); }

	//Return the genomic coordinates
	return obj.chr + ':' + obj.start + '-' + obj.end;
};

//Exports to node
module.exports = GenCoordJoin;
