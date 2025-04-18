<?php


namespace App\Http\Controllers\PageControllers;

use App\Http\Controllers\Controller;
use App\Models\Profile;
use Inertia\Inertia;

class AboutController extends Controller
{
    public function index()

    {
        $profileData = Profile::all();
        return Inertia::render('MainPages/About/About', [
            'profileData' => $profileData
        ]);
    }
}
