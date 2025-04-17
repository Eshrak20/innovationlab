<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\User;

class AdminAuthController extends Controller
{
    // Show Admin Login Page
    public function showLogin()
    {
        return Inertia::render('Admin/Auth/AdminLogin');
    }

    // Show Admin Register Page
    public function showRegister()
    {
        return Inertia::render('Admin/Auth/AdminRegister');
    }

    // Handle Admin Registration
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|confirmed|min:6',
            'invite_code' => 'required'
        ]);

        if ($request->invite_code !== env('ADMIN_INVITE_CODE')) {
            return back()->withErrors(['invite_code' => 'Invalid invite code.']);
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);

        // Create blank profile with default values
        $user->profile()->create([
            'title' => $request->name,
            'subtitle' => null,
            'experience_years' => null,
            'specialization' => null,
            'skills' => null,
            'certifications' => null,
            'age' => null,
            'education' => null,
            'location' => null,
            'language_preference' => null,
            'linkedin' => null,
            'github' => null,
            'portfolio_url' => null,
            'current_stack' => null,
            'tools' => null,
            'programming_languages' => null,
            'employment_type' => null,
            'projects' => null,
            'hourly_rate' => null,
            'bio' => null,
            'security_clearance' => null
        ]);

        Auth::login($user);
        $request->session()->regenerate();

        return Inertia::location(route('dashboard'));
    }



    // Handle Admin Login
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
            return redirect()->route('dashboard');
        }

        return back()->withErrors(['email' => 'Invalid credentials.']);
    }

    // Handle Admin Logout
    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect()->route('login');

    }
}
