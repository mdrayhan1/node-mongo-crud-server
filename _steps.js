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


module: 65-6
user delete korar jonno backend a api create
20, app.delete('/users/:id', async (req, res) => {
21, const id = req.params.id;
22, console.log('trying to delete', id);
23, no client side a

29,[optional] mogodb-delrtr operation-delete a document-
30, const query = { _id: ObjectId(id) }
31, const result = await userCollection.deleteOne(query);
32, console.log(result);
33, res.send(result);
}
34, nodemon a eta asbe
{acknowledged: true, deletedCount: 1}
35,
35,localhost300 a jekhane home componenet er maddome data database theke direct ene dekhano hocce sekhane gia xx a clik kore dekha delete hobe o console a acknow-true o deletedCo0unt
36,ekhon caile console er deleted count dia user k 1 ta confirmation o user k dite pari
37, no clint side a go

65-7
4. app.get('/users/:id', async (req, res) => {
5.           const id = req.params.id;
6.            const query = { _id: ObjectId(id) };
7.            const user = await userCollection.findOne(query);
8.            res.send(user);
        })

9. server url check particular single id dia asbe data object akare
localhost5000/user/635328
10. no client side a


65-8 start
 1.go mongodb-update and replace operations
 2.Update a Document
 3.gsearch-MDNput method=>put-http-MDN web docs
 4.ctrl f patch
 5.server side a put nea
 5.app.put('/users/:id', async (req, res) => {
 6.           const id = req.params.id;
 7.           const filter = { _id: ObjectId(id) };
 13.           const user = req.body;
 14.           console.log(user ) kore dekha name email clint side a update kore update user a click korle sathe sathe nodemon a object er modde update gulo asbe
 15.           const option = {upsert: true};
 16.           const updatedUser = {
                $set: {
                    name: user.name,
                    address: user.address,
                    email: user.email
                }
            }
 17.           const result = await userCollection.updateOne(filter, updatedUser, option);
 18.          res.send(result); console.log(user ) kore dekha name email clint side a update kore update user a click korle sathe sathe console a {acknoeledged: true, modifiedCount:1, upsurtedId:null, upsurtedCount:0, matchedCount: 1} asbe + home page ui te jekhane name email gulo show kore sekhane add hobe
 
        })

8.client side a fetch korte hobe update component a gia handleupdateuser nmae er click handler function er vitore
const handleUpdateUser = event =>{
        event.preventDefault();
        // console.log(user);
8.        fetch(`http://localhost:5000/users/${storedUser._id}`, {
10.            method: 'PUT',
11.            headers: {
                'content-type': 'application/json'
            },
12.            body: JSON.stringify(user)
        })
9.        .then(res => res.json())
9.        .then(data => {
19.            if (data.modifiedCount > 0){
                alert('user updated')
                console.log(data);
            }
            
        })
    }










*/