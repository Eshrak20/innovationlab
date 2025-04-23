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
        try {
            $experienceStatus->value = $request->input('value');
            $experienceStatus->save();
            return response()->json([
                'success' => true,
                'data' => $experienceStatus->fresh() // Return refreshed model from database
            ]);
        } catch (\Exception $e) {
        }
    }
    public function destroy($id)
    {
        $experiences = ExperienceStatus::findOrFail($id);
        $experiences->delete();

        return response()->json(['message' => 'experiences deleted successfully']);
    }
}
