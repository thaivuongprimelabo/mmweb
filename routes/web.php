<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

//Auth::routes();

Route::group(['prefix' => 'auth'], function () {
    Route::get('/', 'Auth\HomeController@index')->name('dashboard');
    
    // Authentication Routes...
    Route::get('login', 'Auth\LoginController@showLoginForm')->name('login');
    Route::post('login', 'Auth\LoginController@login');
    Route::get('logout', 'Auth\LoginController@logout')->name('logout');
    
    // Registration Routes...
    Route::get('register', 'Auth\RegisterController@showRegistrationForm')->name('register');
    Route::post('register', 'Auth\RegisterController@register');
    
    // Password Reset Routes...
    Route::get('password/reset', 'Auth\ForgotPasswordController@showLinkRequestForm')->name('password.request');
    Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
    Route::get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm')->name('password.reset');
    Route::post('password/reset', 'Auth\ResetPasswordController@reset')->name('password.update');
    
    
    #Types
    Route::group(['prefix' => 'types'], function () {
        Route::get('/', 'Auth\HomeController@types')->name('types.get');
        Route::post('/', 'Auth\HomeController@types')->name('types.post');
        
        Route::get('/add', 'Auth\HomeController@submitType')->name('types.add.get');
        Route::post('/add', 'Auth\HomeController@submitType')->name('types.add.post');
        
        Route::get('/edit/{value}', 'Auth\HomeController@submitType')->name('types.edit.get');
        Route::post('/edit/{value}', 'Auth\HomeController@submitType')->name('types.edit.post');
    });
});


