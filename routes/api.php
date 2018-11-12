<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group(['prefix' => '/v1', 'namespace' => 'Api\V1', 'as' => 'api.'], function () {
    Route::post('/auth', 'ApiController@authentication')->name('authentication.post');
    Route::post('/register', 'ApiController@register')->name('register.post');
    Route::post('/backup', 'ApiController@backup')->name('backup.post');
    Route::get('/settings', 'ApiController@settings')->name('settings.get');
    Route::get('/sync', 'ApiController@sync')->name('sync.get');
    Route::post('/add-location', 'ApiController@addLocation')->name('addlocation.post');
    Route::post('/add-type', 'ApiController@addType')->name('addType.post');
    Route::get('/load-text', 'ApiController@loadText')->name('loadText.get');
    Route::get('/load-types', 'ApiController@loadTypes')->name('loadTypes.get');
    Route::get('/load-actions', 'ApiController@loadActions')->name('loadActions.get');
});
