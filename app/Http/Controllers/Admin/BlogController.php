<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Blog;
use Inertia\Inertia;
use Illuminate\Support\Str;

class BlogController extends Controller
{
    // Show only the blogs of the logged-in admin
    public function index()
    {
        $blogs = Blog::where('admin_id', auth()->id())
            ->orderBy('created_at', 'desc')
            ->get();

        return Inertia::render('Admin/Blog/BlogList', [
            'blogs' => $blogs,
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Blog/BlogCreate', [
            'categories' => ['technical', 'nontechnical'],
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
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048', // Ensure image validation
            'title' => 'required|string|max:255',
            'summary' => 'nullable|string',
            'description' => 'required|string',
            'date' => 'required|date',
            'published_by' => 'required|string',
            'category' => 'required|in:technical,nontechnical',
            'type' => 'required|string',
            'slug' => 'required|string|unique:blogs,slug',
        ]);

        $imagePath = null;

        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('blogs', 'public');
            // The file gets saved under storage/app/public/blogs
        }

        $blog = Blog::create([
            'image' => $imagePath, // Save the image path
            'title' => $request->title,
            'summary' => $request->summary,
            'description' => $request->description,
            'date' => $request->date,
            'published_by' => $request->published_by,
            'category' => $request->category,
            'type' => $request->type,
            'slug' => Str::slug($request->slug),
            'admin_id' => auth()->id(),
        ]);

        return redirect()->route('blogs.index')->with('success', 'Blog created successfully');
    }


    public function edit($id)
    {
        $blog = Blog::where('id', $id)
            ->where('admin_id', auth()->id())
            ->firstOrFail();

        return Inertia::render('Admin/Blog/BlogEdit', [
            'blog' => $blog,
            'categories' => ['technical', 'nontechnical'],
        ]);
    }
    public function update(Request $request, $id)
    {
        $blog = Blog::where('id', $id)
            ->where('admin_id', auth()->id())
            ->firstOrFail();

        $request->validate([
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'title' => 'required|string|max:255',
            'summary' => 'nullable|string',
            'description' => 'required|string',
            'date' => 'required|date',
            'published_by' => 'required|string',
            'category' => 'required|in:technical,nontechnical',
            'type' => 'required|string',
            'slug' => 'required|string|unique:blogs,slug,' . $id,
        ]);

        // Collect the validated data
        $data = $request->only([
            'title',
            'summary',
            'description',
            'date',
            'published_by',
            'category',
            'type',
            'slug'
        ]);

        // Handle the image file if it exists
        if ($request->hasFile('image')) {
            // Delete old image
            if ($blog->image) {
                $oldPath = public_path($blog->image);
                if (file_exists($oldPath)) {
                    unlink($oldPath);
                }
            }

            // Upload new image
            $imagePath = $request->file('image')->store('blogs', 'public');
            $data['image'] = '/storage/' . $imagePath;
        }

        // Update the blog with the validated data
        $blog->update($data);

        return redirect()->route('blogs.index')->with('success', 'Blog updated successfully');
    }



    // public function update(Request $request, $id)
    // {
    //     $blog = Blog::where('id', $id)
    //         ->where('admin_id', auth()->id())
    //         ->firstOrFail();

    //     $request->validate([
    //         'image' => 'nullable|string',
    //         'title' => 'required|string|max:255',
    //         'summary' => 'nullable|string',
    //         'description' => 'required|string',
    //         'date' => 'required|date',
    //         'published_by' => 'required|string',
    //         'category' => 'required|in:technical,nontechnical',
    //         'type' => 'required|string',
    //         'slug' => 'required|string|unique:blogs,slug,' . $id,
    //     ]);

    //     $blog->update([
    //         'image' => $request->image,
    //         'title' => $request->title,
    //         'summary' => $request->summary,
    //         'description' => $request->description,
    //         'date' => $request->date,
    //         'published_by' => $request->published_by,
    //         'category' => $request->category,
    //         'type' => $request->type,
    //         'slug' => Str::slug($request->slug),
    //     ]);

    //     return redirect()->route('blogs.index')->with('success', 'Blog updated successfully');
    // }

    public function destroy($id)
    {
        $blog = Blog::where('id', $id)
            ->where('admin_id', auth()->id())
            ->firstOrFail();

        $blog->delete();

        return redirect()->route('blogs.index')->with('success', 'Blog deleted successfully');
    }
}
