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

    // Model a Candidate
    struct Field {
        string name;
        string value;
    }

    // struct Document {
    //     uint headerCount;
    //     uint bodyCount;
    //     uint footerCount;
    //     mapping(uint => Field) header;
    //     mapping(uint => Field) body;
    //     mapping(uint => Field) footer;
    // }

    struct Document {        
        Field[] header;
        Field[] body;
        Field[] footer;
    }

    uint private documentsCount;

    // Document[] private documents;
    
    mapping(uint => Document) documents;

    Document private currentDoc;

    // function addHeaderToDoc(string memory fieldName, string memory fieldValue) public{
    //     Document storage doc = documents[documentsCount];
    //     doc.header[doc.headerCount] = Field(fieldName, fieldValue);
    //     doc.headerCount++;
    //     documents[documentsCount] = doc;
    // }

    // function addBodyToDoc(string memory fieldName, string memory fieldValue) public{
    //     Document storage doc = documents[documentsCount];
    //     doc.body[doc.bodyCount] = Field(fieldName, fieldValue);
    //     doc.bodyCount++;
    // }

    // function addFooterToDoc(string memory fieldName, string memory fieldValue) public{
    //     Document storage doc = documents[documentsCount];
    //     doc.footer[doc.footerCount] = Field(fieldName, fieldValue);
    //     doc.footerCount++;
    // }

    // function getHeader(uint headerIndex, uint docIndex) public returns(string memory name, string memory value){
    //     return (documents[docIndex].header[headerIndex].name, documents[docIndex].header[headerIndex].value);
    // }bytes32[][][][]

    function createDoc(Document memory data) public {//["header:name-value;body:name-value;footer:name-value;"]
        Field[] memory header = Field[](data.header);
        for(uint i = 0; i<header.length; i++){
            documents[documentsCount].header.push(header[i]);
        }
        Field[] memory body = Field[](data.header);
        for(uint i = 0; i<body.length; i++){
            documents[documentsCount].header.push(body[i]);
        }
        Field[] memory footer = Field[](data.header);
        for(uint i = 0; i<footer.length; i++){
            documents[documentsCount].header.push(footer[i]);
        }
        documentsCount++;        
    }

    // function addFieldToDoc(string memory fieldType, string memory fieldName, string memory fieldValue) public {
    //     Document memory doc = documents[documentsCount];
    //     if(fieldType == "header"){
    //         doc.header[doc.headerCount] = Field(fieldName, fieldValue);
    //         doc.headerCount++;
    //     }else if(fieldType == "body"){
    //         doc.body[doc.bodyCount] = Field(fieldName, fieldValue);
    //         doc.bodyCount++;
    //     }else if(fieldType == "footer"){
    //         doc.footer[doc.footerCount] = Field(fieldName, fieldValue);
    //         doc.footerCount++;
    //     }
    // }

}
