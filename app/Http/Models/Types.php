<?php

namespace App\Http\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Types extends Model
{
    //
    protected $table = 'types';
    protected $primaryKey  = 'value';
//     public $incrementing = false;
    
    public static function getIncrementValue() {
        $idMax = DB::table('types')->max('value');
        return $idMax + 1;
    }
    
    public static function getIncrementOrder() {
        $idMax = DB::table('types')->max('order');
        return $idMax + 1;
    }
}
