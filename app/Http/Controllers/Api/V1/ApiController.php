<?php

namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Constants\Constants;
use App\Constants\Messages;
use App\Http\Controllers\Controller;
use DB;
use App\Http\Models\Actions;
use App\Http\Models\Types;
use App\Http\Models\Settings;
use App\Http\Models\Users;
use App\Http\Models\Locations;
class ApiController extends Controller
{
    
    public function __construct() {
        $this->middleware(function ($request, $next) {
            
            // Check content-type
            if($request->isMethod('post')) {
                $contentType = strtolower($_SERVER["CONTENT_TYPE"]);
                if ($contentType != 'application/json; charset=utf-8') {
                    $result["code"] = Constants::CONTENT_TYPE_ERR;
                    $result["message"] = '';
                    return response()->json($result);
                }
            }
            
            return $next($request);
        })->except(['addType']);
    }   
    
    public function authentication(Request $request) {
        $output = [
            'code' => 404,
            'data' => []
        ];
        $email = $request->email;
        $password = $request->password;
        $userdata = array(
            'email' => $email,
            'password' => $password
        );
        if (Auth::attempt($userdata)) {
            $request->clear = true;
            $output['code'] = Constants::SUCCESS;
            $output['data'] = Auth::user();
        }
        
        return response()->json($output);
    }

    /**
     * register
     * @param Request $request 
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request) {
        $output = [
            'code' => 404,
            'data' => []
        ];
        
        DB::beginTransaction();
        try {

            $user = new Users;
            $user->name = $request->name;
            $user->email = $request->email;
            $user->password = Hash::make($request->password);
            $user->role_id = $request->role_id;

            $user->save();
            
            if($user) {
                $output['code'] = 200;
                $output['data'] = $user;
            }

            DB::commit();

        } catch (\Exception $e) {
           \Log::error($e);
           DB::rollback();
        }
        
        return response()->json($output);
    }

    /**
     * addAction
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function addAction(Request $request) {

        $output = [
            'code' => Constants::EMPTY_CODE,
            'data' => ''
        ];

        $data = $request->all();

        $actionList = json_encode($data['form_data']);

        if(count($actionList)) {
            $arrAction = [];
            for($i = 0; $i < count($actionList); $i++) {
                $action = $actionList[$i];
            }
        }

        return response()->json($output);
    }
    
    /**
     * addType
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function addType(Request $request) {
        $output = [
            'code' => Constants::EMPTY_CODE,
            'data' => ''
        ];
        
        $data = $request->all();
        $imagePath = $data['url'];
        if($request->hasFile('file')) {
            $file = $request->file;
            $size = $file->getSize();
            $ext = $file->getClientOriginalExtension();
            $filename = 'f_' . time() . '.' . $ext;
            
            $path = $file->move('upload', $filename);
            
            // $imagePath = str_replace('\\', '/', $path->getPathName());
            $imagePath = $filename;
        }

        if(blank($imagePath) && blank($data['url'])) {
            $imagePath = Constants::DEFAULT_ICON;
        }
        
        $type = new Types();
        $id = rand(1000,9999);
        $type->id = $id;
        $type->name = $data['name'];
        $type->icon = $imagePath;
        $type->is_sync = Constants::NOT_SYNC;
        $type->order = Constants::DEFAULT_ORDER;
        $type->user_id = $data['user_id'];
        
        if($type->save()) {
            $type->value = $id;
            if($type->is_sync == Constants::NOT_SYNC) {
                $type->is_sync = trans('text.TXT_0029');
            } else {
                $type->is_sync = trans('text.TXT_0028');
            }
            
            $output = [
                'code' => Constants::SUCCESS,
                'data' => $type
            ];
        }
        
        return response()->json($output);
    }

    /**
     * loadText
     */
    public function loadText() {
        $text = trans('text');
        $output = [
            'code' => Constants::SUCCESS,
            'data' => $text
        ];

        return response()->json($output);
    }
    
    /**
     * loadTypes
     */
    public function loadTypes() {
        $types = Types::orderBy('created_at', 'DESC')->get();

        $output = [
            'code' => Constants::SUCCESS,
            'data' => $types
        ];

        return response()->json($output);
    }

    /**
     * loadLocations
     */
    public function loadLocations() {
        $locations = Locations::orderBy('created_at', 'DESC')->get();

        $output = [
            'code' => Constants::SUCCESS,
            'data' => $locations
        ];

        return response()->json($output);
    }

    /**
     * loadActions
     */
    public function loadActions() {
        $actions = Actions::select('actions.*','locations.name AS location_name','types.name as type_name')
                ->leftJoin('locations','locations.id', '=', 'actions.location_id')
                ->leftJoin('types','types.value', '=', 'actions.type_id')
                ->orderBy('created_at', 'DESC')->get();

        $output = [
            'code' => Constants::SUCCESS,
            'data' => $actions,
        ];

        return response()->json($output);
    }
}
