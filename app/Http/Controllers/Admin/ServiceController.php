<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ServiceController extends Controller
{
    public function index()
    {
        $services = Service::all();
        return Inertia::render('Admin/ServiceAdmin/ServiceList', [
            'services' => $services,
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/ServiceAdmin/ServiceCreate', [
            'categories' => ['technical', 'nontechnical'],
        ]);
    }


    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'short_description' => 'nullable|string',
            'description' => 'nullable|string',
            'icon' => 'nullable|string|max:255',
            'image' => 'nullable|image|max:9048',
            'is_featured' => 'nullable|boolean',
        ]);

        $imagePath = null;

        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('services', 'public');
            // Saved to storage/app/public/services
        }

        Service::create([
            'title' => $request->title,
            'short_description' => $request->short_description,
            'description' => $request->description,
            'icon' => $request->icon,
            'image' => $imagePath,
            'is_featured' => $request->boolean('is_featured', false),
        ]);

        return redirect()->route('services.index')->with('success', 'Service created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $service = Service::where('id', $id)
            ->firstOrFail();
    
        return Inertia::render('Admin/ServiceAdmin/ServiceEdit', [
            'service' => $service
        ]);
    }
    
    public function update(Request $request, $id)
    {
        $service = Service::where('id', $id)
            ->firstOrFail();
    
        $request->validate([
            'title' => 'required|string|max:255',
            'short_description' => 'nullable|string|max:1000',
            'description' => 'nullable|string',
            'icon' => 'nullable|string|max:255',
            'image' => 'nullable|image|max:9048',
            'is_featured' => 'boolean'
        ]);
    
        $data = $request->except('image');
    
        if ($request->hasFile('image')) {
            // Delete old image if it exists
            if ($service->image) {
                $oldPath = public_path('storage/' . $service->image);
                if (file_exists($oldPath)) {
                    unlink($oldPath);
                }
            }
    
            $imagePath = $request->file('image')->store('services', 'public');
            $data['image'] = $imagePath;
        }
    
        $service->update($data);
    
        if ($request->wantsJson()) {
            return response()->json(['success' => 'Service updated successfully']);
        }
    
        return redirect()->route('services.index'); // update route name if different
    }
    
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $service = Service::where('id', $id)
            ->firstOrFail();
        $service->delete();

        if (request()->wantsJson()) {
            return response()->json(['message' => 'service deleted awd ']);
        }

        return redirect()->route('service.index')->with('success', 'service deleted successfully');
    }
}
