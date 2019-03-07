# React Authentication Example

This is an example application  created to showcase how to implement authentication on a web application using React and react-router on the frontend and node.js, express, mongodb, nodemailer and mongoose on the backend.

## To run the application first clone the repository
```
git clone https://github.com/classyserve/react-auth-example.git
```

Install the dependencies
```
npm install
```
Make sure that MongoDB is running
```
mongod or sudo service mongod start
```
run the backend server
```
node server.js
```
and then in a separate terminal run the frontend
```
npm start
```
The application should be running at [http://localhost:3000/](http://localhost:3000/)

## Note:
Make sure the app running at http://localhost:3000/.

The above link will go to a login in page. After successfully loged in ,it will redirect to a Home page displaying "Secret". If email verification or user doesn't exist it will show a alert box will error message.

To SignUp click the link in 'Login Page'.After succesfull signup, a verification email will send to the email provided and the page redirect to 'Login Page'.

To verify the email, click the link in the email and it will redirect to the 'Verify Page'. On the verify page click the 'verify' button to verify the email. On succesfull verification it will redirect to 'Login Page'.

Provide email and password of host to send email in Server,js file.
