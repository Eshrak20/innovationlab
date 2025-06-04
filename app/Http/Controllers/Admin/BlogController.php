<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Blog;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Illuminate\Support\Str;


class BlogController extends Controller
{
    // Show only the blogs of the logged-in admin
    public function index()
    {
        $blogs = Blog::where('admin_id', auth()->id())
            ->orderBy('updated_at', 'desc')
            ->get();

        return Inertia::render('Admin/Blog/BlogList', [
            'blogs' => $blogs,
        ]);
    }
    public function create()
    {
        $adminProfile = auth()->user();
        $adminProfile->load('profile');

        return Inertia::render('Admin/Blog/BlogCreate', [
            'categories' => ['technical', 'nontechnical'],
            'adminProfile' => [
                'name' => $adminProfile->profile->title,
                // If profilePhotoPath exists, prepend 'storage/' only if it's not already included
                'photo' => $adminProfile->profile->profilePhotoPath
                    ? asset('storage/' . ltrim($adminProfile->profile->profilePhotoPath, '/storage/'))  // Remove leading '/storage/' if present
                    : asset('default-avatar.png'),
            ],
        ]);
    }





    public function show($id)
    {
        $blog = Blog::where('id', $id)
            ->where('admin_id', auth()->id())
            ->firstOrFail();

        return Inertia::render('Admin/Blog/BlogDetails', [
            'blog' => $blog,
        ]);
    }


    public function store(Request $request)
    {
        $request->validate([
            'image' => 'nullable|image|max:9048',
            'title' => 'required|string|max:255',
            'summary' => 'nullable|string',
            'description' => 'required|string',
            'date' => 'required|date',
            'published_by' => 'required|string',
            'category' => 'required|in:technical,nontechnical',
            'slug' => 'required|string|unique:blogs,slug',
        ]);

        $imagePath = null;

        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('blogs', 'public');
            // The file gets saved under storage/app/public/blogs
        }

        // Save blog with the correct relative path for profile_photo
        Blog::create([
            'image' => $imagePath,
            'title' => $request->title,
            'summary' => $request->summary,
            'description' => $request->description,
            'date' => $request->date,
            'published_by' => $request->published_by,
            'profile_photo' => $request->profile_photo,
            'category' => $request->category,
            'slug' => Str::slug($request->slug),
            'admin_id' => auth()->id(),
        ]);
        return redirect()->route('blogs.index')->with('success', 'blog created successfully.');
    }




    public function edit($id)

    {
        $adminProfile = auth()->user();
        $adminProfile->load('profile');
        $blog = Blog::where('id', $id)
            ->where('admin_id', auth()->id())
            ->firstOrFail();

        return Inertia::render('Admin/Blog/BlogEdit', [
            'blog' => $blog,
            'categories' => ['technical', 'nontechnical'],
            'adminProfile' => [
                'name' => $adminProfile->profile->title,
                'photo' => $adminProfile->profile->profilePhotoPath
                    ? asset('storage/' . $adminProfile->profile->profilePhotoPath)
                    : asset('default-avatar.png'),
            ],
        ]);
    }
    public function update(Request $request, $id)
    {
        $blog = Blog::where('id', $id)
            ->where('admin_id', auth()->id())
            ->firstOrFail();

        $request->validate([
            'image' => 'nullable|image|max:2048',
            'title' => 'required|string|max:255',
            'summary' => 'nullable|string',
            'description' => 'required|string',
            'date' => 'required|date',
            'published_by' => 'required|string',
            'category' => 'required|in:technical,nontechnical',
            'slug' => 'required|string|unique:blogs,slug,' . $id,
        ]);

        $data = $request->except('image');

        if ($request->hasFile('image')) {
            // Delete old image
            if ($blog->image) {
                $oldPath = public_path('storage/' . $blog->image);
                if (file_exists($oldPath)) {
                    unlink($oldPath);
                }
            }

            $imagePath = $request->file('image')->store('blogs', 'public');
            $data['image'] = $imagePath;
        }

        $blog->update($data);

        if ($request->wantsJson()) {
            return response()->json(['success' => 'Blog updated successfully']);
        }

         return redirect()->route('blogs.index')->with('success', 'Blog updated successfully');
    }


    public function destroy($id)
    {
        $blog = Blog::where('id', $id)
            ->where('admin_id', auth()->id())
            ->firstOrFail();

        $blog->delete();

        if (request()->wantsJson()) {
            return response()->json(['message' => 'Blog deleted']);
        }

        return redirect()->route('blogs.index')->with('success', 'Blog deleted successfully');
    }
}
