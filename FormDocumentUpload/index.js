let uploadFormElement = document.getElementById("uploadForm");

uploadFormElement.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(this);
  const url = "/upload";
  const option = {
    method: "POST",
    body: formData,
  };
  fetch(url, option)
    .then((response) => {
      if (response.ok) {
        throw new Error("Upload failed");
      }
      console.log("Successfully Added");
    })
    .then((data) => {
      alert("Successfully Added");
    })
    .catch((error) => {
      console.error(error.message);
    });
});
