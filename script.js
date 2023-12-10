$("#i4").click( function() {
      var a = document.getElementById("i1");
      var b = document.getElementById("i2");
      var c = parseFloat(a.value);
      var d = parseFloat(b.value);
      document.getElementById("i3").value = c + d ;
} );
$("#i5").click( function() {
      var a = document.getElementById("i1");
      var b = document.getElementById("i2");
      var c = parseFloat(a.value);
      var d = parseFloat(b.value);
      document.getElementById("i3").value = c - d ;
} );
$("#i6").click( function() {
      var a = document.getElementById("i1");
      var b = document.getElementById("i2");
      var c = parseFloat(a.value);
      var d = parseFloat(b.value);
      document.getElementById("i3").value = c * d ;
} );
$("#i7").click( function() {
      var a = document.getElementById("i1");
      var b = document.getElementById("i2");
      var c = parseFloat(a.value);
      var d = parseFloat(b.value);
      document.getElementById("i3").value = c / d ;
} );
