let input = document.querySelector("input[type=file]");
input.addEventListener("change", function (e) {
  console.dir(e);
  const files = e.target.files;
  const file = files[0];
  console.dir(files);

  const formData = new FormData();
  formData.append("photo", file);

  let xhr = new XMLHttpRequest();
  xhr.addEventListener(`load`, function () {
    console.log(xhr.responseText);
  });
  xhr.open("POST", "");
  xhr.send(formData);
});


