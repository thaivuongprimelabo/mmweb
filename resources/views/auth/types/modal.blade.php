<div class="modal" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <!-- Modal Header -->
      <div class="modal-header">
        	@lang('text.TXT_0018')
      </div>
      <!-- Modal body -->
      <div class="modal-body">
            <!-- form start -->
            <form id="frmForm" class="form-horizontal" method="POST" action="?" enctype="multipart/form-data">
                <div class="form-group">
                  <label for="inputEmail3" class="col-sm-2 control-label">@lang('text.TXT_0012')</label>

                  <div class="col-sm-10">
                    <input type="text" class="form-control" name="name" id="name" placeholder="@lang('text.TXT_0012')">
                  </div>
                </div>
                <div class="form-group">
                  <label for="inputPassword3" class="col-sm-2 control-label">@lang('text.TXT_0025')</label>
                  <div class="col-sm-10">
                    <input type="file" class="form-control" name="icon" id="icon">
                  </div>
                </div>
                <div class="form-group">
                  <label for="inputPassword3" class="col-sm-2 control-label">@lang('text.TXT_0026')</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" name="url" id="url" placeholder="@lang('text.TXT_0027')">
                  </div>
                </div>
            </form>
      </div>
      <!-- Modal footer -->
      <div class="modal-footer">
      	<button type="button" class="btn btn-danger" data-dismiss="modal">@lang('text.TXT_0024')</button>
        <button type="submit" class="btn btn-primary" id="select" onclick="return actions.onAddType(event);">@lang('text.TXT_0004')</button>
      </div>
    </div>
  </div>
</div>
