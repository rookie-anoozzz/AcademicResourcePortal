// functions for the flagging operation
// Assuming that unique id is in the format "subjectCode-id" eg. CS1L001235

var flag = 0;

var flagToggle = function(uniqueID){
    if(flag === 0){
        var response = flagRequest(uniqueID);
        if(response === 1)
            flag = 1;
    }
    else if(flag === 1){
          var response = unflagRequest(uniqueID);
          if(response === 0)
              flag = 0;
    }
};
