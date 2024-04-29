<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EventController;

Route::get('/events', 'App\Http\Controllers\EventController@getAllEvents');
Route::get('/event/{id}', 'App\Http\Controllers\EventController@getEvent');

//Route::post();

