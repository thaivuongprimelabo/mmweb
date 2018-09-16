<?php
namespace App\Constants;

class Constants {
    const ROLE_ADMINISTRATOR = 1;
    const ROLE_USER = 2;
    
    const UPLOAD_PATH = 'upload/';
    
    const TITLE_WEB = '<b>MM</b>-Management';
    const TITLE = 'MM-Management';
    
    const ROW_PER_PAGE = 10;
    
    const EMPTY_CODE = 000;
    const SUCCESS = 200;
    const LOGIN_FAILED = 201;
    const CONTENT_TYPE_ERR = 202;
    const VALIDATE_ERR = 203;
    const UPLOAD_FAILED = 204;
    
    const IS_SYNC = 1;
    const NOT_SYNC = 0;
    
    const DEFAULT_ORDER = 90;
    const DEFAULT_ICON = 'https://facebook.github.io/react-native/docs/assets/favicon.png';
    
}