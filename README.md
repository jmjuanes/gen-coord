# gen-coord

[![npm](https://img.shields.io/npm/v/gen-coord.svg?style=flat-square)](https://www.npmjs.com/package/gen-coord)
[![npm](https://img.shields.io/npm/dt/gen-coord.svg?style=flat-square)](https://www.npmjs.com/package/gen-coord)

Manage genomic coordinates (Bioinformatics).

## Install

Use NPM for install the package:

```
npm install gen-coord
```

## Usage

### Split(str)

Split a genomic coordinate and get an object with the next attributes:

- `chromosome`: chromosome for the coordinate.
- `start`: start position.
- `end`: end position.

```javascript
//Import gen-coord
var genCoord = require('gen-coord');

//Split a coordinate string
genCoord.Split('1:12345-67890'); // returns { chromosome: '1', start: 12345, end: 67890 }
```

### Join(obj)

Returns a new string with the genomic coordinate.

```javascript
//Import gen-coord
var genCoord = require('gen-coord');

//Join a coordinate object
genCoord.Join({ chromosome: '1', start: 12345, end: 67890 }); // returns '1:12345-67890'
```
