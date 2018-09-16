<?php

namespace App\Http\Controllers\Auth;
use App\Http\Controllers\Controller;
use App\Http\Models\Types;
use Illuminate\Http\Request;
use App\Constants\Constants;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() {
        return view('auth.home');
    }
    
    /**
     * types
     * @param Request $request
     * @return \Illuminate\View\View|\Illuminate\Contracts\View\Factory
     */
    public function types(Request $request) {
        $types = Types::orderBy('created_at', 'desc')->paginate(Constants::ROW_PER_PAGE);
        
        $paging = $types->toArray();
        
        $output ['types'] = $types;
        $output ['paging'] = $paging;
        
        if ($request->ajax()) {
            return view('auth.types.ajax', $output);
        }
        
        return view('auth.types.index', $output);
    }
    
    
}
