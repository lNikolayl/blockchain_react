pragma solidity 0.5.8;
pragma experimental ABIEncoderV2;

// Document:{
//     header: [
//         {"name", "value"},
//         {"name", "value"},
//         {"name", "value"}...
//     ],
//     body: [
//         {"name", "value"},
//         {"name", "value"},
//         {"name", "value"}...
//     ],
//     footer: [
//         {"name", "value"},
//         {"name", "value"},
//         {"name", "value"}...
//     ]
// }

contract Documents {
    
    function get(uint index) public view returns(Document memory){
        return documents[index];
    }

    // Model a Candidate
    struct Field {
        string name;
        string value;
    }

    struct Document {        
        Field[] header;
        Field[] body;
        Field[] footer;
    }

    uint public documentsCount;
    
    mapping(uint => Document) documents;

    Document private currentDoc;

    function createDoc(Document memory data) public {
        Field[] memory header = Field[](data.header);
        for(uint i = 0; i<header.length; i++){
            documents[documentsCount].header.push(header[i]);
        }
        Field[] memory body = Field[](data.body);
        for(uint i = 0; i<body.length; i++){
            documents[documentsCount].body.push(body[i]);
        }
        Field[] memory footer = Field[](data.footer);
        for(uint i = 0; i<footer.length; i++){
            documents[documentsCount].footer.push(footer[i]);
        }
        documentsCount++;        
    }
}
