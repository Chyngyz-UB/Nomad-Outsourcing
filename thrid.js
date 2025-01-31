$("#postPrint").click(function() {
	var parent = $(this).parent();
	parent.addClass("print");
	var divToPrint = document.getElementById('DivIdToPrint');
	var printWindow = window.open('', 'Print-Window');
	newWin.document.open();
	newWin.document.write('<html><body onload="window.print()">' + divToPrint.innerHTML + '</body></html>');
	newWin.document.close();
	setTimeout(function(){ newWin.close();},10);
});
