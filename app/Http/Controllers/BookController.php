<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Book;
use Illuminate\Support\Facades\DB;
class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $rqst)
    {
        $paginate = $rqst->query('paginate');
        $showBook = Book::select()->paginate($paginate);
        return $showBook;
    }
    public function onSale(){
        $onSale = DB::table('book')
            ->join('discount','book.id','=','discount.book_id')
            ->join('author','book.author_id','=','author.id')
            ->select('book.id','book.book_title','author.author_name','book.book_cover_photo','discount.discount_price','book.book_price')
            ->selectRaw('book.book_price - discount.discount_price as sub_price')
            ->orderByDesc('sub_price')
            ->limit(10)
            ->get();
        return $onSale;
    }
    public function sortByOnSale(){
        $viewAllOnSale = DB::table('book')
            ->join('discount','book.id','=','discount.book_id')
            ->join('author','book.author_id','=','author.id')
            ->select('book.id','book.book_title','author.author_name','book.book_cover_photo','discount.discount_price','book.book_price')
            ->selectRaw('book.book_price - discount.discount_price as sub_price')
            ->orderByDesc('sub_price')
            ->get();
        return $viewAllOnSale;
    }
    public function recommended(){
        $recommended = DB::table('book')
            ->join('review', 'book.id', '=', 'review.book_id')
            ->leftJoin('discount', 'book.id', '=', 'discount.book_id')
            ->join('author','book.author_id','=','author.id')
            ->select('review.book_id', 'author.author_name','book.book_title','book.book_cover_photo','book.book_price')
            ->selectRaw('avg(review.rating_start) as avg_ratingstar')
            ->selectRaw('(CASE WHEN discount.discount_price IS null THEN book.book_price ELSE discount.discount_price END) as final_price')
            ->groupBy('review.book_id', 'discount.discount_price', 'book.book_price','author.author_name','book.book_title','book.book_cover_photo')
            ->orderByDesc('avg_ratingstar')
            ->orderBy('final_price')
            ->limit(8)
            ->get();
        return $recommended;
    }
    public function popular(){
        $popular = DB::table('book')
            ->leftJoin('discount', 'book.id', '=', 'discount.book_id')
            ->join('review', 'book.id', '=', 'review.book_id')
            ->join('author','book.author_id','=','author.id')
            ->select('review.book_id','author.author_name','book.book_title','book.book_cover_photo','book.book_price')
            ->selectRaw('count(review.rating_start) as total_review')
            ->selectRaw('(CASE WHEN discount.discount_price IS null THEN book.book_price ELSE discount.discount_price END) as final_price')
            ->groupBy('review.book_id', 'discount.discount_price', 'book.book_price')
            ->orderByDesc('total_review')
            ->orderBy('final_price')
            ->limit(10)
            ->get();
        return $popular;
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //  
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
