@extends('layouts.app')
@section('content')

<section class="content-header">
    <h1>Đăng ký loại hoạt động</h1>
</section>

<section class="content container-fluid">
    <div class="row">

        <div class="box">
            <div class="box-body">
                <form method="POST" id="frmForm"  class="form-horizontal">
                    {{ csrf_field() }}
                    @if (session('success'))
                        <div class="alert alert-success">
                            {{ session('success') }}
                        </div>
                    @endif
                    @if (session('error'))
                        <div class="alert alert-danger">
                            {{ session('error') }}
                        </div>
                    @endif
                    <div class="form-group">
                        <label class="control-label col-sm-2">Giá trị:</label>
                        <div class="col-md-6">
                        	<input id="value" name="value" type="text" class="form-control" value="{{ $type['value'] or '' }}" required disabled="disabled">
                        </div>
                        <div class="col-md-4">
                        	<p class="text-left text-red"></p>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-sm-2">Tên gọi:</label>
                        <div class="col-md-6">
                        	<input id="name" name="name" type="text" class="form-control" value="{{ $type['name'] or '' }}" required>
                        </div>
                        <div class="col-md-4">
                        	<p class="text-left text-red"></p>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-sm-2">Icon:</label>
                        <div class="col-md-6">
                        	<input id="icon" name="icon" type="text" class="form-control" value="{{ $type['icon'] or '' }}" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-sm-2">&nbsp;</label>
                        <div class="col-md-6">
                        	<img src="{{ $type['icon'] or '' }}" width="60" height="60" />
                        </div>
                    </div>
                    <div class="col-md-12">
                    	<a href="{{ route('types.get') }}" class="btn btn-default btn-flat pull-right">Quay về</a>
                        <button type="submit" class="btn btn-success btn-flat pull-right mr10">Đăng ký</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    
</section>

@endsection
@section('script')
<script>
$(document).ready(function () {
	$("#frmForm").validate({
		onfocusout: false,
		rules: {
			name: {
				required: true
			}
		},
		messages: {
			name : {
				required	: "Vui lòng nhập",
			}
		},
		errorPlacement: function(error, element) {
	    	error.appendTo( element.prev("p") );
	  	},
	  	invalidHandler: function(form, validator) {
	  	}
	});
});
</script>
@endsection
