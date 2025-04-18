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
        // dd($request->all());
        $validated = $request->validate([
            'title' => 'nullable|string|max:255',
            // 'profilePhotoPath' => 'nullable|file|image|max:3072', // Max 3MB
            'subtitle' => 'nullable|string|max:255',
            'experience_years' => 'nullable|integer|min:0',
            'specialization' => 'nullable|string',
            'age' => 'nullable|integer|min:18',
            'education' => 'nullable|string',
            'location' => 'nullable|string',
            'linkedin' => 'nullable|url',
            'github' => 'nullable|url',
            'portfolio_url' => 'nullable|url',
            'profilePhotoPath' => 'nullable|url',
            'current_stack' => 'nullable|string',
            'employment_type' => 'nullable|string',
            'hourly_rate' => 'nullable|numeric|min:0',
            'bio' => 'nullable|string',
            'skills' => 'nullable|array',
            'certifications' => 'nullable|array',
            'programming_languages' => 'nullable|array',
            'tools' => 'nullable|array',
            'projects' => 'nullable|array',
            // ... other validation rules
        ]);

        if ($request->hasFile('profilePhotoPath')) {
            $file = $request->file('profilePhotoPath');
            dd($file);
            $filename = 'profile_' . $profile->id . '_' . time() . '.' . $file->extension();

            // Ensure directory exists
            $path = public_path('reactAssets/images/ProfileImages');
            if (!file_exists($path)) mkdir($path, 0755, true);

            // Save file
            $file->move($path, $filename);

            // Delete old file if exists
            if ($profile->profilePhotoPath) {
                $oldPath = public_path('reactAssets/images/ProfileImages/' . $profile->profilePhotoPath);
                if (file_exists($oldPath)) unlink($oldPath);
            }

            $validated['profilePhotoPath'] = $filename;
        }

        $profile->update($validated);

        return response()->json($profile->fresh());
    }
}
