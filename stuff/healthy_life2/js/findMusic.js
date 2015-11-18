$(document).ready(function() {
	$('#table_id').DataTable({		//引入数据
    data: data
  });

	var table = $('#table_id').DataTable();		//选中并删除行
    $('#table_id tbody').on('click', 'tr', function() {
        if ( $(this).hasClass('selected')) {
            $(this).removeClass('selected');
        }
        else {
            table.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    } );
    $('#button').click( function() {
        table.row('.selected').remove().draw(false);
    } );

    var t = $('#table_id').DataTable();
    var $list = $('tr.text td input');
    $('#submit').on('click', function() {
        t.row.add([
            $($list[0]).val(),
            $($list[1]).val(),
            $($list[2]).val(),
            $($list[3]).val()
        ]).draw();
        table.search($($list[0]).val()).draw();
        closeAddDialog();
    });

    $('#cancel').click(function() {
        closeAddDialog();   	
    });

    $('#addRow').click(function(){
    	$('#add').css({
  			'display': 'block'
    	});
    });
});
function closeAddDialog() {
	$('#add').css({
  			'display': 'none'
    	});
    $('tr.text td input').val('');
}