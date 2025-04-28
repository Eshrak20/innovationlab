<?php


namespace App\Http\Controllers\PageControllers;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use App\Models\ExperienceStat;
use App\Models\ExperienceStatus;
use App\Models\Profile;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $stats = ExperienceStatus::all();
        $profileData = Profile::all();
        $blog = Blog::all();

        return Inertia::render('MainPages/Home/Home', [
            'stats' => $stats,
            'profileData' => $profileData,
            'blog' => $blog
        ]);
    }
   
}
