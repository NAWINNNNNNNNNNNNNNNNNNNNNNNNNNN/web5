//  รหัสผ่านเข้าหน้าเว็ป
var objPeople = [
	{ // รหัสผ่าน
		username: "010",
		password: "1149900993001"
	},
	{ // รหัสผ่าน
		username: "tccom",
		password: "12345"
	}
]

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < objPeople.length; i++) {
		// เช็คว่าผิดหรือถูกกด f12 เด้ออ้าย
		if(username == objPeople[i].username && password == objPeople[i].password) {
			console.log(username + " is logged in!!!")
			// หยุดทำงาน
            window.location.href = 'login2.html';
			return
            
		}
	}
	console.log("incorrect username or password")
}