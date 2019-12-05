export const contract_address = "0x00380532185f2E8B15a4bA545c296357adeCc527"
export const contract_abi = [
  {
    "constant": true,
    "inputs": [],
    "name": "documentsCount",
    "outputs": [
      {
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
                "name": "name",
                "type": "string"
              },
              {
                "name": "value",
                "type": "string"
              }
            ],
            "name": "header",
            "type": "tuple[]"
          },
          {
            "components": [
              {
                "name": "name",
                "type": "string"
              },
              {
                "name": "value",
                "type": "string"
              }
            ],
            "name": "body",
            "type": "tuple[]"
          },
          {
            "components": [
              {
                "name": "name",
                "type": "string"
              },
              {
                "name": "value",
                "type": "string"
              }
            ],
            "name": "footer",
            "type": "tuple[]"
          }
        ],
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
                "name": "name",
                "type": "string"
              },
              {
                "name": "value",
                "type": "string"
              }
            ],
            "name": "header",
            "type": "tuple[]"
          },
          {
            "components": [
              {
                "name": "name",
                "type": "string"
              },
              {
                "name": "value",
                "type": "string"
              }
            ],
            "name": "body",
            "type": "tuple[]"
          },
          {
            "components": [
              {
                "name": "name",
                "type": "string"
              },
              {
                "name": "value",
                "type": "string"
              }
            ],
            "name": "footer",
            "type": "tuple[]"
          }
        ],
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