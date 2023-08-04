function test(event){
event.preventDefault();
var uid =document.getElementById('name').value;
var eid =document.getElementById('mail').value;
var phoneid =document.getElementById('phone').value;
console.log(phoneid);
console.log('hello');
const userInfo = {
    username: uid,
    email: eid,
    phoneNo :phoneid
    
  }
  localStorage.setItem('userInfo', JSON.stringify(userInfo));
  console.log(localStorage.getItem(userInfo));
  
// localStorage.setItem('usename',uid);
// localStorage.setItem('email',eid);
// localStorage.setItem('phone', phoneid);
}