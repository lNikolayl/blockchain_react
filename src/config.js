export const contract_address = "0xe6B30C925e6297EDC8623586548F0F4175bA8cA7"
export const contract_abi = [
      {
        "constant": true,
        "inputs": [],
        "name": "documentsCount",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
          }
        ],
        "name": "get",
        "outputs": [
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                  },
                  {
                    "internalType": "string",
                    "name": "value",
                    "type": "string"
                  }
                ],
                "internalType": "struct Documents.Field[]",
                "name": "header",
                "type": "tuple[]"
              },
              {
                "components": [
                  {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                  },
                  {
                    "internalType": "string",
                    "name": "value",
                    "type": "string"
                  }
                ],
                "internalType": "struct Documents.Field[]",
                "name": "body",
                "type": "tuple[]"
              },
              {
                "components": [
                  {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                  },
                  {
                    "internalType": "string",
                    "name": "value",
                    "type": "string"
                  }
                ],
                "internalType": "struct Documents.Field[]",
                "name": "footer",
                "type": "tuple[]"
              }
            ],
            "internalType": "struct Documents.Document",
            "name": "",
            "type": "tuple"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                  },
                  {
                    "internalType": "string",
                    "name": "value",
                    "type": "string"
                  }
                ],
                "internalType": "struct Documents.Field[]",
                "name": "header",
                "type": "tuple[]"
              },
              {
                "components": [
                  {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                  },
                  {
                    "internalType": "string",
                    "name": "value",
                    "type": "string"
                  }
                ],
                "internalType": "struct Documents.Field[]",
                "name": "body",
                "type": "tuple[]"
              },
              {
                "components": [
                  {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                  },
                  {
                    "internalType": "string",
                    "name": "value",
                    "type": "string"
                  }
                ],
                "internalType": "struct Documents.Field[]",
                "name": "footer",
                "type": "tuple[]"
              }
            ],
            "internalType": "struct Documents.Document",
            "name": "data",
            "type": "tuple"
          }
        ],
        "name": "createDoc",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ]