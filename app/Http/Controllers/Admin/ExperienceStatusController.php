<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ExperienceStatus;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ExperienceStatusController extends Controller
{
    public function index()
    {
        $experiences = ExperienceStatus::all();
        return Inertia::render('Admin/ExperienceStatus/ExperienceStatus', [
            'experiences' => $experiences,
        ]);
    }


    public function update(Request $request, ExperienceStatus $experienceStatus)
    {
        $validated = $request->validate([
            'value' => 'required|integer|min:0'
        ]);
    
        $updated = $experienceStatus->update($validated);
        
        return response()->json([
            'success' => true,
            'data' => $experienceStatus->fresh() // Return refreshed model from database
        ]);
    }
}
