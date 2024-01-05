const ifpsClient = require('ipfs-http-client');
const fs = require('fs');
const ipfs = ipfsClient('http://localhost:5001');

async function uploadToIPFS(filePath){
    const fileBuffer = await fs.promises.readFile(filePath);
    const result = await ipfs.add({content:fileBuffer});
    const cid = result[0].cid;
    const ipfsGatewayUrl = `https://ipfs.io/ipfs/${cid}`;
    console.log(`IPFS Gateway URL: ${ipfsGatewayUrl}`);
}

const filePath = unidao.jpg;
uploadToIPFS(filePath);