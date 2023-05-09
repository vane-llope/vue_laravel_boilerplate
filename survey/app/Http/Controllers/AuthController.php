<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email|string|unique:users,email',
            'password' => ['required', 'confirmed', 'min:6'],
        ]);

        //hash password
        $data['password'] = bcrypt($data['password']);
        //create user
        $user = User::create($data);
        //login
      //  auth()->login($user);
        $token = $user->createToken('main')->plainTextToken;
        return response([
            'user' => $user,
            'token' => $token
        ]);
    }

    public function login(Request $request)
    {
        $formFields = $request->validate([
            'email' => 'required|email|string|exists:users,email',
            'password' => ['required'],
            'remember' => 'boolean'
        ]);
        if (auth()->attempt($formFields)) {
            $user = Auth::user();
            unset($user['"email_verified_at"']);
            $token = $user->createToken('main')->plainTextToken;
            return response([
                'user' => $user,
                'token' => $token
            ]);
        }else
        return response([
            'error' => 'The Private Cridentials Are Not Correct'
        ], 422);
    }
    public function logout(Request $request) {
        //auth()->user()->tokens()->delete();
        $user = Auth::user();
        $user->currentAccessToken()->delete();

        return [
            'message' =>  'Logged out'
        ];
    }

}
