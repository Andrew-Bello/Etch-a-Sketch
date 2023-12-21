const container = document.querySelector('.container');

let num = 16;



function createDivs(value) {
  for(let i = 1; i <= num; i++) {
    const row = document.createElement('div');
    row.classList.add('row')
    for(let j = 1; j <= num; j++) {
      const pixel = document.createElement('div')
      pixel.classList.add('pixel');
      row.append(pixel);
    }
    container.append(row)
  }
  
  return;
}

createDivs(num);