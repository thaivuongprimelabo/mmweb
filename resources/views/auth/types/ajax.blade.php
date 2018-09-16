<div class="box-header">
    <p class="box-note"><span>{{ !empty($paging['from']) ? $paging['from'] : 0 }} dòng～{{ !empty($paging['to']) ? $paging['to'] : 0 }} dòng</span> <span>Tổng cộng: {{ $paging['total'] }} dòng</span></p>
    
    <div id="paging-monitoring" class="box-tools">
      {{ $types->links('auth.pagination.paging', ['paging' => $paging]) }}
    </div>
</div>
<!-- /.box-header -->
<div class="box-body table-responsive no-padding">
    <table id="list" class="table table-bordered table-hover table-responsive">
      <thead>
          <tr class="btn-primary">
            <th width="5%"  class="text-center">@lang('text.TXT_0011')</th>
            <th width="25%">@lang('text.TXT_0012')</th>
            <th width="10%" class="text-center">@lang('text.TXT_0013')</th>
            <th width="15%" class="text-center">@lang('text.TXT_0014')</th>
            <th scope="col" class="text-right">@lang('text.TXT_0016')</th>
            <th scope="col" class="text-right">@lang('text.TXT_0017')</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody class="table-striped">
          @foreach($types as $type)
          @php $index = 0; @endphp
          <tr>
            <td data-tag="value" class="text-center">{{ $type['id'] }}</td>
            <td data-tag="name" class="text-left">{{ $type['name'] }}</td>
            <td data-tag="icon" class="text-center">
            	@if(strpos($type['icon'], 'https://') === FALSE && strpos($type['icon'], 'http://') === FALSE)
            	<img src={{ URL::to(Constants::UPLOAD_PATH . $type['icon']) }} width="45" height="45" />
            	@else
            	<img src={{ $type['icon'] }} width="45" height="45" />
            	@endif
            </td>
            <td data-tag="is_sync" class="text-center">{{ $type['is_sync'] == 0 ? __('text.TXT_0029') : __('text.TXT_0028') }}</td>
            <td data-tag="created_at" class="text-right">{{ $type['created_at'] }}</td>
            <td data-tag="updated_at" class="text-right">{{ $type['updated_at'] }}</td>
            <td class="text-center"><a href="javascript:void(0)"><i class="fa fa-edit" style="font-size:20px"></i></a></td>
            <td class="text-center"><a href="javascript:void(0)"><i class="fa fa-trash" style="font-size:20px"></i></a></td>
          </tr>
          @endforeach
        </tbody>
    </table>
</div>
<!-- /.box-body -->
@include('auth.types.modal')
