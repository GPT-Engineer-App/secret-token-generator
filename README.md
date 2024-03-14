# secret-token-generator

Generate an app that will generate secret token and please follow this documentation clearly and accurately: AUTHENTICATION
To facilitate the authentication of REST/JSON payment requests, MPAP employs a robust signature-based authentication mechanism. This method entails the inclusion of a unique service ID and password within the request, where the service ID corresponds to the assigned unique identifier, and the password is represented by the assigned key or password. The verification of request authenticity is achieved through the generation of a signature derived from a composite of parameters, including the service ID, key or password, and potentially other request-specific data. It's noteworthy that HTTP Basic Authentication is not utilized in this process. The integrity and security of the request are upheld through the utilization of the signature string.
The signature is assigned as the value of the signature parameter inside requests and responses as follows:
	•	Concatenate all parameter values in a single string.
	•	Use hyphen (-) in place of any empty values.
	•	Calculate HMAC-SHA256 code for the string by using the secret key provided.
	•	Convert the result to lower case.
EXAMPLE API CREDENTIALS:
PARAMETER
VALUE
username
merchant_one
passwork
2tHA35v%Lgf7
secret_key
asQm98A#@VVz0K6W6$6ayD*F6MekoS

Sample of POSTMAN Pre-request Script:
	•	Concatenate all parameter values in a single string.
	•	Use hyphen (-) in place of any empty values.

javascript: let secretKey = pm.environment.get("secret_key") 
let params = JSON.parse(pm.request.body.raw); 
let signature = ""; 
for (var param in params) { 
    if (param != "signature") { 
        if (param == "passwork") { 
            params[param] = pm.environment.get("passwork"); 
        } 
        if (param == "service_id") { 
            params[param] = pm.environment.get("service_id"); 
        } 
        if (params[param] == null || params[param] == "") { 
            params[param] = "-"; 
        } 
        if (typeof(params[param])  == "object") { 
            for (var p in params[param]) { 
                if (params[param][p] == null || params[param][p] == "") { 
                    params[param][p] = "-"; 
                } 
                signature += params[param][p]; 
            } 
        } else { 
            signature += params[param]; 
        } 
    } 
}

Then: merchant_one2tHA35v%Lgf730000PHPDEVTESTING001DEVTESTING001bank-qrhttp://your.site/callback http://your.site/return_url1234567890Juan Dela Cruzjuan.dela_cruz@gmail.com09167608199Manila, PHThis is a Testing.Merchant One Philippines


And then: let sig = CryptoJS.HmacSHA256(signature, secretKey).toString();


Then: e97311045a702a41e34da18d792b7a4481b865011e8a7c12775b44c11af0a69a


Response: "signature": "e97311045a702a41e34da18d792b7a4481b865011e8a7c12775b44c11af0a69a"


## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/secret-token-generator.git
cd secret-token-generator
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Tech stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/)

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
