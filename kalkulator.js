$(function () {
    let input1;
    let input2;
    let operasiSelected = null;
  
    $(".tombol-angka").click(function () {
      let angka = $(this).text();
      // alert("Hallo jquery kamu menekan angka " + angka);
      // $("#input1").text(angkaSebelumnya + angka);
      function clear() {
        const display = document.getElementById('display');
        display.value = '';
    }
      // cek jika sudah ada selected operasi
      if (operasiSelected == null) {
        // operasi masih kosong --> isi input1
        let angkaSebelumnya = $("#input1").text();
        if (angkaSebelumnya == "...") angkaSebelumnya = "";
        input1 = angkaSebelumnya + angka;
        $("#input1").text(input1);
      } else {
        // sudah ada operasi selectedd
        let angkaSebelumnya = $("#input2").text();
        if (angkaSebelumnya == "...") angkaSebelumnya = "";
        input2 = angkaSebelumnya + angka;
        $("#input2").text(input2);
      }
    });
  
    $(".tombol-operasi").click(function () {
      let operasiSebelumnya = $("#operasi-selected").text();
      let newOperasi = $(this).text();
      // alert("Hallo jquery kamu menekan angka " + newOperasi);
      if (operasiSelected == null) {
        // update dengan operasi baru
        $("#operasi-selected").text(newOperasi);
        operasiSelected = newOperasi;
      } else {
        // input1 diisi dengan hasil
        $("#input1").text($("#hasil").text());
  
        // input2 dikosongkan
        $("#input2").text("...");
  
        // replace operasi
        $("#operasi-selected").text(newOperasi);
        operasiSelected = newOperasi;
  
        // replace operand
      }
    });
    document
      .querySelector(".tombol-clear")
      .addEventListener("click", function () {
        operasiSelected = null;
        console.log("Clear: " + operasiSelected); // Reset nilai dan menampilkan di console
      });
  
    $("#btn-hitung").click(function () {
      input1 = parseInt($("#input1").text());
      input2 = parseInt($("#input2").text());
      let hasil;
      if (operasiSelected == "+") {
        hasil = input1 + input2;
      } else if (operasiSelected == "-") {
        hasil = input1 - input2;
      } else if (operasiSelected == "X") {
        hasil = input1 * input2;
      } else if (operasiSelected == "/") {
        hasil = input1 / input2;
      } else if (operasiSelected == "**") {
        hasil = input1 ** input2;
      } else if (operasiSelected == "%") {
        hasil = input1 % input2;
      } else {
        alert("Hallo jquery kamu menekan angka  ${operasiSelected}");
      }
      $("#hasil").text(hasil);
    });
  // Fungsi faktorial
  function faktorial(n) {
      if (n === 0 || n === 1) {
          return 1;
      } else {
          return n * faktorial(n - 1);
      }
  }
  
  $(".tombol-faktorial").click(function () {
      if (operasiSelected === null) {
          let input1 = parseInt($("#input1").text());
          let hasil = faktorial(input1);
          $("#input1").text(hasil);
          $("#hasil").text(hasil); // tampilkan hasil pada display
      } else {
          let input2 = parseInt($("#input2").text());
          let hasil = faktorial(input2);
          $("#input2").text(hasil);
          $("#hasil").text(hasil); // tampilkan hasil pada display
      }
  });
 
  
  });