<?php

namespace App\Http\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Users extends Model
{
    protected $table = 'users';

    public static function getIncrementId() {
        $idMax = DB::table('users')->max('id');
        return $idMax + 1;
    }
    
    public function generateToken()
    {
        $this->api_token = str_random(60);
        $this->save();
        
        return $this->api_token;
    }
}
