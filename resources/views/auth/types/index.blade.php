@extends('layouts.app')
@section('content')
<div id="root" class="content-wrapper">
	
</div>
<!-- /.content -->
@endsection
@section('script')
	<script src="{{ URL::to('dist/types.js') }}"></script>
    <script type="text/javascript">
        $(document).ready(function () {
            $.validator.addMethod('file_upload', function(value, element, param) {
                if(value !== '') {
                	return value.match(new RegExp('.' + param + '$'));
                }
				return true;
            });
            
            $("#frmForm").validate({
        		onfocusout: false,
        		rules: {
        			name: {
        				required: true,
        			},
        			url : {
						url : true
        			},
        			icon : {
						file_upload : "(jpg|jpeg|png)"
        			}
        		},
        		messages: {
        			name : {
        				required	: 'Vui lòng nhập',
        			},
        			url : {
						url : 'Đường dẫn không hợp lệ'
        			},
        			icon : {
						file_upload : 'Tập tin không hợp lệ'
        			}
        		},
        	});
        });
    </script>
@endsection
