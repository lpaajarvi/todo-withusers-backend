<h2>App is deployed in Heroku: https://todo-with-users-lauri.herokuapp.com/</h2>

 
I didn't want to reuse code from the previous todo-app, so I could see what I can come up with from scratch.

Uses MERN:
<ul>
 <li>MongoDB Atlas (in cloud) as database</li>
 <li>Node.Js/Express as Backend</li>
 <li>React.js as Frontend</li>
</ul>
<p>
Password authentication is not fully secure, but I wanted to think of a logic of my own in MongoDB before I start using ready-made packages for it. 
</p>


User accounts that have access to the app (these are in a collection in mongodb Atlas:

<ol>
<li> email: `example@hotmail.com` password: `pass` </li>
<li> email: `second@somemail.com` password: `secondpass`</li>
<li> email: `third@another.com` password: `thirdpass`</li>
</ol>




<h3>Local Install instructions:</h3>

If you don't already have node packet manager and git installed, please install them first.   
Node packet manager can be installed from https://nodejs.org/en/    
Open your preferred terminal (for example cmd in Windows) go to directory where you want this installed, for example c:/test/ in terminal type: 
<p />

### `git clone https://github.com/lpaajarvi/todo-withusers-backend`
<br />

### `cd todo-withusers-backend`
### `npm install`




rename toBeRenamed.txt to a file called \".env\" without a body. For example in windows cmd. (cp instead of copy in linux) 

### `copy toBeRenamed.txt .env`


<p>
 
go back to c:/test/ or equivalent 
</p>

<br/>

### `git clone https://github.com/lpaajarvi/todo-withusers-frontend`
<br />

### `cd todo-withusers-frontend`
### `npm install`
<br />

You should open 2 different terminals. One keeping the backend localhost server up, and the other keeping the frontend localhost up. run 

### `npm start`

 in each terminals in the folders that were just created, for example  

### `cd c:\test\todo-withusers-backend`
### `npm start`

And then in another terminal  


### `cd c:\test\todo-withusers-frontend`
### `npm start`

Browser should open now and go to the locally hosted web app. If it doesn't, you can enter http://localhost:3000/ in your browser  While the server and website are running locally, the database is in the mongoDb cloud.






