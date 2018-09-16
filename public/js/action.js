var actions = (function() {
	var urlApi = 'http://mmweb.local/api/v1/add-type';
	var global = [];
	return {
		onAddType : function(e) {
			if($('#frmForm').valid()) {
				var name = $('#name').val();
				var icon = $('#icon')[0].files[0];
				var url = $('#url').val();
				var formData = new FormData();
				formData.append('name', name);
				formData.append('file', icon);
				formData.append('url', url);
				formData.append('user_id', 1);
				$.ajax({
					url : urlApi,
					method : 'POST',
					data : formData,
					contentType: false,
					dataType:'json',
					processData: false,
					headers: {
						'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
					},
					success : function(res) {
						if(res.code === 200) {
							var data = res.data;
							console.log(data);
							var tr = $('#list tbody tr').clone();
							var tdList = tr.find('td');
							
							var keys = Object.keys(data);
							global = data;
							if(keys.length) {
								for(var i = 0; i < keys.length; i++) {
									var td = tdList[i];
									var tag = td.getAttribute('data-tag');
									console.log(tag);
									if(tag !== null) {
										var img = td.getElementsByTagName('img')[0];
										
										if(img !== undefined) {
											if(data[tag].indexOf('http://') < 0 && data[tag].indexOf('https://')  < 0) {
												var upload_path = $('#upload_path').val();
												img.src = upload_path + '/' + data[tag];
											} else {
												img.src = data[tag];
											}
										} else {
											tdList[i].innerHTML = data[tag];
										}
									}
									
									
								}
							}
							$('#list tbody').prepend(tr);
							$('#myModal').modal('toggle');
						}
					}
				})
			}

			return false;
		},
		onEditType: function (type) {
			//var data = $('#json-data').val();
//			var json = JSON.parse(data);
			console.log(type);
			$('#myModal').modal('toggle');
		}
	}
})();