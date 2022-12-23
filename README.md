# chatbot

## Project setup
1. Create a `.env` file in the root directory and paste the following
```
VUE_APP_SOCKET_ENDPOINT=http://localhost:3000
```

</br>

2. Please go to the backend directory and start backend server.

```
cd backend
node server.js
```

</br>

3. In the root directory, please start frontend server.

```
npm run serve
```
## Login

### User
The following two people are currently registered as dummy users.

```
{
    id: 1,
    name: "yusaku",
    image: "logo.png",
    birthday: "2002/07/12",
    roomID: "room1"
},
{
    id: 2,
    name: "nakamura",
    image: "logo.png",
    birthday: "2000/02/01",
    roomID: "room2" 
}
```

In http://localhost:8080/ , please input

name: `yusaku`, password: `1`

or

name: `nakamura`, password: `2`

### Admin
In http://localhost:8080/adminLogin , please imput

name: `admin`, password: `0`
