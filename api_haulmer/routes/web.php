<?php

use Illuminate\Support\Facades\Route;

Route::get('/events', 'App\Http\Controllers\EventController@getAllEvents');
Route::get('/event/{id}', 'App\Http\Controllers\EventController@getEvent');

Route::get('/purchase/{id}/{client_id}/{client_name}','App\Http\Controllers\PurchaseController@postPurchase');

Route::get('/orders/{id}','App\Http\Controllers\PurchaseController@getOrders');

