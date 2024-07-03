// Middleware
function userCredentials(req, res, next){
    console.log("username: (alex)");
    console.log("email: (alex1234@gmail.com)");
    console.log("password: (alex21673)");
    console.log("age: (23)");
    next();
}

export default userCredentials;