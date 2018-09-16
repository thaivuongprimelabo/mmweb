<!-- Left side column. contains the logo and sidebar -->
<aside class="main-sidebar">

<!-- sidebar: style can be found in sidebar.less -->
<section class="sidebar">

  <!-- Sidebar user panel (optional) -->
  <div class="user-panel">
    <div class="pull-left image">
      <img src="{{ URL::to('admin/dist/img/user2-160x160.jpg') }}" class="img-circle" alt="User Image">
    </div>
    <div class="pull-left info">
      <p>{{ Auth::user()->name }}</p>
      <!-- Status -->
      <a href="#"><i class="fa fa-circle text-success"></i> @lang('text.SIDEBAR.ONLINE')</a>
    </div>
  </div>

  <!-- Sidebar Menu -->
  <ul class="sidebar-menu" data-widget="tree">
    <li class="header">MENU</li>
    <!-- Optionally, you can add icons to the links -->
    <li class="active"><a href="#!"><i class="fa fa-link"></i> <span>@lang('text.SIDEBAR.TOP')</span></a></li>
    <li><a href="{{ route('types.get') }}"><i class="fa fa-link"></i> <span>@lang('text.SIDEBAR.CATE_LIST')</span></a></li>
    <li><a href="#!"><i class="fa fa-link"></i> <span>@lang('text.SIDEBAR.LOCATION_LIST')</span></a></li>
    <li><a href="#!"><i class="fa fa-link"></i> <span>@lang('text.SIDEBAR.ACTION_LIST')</span></a></li>
    <li><a href="#!"><i class="fa fa-link"></i> <span>@lang('text.SIDEBAR.ACCOUNT_LIST')</span></a></li>
  </ul>
  <!-- /.sidebar-menu -->
</section>
<!-- /.sidebar -->
</aside>
