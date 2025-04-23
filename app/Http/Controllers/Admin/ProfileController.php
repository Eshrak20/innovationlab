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
        $profile = $user->profile()->with('user')->firstOrFail();

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
            'profilePhotoPath' => 'nullable|file|image|max:3072',
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

        if ($request->hasFile('profilePhotoPath')) {
            // Delete the old profile photo if it exists
            if ($profile->profilePhotoPath) {
                $oldPath = public_path($profile->profilePhotoPath); // Convert to absolute path
                if (file_exists($oldPath)) {
                    unlink($oldPath); // Delete the old image
                }
            }

            // Store new profile photo
            $imagePath = $request->file('profilePhotoPath')->store('profile_photos', 'public');
            $validated['profilePhotoPath'] = '/storage/' . $imagePath;
        }

        $profile->update($validated);

        return response()->json($profile->fresh());
    }
}
