<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Mission;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MissionController extends Controller
{
    public function index()
    {
        $missions = Mission::all();
        return Inertia::render('Admin/MissionData/MissionData', [
            'missions' => $missions,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'text' => 'required|string',
        ]);

        $mission = Mission::create([
            'text' => $request->text,
        ]);

        return response()->json($mission, 201);
    }
    public function update(Request $request, Mission $mission)
    {
        try {
            $mission->text = $request->input('text');
            $mission->save();
            return response()->json([
                'success' => true,
                'data' => $mission->fresh() // Return refreshed model from database
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Something went wrong while updating mission.'
            ], 500);
        }
    }
    public function destroy($id)
    {
        $mission = Mission::findOrFail($id);
        $mission->delete();

        return response()->json(['message' => 'mission deleted successfully']);
    }
}
