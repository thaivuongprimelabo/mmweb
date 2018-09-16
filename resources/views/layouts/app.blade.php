<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  @if(Auth::check())
  <title>Dashboard | {{ Constants::TITLE }}</title>
  <!-- Tell the browser to be responsive to screen width -->
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
  <link rel="stylesheet" href="{{ URL::to('admin/bower_components/bootstrap/dist/css/bootstrap.min.css') }}">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="{{ URL::to('admin/bower_components/font-awesome/css/font-awesome.min.css') }}">
  <!-- Ionicons -->
  <link rel="stylesheet" href="{{ URL::to('admin/bower_components/Ionicons/css/ionicons.min.css') }}">
  <!-- Theme style -->
  <link rel="stylesheet" href="{{ URL::to('admin/dist/css/AdminLTE.min.css') }}">
  <!-- AdminLTE Skins. We have chosen the skin-blue for this starter
        page. However, you can choose any other skin. Make sure you
        apply the skin class to the body tag so the changes take effect. -->
  <link rel="stylesheet" href="{{ URL::to('admin/dist/css/skins/skin-blue.min.css') }}">
  <!-- Fix Style -->
  <link rel="stylesheet" href="{{ URL::to('admin/dist/css/style.css') }}">

  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->

  <!-- Google Font -->
  <link rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic">
  @else
  <title>Log in | {{ Constants::TITLE }}</title>
  <!-- Tell the browser to be responsive to screen width -->
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
  <!-- Bootstrap 3.3.7 -->
  <link rel="stylesheet" href="{{ URL::to('admin/bower_components/bootstrap/dist/css/bootstrap.min.css') }}">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="{{ URL::to('admin/bower_components/font-awesome/css/font-awesome.min.css') }}">
  <!-- Ionicons -->
  <link rel="stylesheet" href="{{ URL::to('admin/bower_components/Ionicons/css/ionicons.min.css') }}">
  <!-- Theme style -->
  <link rel="stylesheet" href="{{ URL::to('admin/dist/css/AdminLTE.min.css') }}">
  <!-- Fix Style -->
  <link rel="stylesheet" href="{{ URL::to('admin/dist/css/style.css') }}">
  <!-- iCheck -->
  <link rel="stylesheet" href="{{ URL::to('admin/plugins/iCheck/square/blue.css') }}">

  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->

  <!-- Google Font -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic">
  @endif
  <meta name="csrf-token" content="{{ csrf_token() }}">
</head>
@if(Auth::check())
<body class="hold-transition skin-blue sidebar-mini">
	<div class="wrapper wrap-cont">
	@include('auth.components.header')
  	@include('auth.components.sidebar')
  	@yield('content')
  	@include('auth.components.footer')
  	</div>
  	<input type="hidden" id="upload_path" value="{{ URL::to(Constants::UPLOAD_PATH) }}" />
</body>
@else
<body class="hold-transition login-page">
	@yield('content')
</body>
@endif
<!-- REQUIRED JS SCRIPTS -->

<!-- jQuery 3 -->
<script src="{{ URL::to('admin/bower_components/jquery/dist/jquery.min.js') }}"></script>
<!-- Bootstrap 3.3.7 -->
<script src="{{ URL::to('admin/bower_components/bootstrap/dist/js/bootstrap.min.js') }}"></script>
<!-- AdminLTE App -->
<script src="{{ URL::to('admin/dist/js/adminlte.min.js') }}"></script>

<script src="{{ URL::to('admin/js/jquery.validate.js') }}"></script>

<script src="{{ URL::to('admin/plugins/iCheck/icheck.min.js') }}"></script>

<script src="{{ URL::to('js/action.js') }}"></script>

<!-- Optionally, you can add Slimscroll and FastClick plugins.
     Both of these plugins are recommended to enhance the
     user experience. -->
@yield('script')
</html>
