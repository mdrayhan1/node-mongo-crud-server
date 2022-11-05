/* 
projects folder
1.server folder create. node-mongo-crud-server
2.npm init -y
3.code .
4.index.js [file create vs code a]
5.npm i express cors mongodb
6.const express = require('express'); //req
7.const cors = require('cors'); 
8.const app = express(); 
9.const port = process.env.PORT || 5000;


middleware
9.1.
app.use(cors());
9.2.
app.use(express.json()); 

[poet reqest er data gulo pawar jonno]



10.app.get('/', (req, res) => {
    res.send('Hello from node mongo crud server');
});

[default root uel create]

11.
app.listen(port, () => {
    console.log(`Listening to port ${port}`);
})

[1st uporer port ta ka listen kora hocce, 2nd -mongodb te ei nodemon ta j thikmoto kore coltece seta bujar jonno clg kora]

12.
*/

/* mongodb
1.mongodb atlas-signup with google
connect korte
2.quick start
username-dbuser2
generate password-copy-create user
username and passward save -server side code a
network access [check ip address- 0.0.0./0(include your current ip address) ace kina]
3.datbase-connect-coonnect your application-checked[include full driver]-copy icon-copy
4.app.use er nice paste
5.mongodb client  line ta cut kore top a paste
6.copy kora username o password theke username o password name uri te paste
7.google searh-node mongodb crud-usage examaple-
8.iseart operation-insert a document
9.server side theke ei code tuku delete[clint.connect---client.close();});]
10.async await dia call function with try finally likha
11.try{

}
finall{

}
12.database er 1 ta collection k hit korte hobe
try {
        const userCollection = client.db('nodeMongoCrud').collection('users');
13.     const user = {
    name: 'testing test',
    email: 'testing@gmail.com'
}   
14.const result = await userCollection.insertOne(user)
    console.log(result);
15.nodemon a dekha jabe
{
    acknowledged: true,
    insertedId: new objected("635-----")
}
16.database a collections er modde refresh korle search namescope er niche amar database er name thakbe eta expand korle database collection name show korbe o etar opor click korle data dekha jabe, abr server er code collection er name o email a onno name o emai replace korle mogo database a ager tar sathe nice eta o jog hobe
//clinet side er 9 no porjonto j data server side pathano hoicilo ta ekhan theke receive korteci

17.try er modde user collection rekhe baki delete
    const userCollection = client.db('nodeMongoCrud').collection('users');

18.app.post('/users', (req, res) => {
            const user = req.body;
            console.log(user);
                    });
client side theke server side a asa ei porjonto

datbase a pathanor kaj start
 app.post('/users', async (req, res) => {
            const user = req.body;
            console.log(user);
19.         const result = await userCollection.insertOne(user)
21.           res.send(result);
        });
20. 19 no step a await use er karone app.post er line a  async (req, res) req res er age async use

22.(1st prove)res.send(result); lekhar por nodemon a {name: 'Isac Ali', address: 'England', email: 'isac@gmail.com'} asbe
23.(2nd prove)client side er wesite a giya add user a click korle console a 1st line aet asbe {name: 'Isac Ali', address: 'England', email: 'isac@gmail.com'}
24.(2nd prove)ar 2nd line a  eta asbe {acknowledged: true, insertedId: new objected("635-----")} 
25.(2nd prove)ar node mon a abar 22 no step ta asbe
26.(3rd prove)datbase a collections a refresh korle user ekadik hobe
27.jehetu amra clinwt website er console acknowlwdeged paici tai 2nd then a- console.log(data) tule dia alert dite pari 
29.  if(){
       alert('User added successfully');
       event.target.reset();
      }
30.ekhon form reset korte chaile
65-4 end

65-5 start
direct database theke data ana hocce [ekhane client side a home a show er jonno]
data load[read] find mane khujr ber kora[find a document mane 1 jon k khuje ber kora, ar Find Multiple Document mane ekadik jon k khuje ber kora ]
1.ei link a gia
https://www.mongodb.com/docs/drivers/node/current/usage-examples/insertOne/
2.Find Multiple Document 
3.api create ager post api er thik upore
app.get('/users', async (req, res) => {
4.  const query = {}; 
5.  const cursor = userCollection.find(query);
6.  const users = await cursor.toArray();
7.  res.send(users);
then client side a kaj






















*/