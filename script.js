let addBtn = document.getElementById("user_form");
let userCont = document.getElementById("newUser");
let users = [];

function addUser(userName, userId, userBalance) {
  let user = {
    name: userName,
    id: userId,
    balance: userBalance,
  };
  users.push(user);
}

function changeBalance(index) {
  let newBalance = prompt("enter your balance");
  users[index].balance = newBalance;
  showUser();
}

function removeUser(index) {
  users.splice(index, 1);
  showUser();
}

function showUser() {
  userCont.textContent = "";
  users.forEach((item, i) => {
    let tr = document.createElement("tr");
    let tdf = document.createElement("td");
    let tds = document.createElement("td");
    let tdt = document.createElement("td");
    let tdb = document.createElement("td");
    let editBtn = document.createElement("button");
    let removeBtn = document.createElement("button");
    tdf.innerText = item.name;
    tds.innerText = item.id;
    tdt.innerText = item.balance;
    editBtn.innerText = "Edit  user";
    removeBtn.innerText = "remove  user";
    editBtn.classList.add("btn", "btn-primary");
    removeBtn.classList.add("btn", "btn-danger");

    tdb.append(editBtn, removeBtn);
    tr.append(tdf, tds, tdt, tdb);
    userCont.append(tr);

    removeBtn.addEventListener("click", function () {
      removeUser(i);
    });
    editBtn.addEventListener("click", function () {
      changeBalance(i);
    });
  });
}

addBtn.addEventListener("submit", function (u) {
  u.preventDefault();
  addUser(
    u.target.elements.userName.value,
    u.target.elements.userId.value,
    u.target.elements.userBalance.value
  );
  showUser();
});
