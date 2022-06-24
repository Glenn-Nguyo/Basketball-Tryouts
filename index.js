const form = document.getElementById("register");
const messageBox = document.getElementById("message");
const fetchItems = ({ first_name, last_name }) => {
  fetch("https://www.balldontlie.io/api/v1/players")
    .then((raw) => {
      return raw.json();
    })
    .then((res) => {
      form.style.display = "none";
      messageBox.innerHTML = `
      <p>Thanks ${first_name} ${last_name} for picking our team.</p>
      <ol>
     ${res.data.map((data) => {
       return `
         <li>
           <h2>${data.first_name}</h2>: Position - 
           ${data.position}
         </li>`;
     })}
      </ol>`;
    })
    .catch((e) => {
      console.log(e);
    });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const first_name = e.target["first_name"].value;
  const last_name = e.target["last_name"].value;
  const email = e.target["email"].value;
  const phone = e.target["phone"].value;
  const beginner = e.target["beginner"].value;
  const gender = e.target["gender"].value;
  fetchItems({ first_name, last_name });
});
