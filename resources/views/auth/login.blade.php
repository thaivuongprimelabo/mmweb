@extends('layouts.app')

@section('content')
<div class="login-box login-frm">
    <div class="login-logo">
      <a href="index2.html">{!! Constants::TITLE_WEB !!}</a>
    </div>
    <!-- /.login-logo -->
    <div class="login-box-body">
      <p class="error-txt">@if ($errors->has('auth.failed')){{ $errors->first('auth.failed') }}@endif</p>

      <form id="frmForm" method="POST" action="{{ route('login') }}">
        @csrf
        <div class="form-group has-feedback">
            <input id="email" type="text" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" placeholder="@lang('text.SCREEN.EMAIL')" autofocus>
            @if ($errors->has('email'))
                <span class="error-txt" role="alert">
                    {{ $errors->first('email') }}
                </span>
            @endif
        </div>
        <div class="form-group has-feedback">
            <input id="password" type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password"  placeholder="@lang('text.SCREEN.PASSWORD')" >
            @if ($errors->has('password'))
            <span class="error-txt" role="alert">
                {{ $errors->first('password') }}
            </span>
            @endif
        </div>
        <div class="row">
          <div class="col-md-8">
          	<label>
              <input type="checkbox" name="remember" id="remember" />&nbsp;
              @lang('text.SCREEN.REMEMBER_ME')
            </label>
          </div>
          <!-- /.col -->
          <div class="col-md-4">
            <button type="submit" class="btn btn-primary btn-block btn-flat">@lang('text.BUTTON.LOGIN')</button>
          </div>
          <!-- /.col -->
        </div>
      </form>

    </div>
    <!-- /.login-box-body -->
  </div>
  <!-- /.login-box -->
	
@endsection
@section('script')
<script>
$(document).ready(function () {
	$('#remember').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%' /* optional */
    });
    
	$("#frmForm").validate({
		onfocusout: false,
		rules: {
			email: {
				required: true,
				email:true,
			},
			password: {
				required: true,
			}
		},
		messages: {
			email : {
				required	: "Vui lòng nhập",
				email		: "E-mail không hợp lệ",
			},
			password : {
				required	: "Vui lòng nhập",
			}
		},
	});

	
});
</script>
@endsection
