<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Gallery;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GalleryController extends Controller
{

    public function index()
    {
        $galleries = Gallery::orderBy('updated_at', 'desc')->get();
        return Inertia::render('Admin/AdminGallery/AdminGalleryList', [
            'galleries' => $galleries,
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/AdminGallery/AdminGalleryCreate');
    }

    public function edit($id)
    {
        $galleries = Gallery::where('id', $id)
            ->firstOrFail();

        return Inertia::render('Admin/AdminGallery/AdminGalleryEdit', [
            'galleries' => $galleries
        ]);
    }
    public function store(Request $request)
    {
        $request->validate([
            'image_name' => 'required|string|max:255',
            'image_path' => 'nullable|image|max:9048',
            'is_home' => 'nullable|boolean',
        ]);

        $imagePath = null;

        // Handle image upload if provided
        if ($request->hasFile('image_path')) {
            $imagePath = $request->file('image_path')->store('galleries', 'public');
        }

        // Create a new gallery record
        Gallery::create([
            'image_name' => $request->image_name,
            'image_path' => $imagePath,
            'is_home' => $request->boolean('is_home', false),
        ]);

        return redirect()->route('galleries.index')->with('success', 'Gallery created successfully.');
    }

    public function update(Request $request, $id)
    {
        $gallery = Gallery::findOrFail($id);
            

        // Validate incoming data
        $request->validate([
            'image_name' => 'required|string|max:255',
            'image_path' => 'nullable|image|max:9048',
            'is_home' => 'nullable|boolean',
        ]);

        $data = $request->except('image_path');

        // Handle file upload if a new image is provided
        if ($request->hasFile('image_path')) {
            // Delete old image if it exists
            if ($gallery->image_path) {
                $oldPath = public_path('storage/' . $gallery->image_path);
                if (file_exists($oldPath)) {
                    unlink($oldPath);
                }
            }

            // Store new image
            $path = $request->file('image_path')->store('galleries', 'public');
            $data['image_path'] = $path;
        }

        // Ensure 'is_home' gets a default value if checkbox is unchecked
        $data['is_home'] = $request->boolean('is_home');

        // Update the gallery
        $gallery->update($data);

        // Return appropriate response
        if ($request->wantsJson()) {
            return response()->json(['success' => 'Gallery updated successfully']);
        }

        return redirect()->route('galleries.index')->with('success', 'Gallery updated successfully');
    }

    public function destroy(string $id)
    {
        $galleries = Gallery::where('id', $id)
            ->firstOrFail();
        $galleries->delete();

        if (request()->wantsJson()) {
            return response()->json(['message' => 'galleries deleted awd ']);
        }

        return redirect()->route('galleries.index')->with('success', 'galleries deleted successfully');
    }
}
