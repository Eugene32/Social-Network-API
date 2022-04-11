![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
# Social-Network-API

Social Network API using MongoDB

### Description:  
This is an REST API for a social network that uses a NoSQL database (MongoDB) implemented via Mongoose ODM to create a schema.  MongoDB is one of the best choices for such social application in order to accomodate large amount of data as well as its flexibility.

### Technologies:
- Node Express.js
- MongoDB wrapped over by Mongoose.
- dotnev and nodemon as devDependencies.
- Insomnia to test functionality.


## TABLE OF CONTENTS:

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Demo](#demo)                                                        
* [Questions](#questions)
* [License](#license)

### Installation:    
- Clone or fork the repository.

			`git@github.com:Eugene32/Social-Network-API.git`

- Under console, command prompt, or terminal, change to directory where server.js is located. Type or copy the code below

			`npm i`

- Create .env file on the root directory (where server.js is located).
    - The file must contain the following:
    
       			`db=mongodb://localhost/social_db`
     
- Create a .gitignore file (under root directory) and must contain:

     			`node_modules`
     
     			`.DS_Store`
     
     			`.env`


### Usage:  
- Can be used for any device.

### Contributing:  
- None

### Tests:  
- No testing modules had been made for this application

### Demo:  
- Demo page: 

![alt text][logo]

[logo]: assets/images/demo/demo1.png "REST API demo"

- Video link:  [Video: Users](https://drive.google.com/file/d/1v-e1Yybqx7KxnCljpmiPk92psB3gJTKs/view)
- Video link:  [Video: Friends](https://drive.google.com/file/d/1SpbD6gGUeYRxAzIaKNynVO3HT7IibjfW/view)
- Video link:  [Video: Thoughts](https://drive.google.com/file/d/1Rg8M0uI_wsASL09xhYZns_hA1pBy_oiv/view)
- Video link:  [Video: Comments](https://drive.google.com/file/d/1Li9IflAyNNidwE8yE8xGHOkM78Kcklns/view)

### Questions: 

Github:  [eugene32](https://github.com/eugene32)

Email:   [ekahiyang@gmail.com](mailto:ekahiyang@gmail.com)


### License:  
The MIT License

	Permission is hereby granted, free of charge, to any person obtaining a 
      copy of this software and associated documentation files (the "Software"), 
      to deal in the Software without restriction, including without limitation 
      the rights to use, copy, modify, merge, publish, distribute, sublicense, 
      and/or sell copies of the Software, and to permit persons to whom the Software 
      is furnished to do so, subject to the following conditions:

      The above copyright notice and this permission notice shall be included in all 
      copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
      INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A 
      PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT 
      HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF 
      CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE 
      OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[MIT License link](https://opensource.org/licenses/MIT)
