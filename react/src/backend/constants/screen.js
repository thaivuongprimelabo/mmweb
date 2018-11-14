import * as Commons from './commons';
import * as AdminRoutes from './routes';

var screen = {
    'CMS_NAME' : 'MM',
    'CMS_NAME2' : 'ONLINE',
    'VN' : {
        'SIDEBAR' : [
            {
                'NAME' : 'Danh mục quản lý',
                'TYPE' : 0,
                'ICON' : 'fa fa-dashboard',
                'URL'  : Commons.BACKEND + '/#',
                'ACTIVE' : true,
                'CHILD_NODE' : [
                    {
                        'NAME' : 'Thông tin điều khiển',
                        'TYPE' : 1,
                        'URL' :  AdminRoutes.ROUTE_DASHBOARD,
                        'ICON' : 'fa fa-info-circle'
                    },
                    {
                        'NAME' : 'Quản lý loại',
                        'TYPE' : 1,
                        'URL' :  AdminRoutes.ROUTE_TYPE,
                        'ICON' : 'fa fa-list-ol'
                    },
                    {
                        'NAME' : 'Quản lý địa điểm',
                        'TYPE' : 1,
                        'URL' :  AdminRoutes.ROUTE_LOCATION,
                        'ICON' : 'fa fa-map-marker'
                    },
                    {
                        'NAME' : 'Quản lý hoạt động',
                        'TYPE' : 1,
                        'URL' :  AdminRoutes.ROUTE_ACTION,
                        'ICON' : 'fa fa-hand-o-right'
                    },
                    {
                        'NAME' : 'Quản lý tài khoản',
                        'TYPE' : 1,
                        'URL' :  AdminRoutes.ROUTE_USER,
                        'ICON' : 'fa fa-user'
                    }
                ]
            },
            {
                'NAME' : 'Cài đặt',
                'TYPE' : 0,
                'ICON' : 'fa fa-cogs',
                'ACTIVE' : false,
                'URL'  : Commons.BACKEND + AdminRoutes.ROUTE_CONFIG,
                'CHILD_NODE' : []
            }
            
        ],
        'BUTTON' : {
            'REGISTER' : 'Đăng ký',
            'UPDATE' : 'Cập nhật',
            'LOGIN' : 'Đăng nhập',
            'CLOSE' : 'Đóng',
            'OK' : 'Đồng ý',
            'SIGN_OUT' : 'Đăng xuất',
            'PROFILE' : 'Hồ sơ',
            'SEARCH' : 'Tìm kiếm',
            'CSV' : 'Xuất CSV',
            'BACKUP' : 'Sao lưu dữ liệu',
            'SAVE' : 'Lưu',
            'BACK' : 'Quay lại'
        },
        'SCREEN' : {
            'ID' : 'ID',
            'NAME' : 'Tên gọi',
            'IMAGE' : 'Hình ảnh',
            'SYNC' : 'Đồng bộ/Chưa đồng bộ',
            'ORDER' : 'Thứ tự',
            'CREATED_AT' : 'Ngày tạo',
            'UPDATED_AT' : 'Ngày cập nhật',
            'EMAIL' : 'E-mail',
            'PASSWORD' : 'Mật khẩu',
            'CONFIRM_PW' : 'Nhập lại mật khẩu',
            'CREATE_CATE' : 'Đăng ký loại',
            'CREATE_LOCATION' : 'Đăng ký địa điểm',
            'CREATE_ACTION' : 'Đăng ký hoạt động',
            'UPLOAD_FILE' : 'Tải file',
            'URL' : 'URL',
            'IS_SYNC' : 'Đã đồng bộ',
            'NOT_SYNC' : 'Chưa đồng bộ',
            'REMEMBER_ME' : 'Duy trì đăng nhập',
            'LOADING' : 'Đang tải dữ liệu',
            'ONLINE' : 'Trực tuyến',
            'OFFLINE' : 'Ẩn',
            'LOGIN_FB' : 'Đăng nhập với Facebook',
            'LOGIN_GG' : 'Đăng nhập với Google',
            'REG_FB' : 'Đăng ký tài khoản bằng Facebook',
            'REG_GG' : 'Đăng ký tài khoản bằng Google',
            'FORGOT_PW' : 'Quên mật khẩu',
            'REG_ACC' : 'Đăng ký tài khoản',
            'LOGIN_TITLE' : 'Đăng nhập tài khoản',
            'FULLNAME' : 'Họ tên',
            'COST' : 'Chi phí',
            'CREATED_AT' : 'Ngày tạo',
            'LOCATION' : 'Địa điểm',
            'COMMENT' : 'Bình luận',
            'TYPE' : 'Loại hoạt động',
            'ACTIONS' : {
                'LIST_TITLE' : 'Danh mục hoạt động',
                'ADD_TITLE' : 'Đăng ký hoạt động',
                'SEARCH' : {
                    'NAME' : 'Lọc theo tên',
                    'TYPE' : 'Lọc theo loại',
                    'LOCATION' : 'Lọc theo địa điểm',
                    'DATE_FROM' : 'Từ ngày',
                    'DATE_TO' : 'Đến ngày'
                },
                'COLUMNS' : {
                    'no' : 'Id',
                    'name': 'Hoạt động', 
                    'price': 'Chi phí',
                    'location': 'Vị trí',
                    'created_at': 'Ngày tạo',
                    'comment': 'Bình luận',
                    'type': 'Loại hoạt động',
                    'sync': 'Đồng bộ',    
                }
            },
            'BREADCRUMB' : {
            }
        },
        'PAGINATION' : {
            'FROM_TO' : '{0} dòng～{1} dòng',
            'TOTAL' : 'Tổng cộng:{0} dòng',
        }
    }
}
screen.VN.SCREEN.BREADCRUMB[AdminRoutes.ROUTE_DASHBOARD] = 'Thông tin điều khiển';
screen.VN.SCREEN.BREADCRUMB[AdminRoutes.ROUTE_ACTION] = 'Danh mục hoạt động';
screen.VN.SCREEN.BREADCRUMB[AdminRoutes.ROUTE_ACTION_ADD] = 'Đăng ký hoạt động';

export default screen;