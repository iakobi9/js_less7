function getUsers(page) {
  fetch("https://reqres.in/api/users?page=" + page, {
    method: "GET",
  })
    .then(function (response) {
      if (response.status !== 200) {
        throw response.status;
      }
      return response.json();
    })
    .then(function (responseData) {
      const fragment = document.createDocumentFragment();

      responseData.data.forEach((element) => {
        let li = document.createElement("li");

        let p = document.createElement("p");
        p.textContent = element.last_name;
        let userEmail = document.createElement("userEmail");
        userEmail.textContent = element.email;

        li.appendChild(p);
        li.appendChild(userEmail);
        fragment.appendChild(li);
      });
      document.getElementById("list").appendChild(fragment);
    })

    .catch(function (error) {
      if (error == 404) {
        console.log("page not found", error);
      } else {
        console.log("server error", error);
      }
    });
}
getUsers();

function getusers() {
  let request = new XMLHttpRequest();

  function renderLogika() {
    let x = this.responseText;
    let y = JSON.parse(x);
    console.log(y);

    y.data.forEach((element) => {
      let li = document.createElement("li");
      let p = document.createElement("p");
      p.textContent = element.first_name + "  " + element.id;

      let img = document.createElement("img");
      img.src = element.avatar;
      img.setAttribute("alt", "user-image");

      li.appendChild(p);
      li.appendChild(img);

      document.getElementById("list2").appendChild(li);
    });
  }
  request.addEventListener("load", renderLogika);
  request.open("GET", "https://reqres.in/api/users?page=2");
  request.send();
}
getusers();
