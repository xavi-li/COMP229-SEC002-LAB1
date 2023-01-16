// Rest
function userFriends(user, ...friends) {
    console.log("Rest:"); 
    console.log(user + ' has ' + friends.length + ' friends'); 
} 
userFriends('User', 'Bob', 'Alice');