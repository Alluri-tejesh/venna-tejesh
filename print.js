function printData() {
    const output = document.getElementById("output");
    output.innerHTML = "Datasets:<br>";
    for (let i = 0; i < dataset_count; i++) {
      const dataset = document.getElementById(`dataset-${i}`);
      
      output.innerHTML += `Dataset ${i+1} : <br> Rows:<br>`;
      for (let j = 0; j < dataset.childNodes[0].childNodes.length; j++) {
        const row = dataset.childNodes[0].childNodes[j];
        output.innerHTML += `Row ${j+1} : <br>`;
        for (let k = 0; k < row.childNodes.length; k++) {
          const inputValue = row.childNodes[1].value;
          output.innerHTML += `- ${inputValue}<br>`;
        }
      }
    }
  }
  