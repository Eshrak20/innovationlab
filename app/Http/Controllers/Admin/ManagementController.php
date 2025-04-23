<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Management;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ManagementController extends Controller
{
    public function index()
    {
        $managementData = Management::all();
        return Inertia::render('Admin/ManagementData/ManagementData', [
            'managementData' => $managementData,
        ]);
    }

    // public function update(Request $request, Management $management)
    // {

    //     try {
    //         $management->title = $request->input('title');
    //         $management->number = $request->input('number');
    //         $management->save();
    //         return response()->json([
    //             'success' => true,
    //             'data' => $management->fresh() // Return refreshed model from database
    //         ]);
    //     } catch (\Exception $e) {
    //     }
    // }


    public function update(Request $request, $id)
    {
        try {
            $managementData = Management::findOrFail($id);
            $managementData->title = $request->input('title');
            $managementData->number = $request->input('number');
            $managementData->save();

            return response()->json([
                'success' => true,
                'data' => $managementData
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage()
            ], 500);
        }
    }

    public function destroy($id)
    {
        $managementData = Management::findOrFail($id);
        $managementData->delete();

        return response()->json(['message' => 'managementData deleted successfully']);
    }
}
