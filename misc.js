<html>
<head>
<script>

//new way 
function testSplice(a) {
  //alert(arguments.length);
  if (arguments.length > 5) {
    var ary = Array.prototype.slice.call(arguments);
    alert(ary.splice(startIndex, noItems));
  }
}
//old way
function testRecur() {
  var recordIndexStart = recordIndex = 2,  pageSize = 3 /* num of records to fetch*/,  output="", cachedRecords;  	
  (function test(a) {
    //caculate the ending record index 	
    var recordIndexEnd = recordIndexStart + pageSize;
    cachedRecords = cachedRecords || Array.prototype.slice.call(arguments); // cache the record set, so we dont need to hit the database again   
    //alert(args);
    if (recordIndex < recordIndexEnd) { // get each record from cache recordset until we hit page size/ req num of records
  	//get first record in the recordset, and advance index pointer to the next one   
      output += cachedRecords[recordIndex++] + ",";
      //call recursively to the the other records (loop not included :) 
      test(a); //test(1,2,3,4,5,6,7,8,9); 
    } else // we have got the records
  	//out put the page of records  
      alert(output);
  })(1,2,3,4,5,6,7,8,9); // pass in large set of records
}

</script>
</head>
<body>
  <button onclick="testSplice(1,2,3,4,5,6,7,8,9)">click to splice me</button>
  <button onclick="testRecur()">click me to test recurr</button>
  </body>
</html>