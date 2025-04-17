<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Profile;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProfileController extends Controller
{
    public function index()
    {
        $user = auth()->user();
        
        // This will throw an exception if profile doesn't exist (which it shouldn't)
        $profile = $user->profile()->with('user')->firstOrFail();
        // dd($profile);
    
        return Inertia::render('Admin/ProfileEdit/ProfileEdit', [
            'profile' => $profile,
            'auth' => [
                'user' => [
                    'name' => $user->name,
                    'email' => $user->email,
                ]
            ]
        ]);
    }


    public function update(Request $request, Profile $profile)
    {
        $validated = $request->validate([
            'title' => 'nullable|string|max:255',
            'subtitle' => 'nullable|string|max:255',
            'experience_years' => 'nullable|integer|min:0',
            'specialization' => 'nullable|string',
            'age' => 'nullable|integer|min:18',
            'education' => 'nullable|string',
            'location' => 'nullable|string',
            'linkedin' => 'nullable|url',
            'github' => 'nullable|url',
            'portfolio_url' => 'nullable|url',
            'current_stack' => 'nullable|string',
            'employment_type' => 'nullable|string',
            'hourly_rate' => 'nullable|numeric|min:0',
            'bio' => 'nullable|string',
            'skills' => 'nullable|array',
            'certifications' => 'nullable|array',
            'programming_languages' => 'nullable|array',
            'tools' => 'nullable|array',
            'projects' => 'nullable|array',
        ]);

        $profile->update($validated);

        return response()->json($profile->fresh());
    }
}
