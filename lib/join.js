//Function for generate the genomic coordinates from a GenCoord object
function GenCoordJoin(obj)
{
	//Check for chromosome
	if(typeof obj.chromosome === 'undefined')
	{
		//Check for chr
		if(typeof obj.chr !== 'undefined')
		{
			//Save the chr
			obj.chromosome = obj.chr;
		}
		else
		{
			//Throw error
			throw new Error('No chromosome on object');
		}
	}

	//Check for start position
	if(typeof obj.start === 'undefined'){ throw new Error('No start position on object'); }

	//Check for end position
	if(typeof obj.end === 'undefined'){ throw new Error('No end position on object'); }

	//Return the genomic coordinates
	return obj.chromosome + ':' + obj.start + '-' + obj.end;
};

//Exports to node
module.exports = GenCoordJoin;
