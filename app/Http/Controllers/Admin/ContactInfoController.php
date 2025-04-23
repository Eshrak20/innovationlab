<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ContactInfo;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactInfoController extends Controller
{

    public function index()
    {
        $contactInfo = ContactInfo::all();
        return Inertia::render('Admin/ContactInfo/ContactInfo', [
            'contactInfo' => $contactInfo,
        ]);
    }


    public function update(Request $request, ContactInfo $contactInfo)
    {
        try {
            $contactInfo->title = $request->input('title');
            $contactInfo->email = $request->input('email');
            $contactInfo->email2 = $request->input('email2');       // ✅ New
            $contactInfo->email3 = $request->input('email3');       // ✅ New
            $contactInfo->address = $request->input('address');
            $contactInfo->phone = $request->input('phone');
            $contactInfo->phone2 = $request->input('phone2');       // ✅ New
            $contactInfo->phone3 = $request->input('phone3');       // ✅ New
            $contactInfo->mapRoad = $request->input('mapRoad');
            $contactInfo->mapDefault = $request->input('mapDefault');

            $contactInfo->save();

            return response()->json([
                'success' => true,
                'data' => $contactInfo->fresh()
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Something went wrong: ' . $e->getMessage()
            ], 500);
        }
    }

    public function destroy($id)
    {
        $contactInfo = ContactInfo::findOrFail($id);
        $contactInfo->delete();

        return response()->json(['message' => 'contactInfo deleted successfully']);
    }
}
