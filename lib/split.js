//Split genome region
function GenCoordSplit(reg)
{
  //Replace spaces
  reg = reg.split(' ').join('');

  //Spli by :
  var spl = reg.split(':');

  //Checl the length
  if(spl.length != 2){ throw new Error('Invalid genomic region.'); }

  //Get the chromosome
  var chr = '' + spl[0];

  //Replace special chars
  chr = chr.replace(/chr_/g, '').replace(/chr/g, '');

  //Split for get the positions
  spl = spl[1].split('-');

  //Check the length
  if(spl.length == 0 || spl.length > 2){ throw new Error('Invalid genomic region.'); }

  //Get the start
  var start = parseInt(spl[0]);

  //Initialize the end
  var end = start;

  //Check for only one position
  if(spl.length == 2)
  {
    //Get the real end position
    end = parseInt(spl[1]);
  }

  //Return
  return {"chr": chr, "start": start, "end": end};
};

//Exports to node
module.exports = GenCoordSplit;
