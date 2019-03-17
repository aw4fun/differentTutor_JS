function index() {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(`GET`, `../chart_data.json`);
    xhr.send();
    xhr.onload = function () {
      if (xhr.status !== 200) {
        reject(xhr.status);

      } else {
        resolve(JSON.parse(xhr.responseText))
      }
    };
  })
}

export default index;