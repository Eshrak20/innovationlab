<?php


namespace App\Http\Controllers\PageControllers;

use App\Http\Controllers\Controller;
use App\Models\ExperienceStat;
use App\Models\ExperienceStatus;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $stats = ExperienceStatus::all();
        return Inertia::render('MainPages/Home/Home', [
            "stats" => $stats
        ]);
    }
}
