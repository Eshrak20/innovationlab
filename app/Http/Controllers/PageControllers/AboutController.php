<?php


namespace App\Http\Controllers\PageControllers;

use App\Http\Controllers\Controller;
use App\Models\Management;
use App\Models\Mission;
use App\Models\Profile;
use Inertia\Inertia;

class AboutController extends Controller
{
    public function index()

    {
        $profileData = Profile::all();
        $managementData = Management::all();
        $missionData = Mission::all();
        return Inertia::render('MainPages/About/About', [
            'profileData' => $profileData,
            'managementData' => $managementData,
            'missionData' => $missionData
        ]);
    }
}
