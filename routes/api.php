<?php

use App\Http\Controllers\BookController;
use App\Http\Controllers\BookWormController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\AuthorController;
use App\Http\Controllers\DiscountController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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


/*Authentication*/

/*End Authentication*/

/*Home page*/
//showBook
Route::resource('/book', BookController::class);
//showCategory
Route::get('/category/{id}',[CategoryController::class,'showCategory']);
//showAuthor
Route::get('/author/{id}',[AuthorController::class,'showAuthor']);
//onSale
Route::get('/onSale',[BookController::class,'onSale']);
//recommended
Route::get('/recommended',[BookController::class,'recommended']);
//popular
Route::get('/popular',[BookController::class,'popular']);
/*End Home page*/

/*Shop page*/
//sortByOnSale
Route::get('/sortByOnSale',[BookController::class,'sortByOnSale']);
//sortByPopularity
Route::get('/sortByPopularity',[BookController::class,'sortByPopularity']);
//widgetAccordion
Route::get('/widgetCategory',[CategoryController::class,'showCategory']);
Route::get('/widgetAuthor',[AuthorController::class,'showAuthor']);

/*End Shop page*/

/*Product page*/

/*End Product page*/