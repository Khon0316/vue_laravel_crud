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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/post/create', 'PostsController@store');
Route::get('/post/edit/{id}', 'PostsController@edit');
Route::post('/post/update/{id}', 'PostsController@update');
Route::delete('/post/delete/{id}', 'PostsController@delete');
Route::get('/posts', 'PostsController@index');
