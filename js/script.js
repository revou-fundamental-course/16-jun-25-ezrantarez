document.addEventListener('DOMContentLoaded', function () {

// L Segitiga
  const areaS = document.getElementById('LSform');
  const inputaS = document.getElementById('segAlas');
  const inputtS = document.getElementById('segTinggi');
  const resultaS = document.getElementById('hasilalasS');
  const resulttS = document.getElementById('hasilTS');
  const resultareaS = document.getElementById('hasilSluas');

  areaS.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload

    const alas = parseFloat(inputaS.value);
    const tinggi = parseFloat(inputtS.value);

    const luas = 0.5 * alas * tinggi;
    resultaS.textContent = alas;
    resulttS.textContent = tinggi;
    resultareaS.textContent = luas;
  });

  areaS.addEventListener('reset', function () {
    resultaS.textContent = "a";
    resulttS.textContent = "t";
    resultareaS.textContent = "..."; // reset result display
  });

//   K Segitiga
  const periS = document.getElementById('KSform');
  const inputAS = document.getElementById('segA');
  const inputBS = document.getElementById('segB');
  const inputCS = document.getElementById('segC');
  const resultAS = document.getElementById('hasilAS');
  const resultBS = document.getElementById('hasilBS');
  const resultCS = document.getElementById('hasilCS');
  const resultperiS = document.getElementById('hasilSkeliling');

  periS.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload

    const sisiA = parseFloat(inputAS.value);
    const sisiB = parseFloat(inputBS.value);
    const sisiC = parseFloat(inputCS.value);

    const keliling = sisiA + sisiB + sisiC;
    resultAS.textContent = sisiA;
    resultBS.textContent = sisiB;
    resultCS.textContent = sisiC;
    resultperiS.textContent = keliling;
  });

  periS.addEventListener('reset', function () {
    resultAS.textContent = "A";
    resultBS.textContent = "B";
    resultCS.textContent = "C";
    resultperiS.textContent = "..."; // reset result display
  });

});

document.addEventListener('DOMContentLoaded', function () {

//   L Jajar Genjang
  const areaJ = document.getElementById('LJform');
  const inputaJ = document.getElementById('jAlas');
  const inputtJ = document.getElementById('jTinggi');
  const resultaJ = document.getElementById('hasilalasJ');
  const resulttJ = document.getElementById('hasilTJ');
  const resultareaJ = document.getElementById('hasilJluas');

  areaJ.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload

    const alas = parseFloat(inputaJ.value);
    const tinggi = parseFloat(inputtJ.value);

    const luas = alas * tinggi;
    resultaJ.textContent = alas;
    resulttJ.textContent = tinggi;
    resultareaJ.textContent = luas;
  });

  areaJ.addEventListener('reset', function () {
    resultaJ.textContent = "a";
    resulttJ.textContent = "t";
    resultareaJ.textContent = "..."; // reset result display
  });

//   K Jajar Genjang
  const periJ = document.getElementById('KJform');
  const inputAJ = document.getElementById('jA');
  const inputBJ = document.getElementById('jB');
  const inputCJ = document.getElementById('jC');
  const inputDJ = document.getElementById('jD');
  const resultAJ = document.getElementById('hasilAJ');
  const resultBJ = document.getElementById('hasilBJ');
  const resultCJ = document.getElementById('hasilCJ');
  const resultDJ = document.getElementById('hasilDJ');
  const resultperiJ = document.getElementById('hasilJkeliling');

  periJ.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload

    const sisiA = parseFloat(inputAJ.value);
    const sisiB = parseFloat(inputBJ.value);
    const sisiC = parseFloat(inputCJ.value);
    const sisiD = parseFloat(inputDJ.value);

    const keliling = sisiA + sisiB + sisiC + sisiD;
    resultAJ.textContent = sisiA;
    resultBJ.textContent = sisiB;
    resultCJ.textContent = sisiC;
    resultDJ.textContent = sisiD;
    resultperiJ.textContent = keliling;
  });

  periJ.addEventListener('reset', function () {
    resultAJ.textContent = "A";
    resultBJ.textContent = "B";
    resultCJ.textContent = "C";
    resultDJ.textContent = "D";
    resultperiJ.textContent = "..."; // reset result display
  });

});