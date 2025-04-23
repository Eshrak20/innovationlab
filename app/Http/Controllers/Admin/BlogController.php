<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Blog;
use Inertia\Inertia;

class BlogController extends Controller
{
    // Show only the blogs of the logged-in admin
    public function index()
    {
        $adminId = auth()->id();

        $blogs = Blog::where('admin_id', $adminId)
            ->orderBy('created_at', 'desc')
            ->get();
        return Inertia::render('Admin/Blog/BlogList', [
            'blogs' => $blogs,
        ]);
    }
    public function create()
    {
        return Inertia::render('Admin/Blog/BlogCreate');
    }
    // Store a new blog
    public function store(Request $request)
    {
        $request->validate([
            'image' => 'nullable|string',
            'title' => 'required|string|max:255',
            'summary' => 'nullable|string',
            'description' => 'required|string',
            'date' => 'required|date',
            'category' => 'required|in:technical,nontechnical',
            'type' => 'required|string',
            'slug' => 'required|string|unique:blogs,slug',
            'is_published' => 'boolean'
        ]);

        $blog = Blog::create([
            ...$request->all(),
            'admin_id' => auth()->id(),
        ]);

        return response()->json(['message' => 'Blog created successfully', 'blog' => $blog]);
    }

    // Update blog (only if it's theirs)
    public function update(Request $request, $id)
    {
        $blog = Blog::where('id', $id)
            ->where('admin_id', auth()->id())
            ->firstOrFail();

        $request->validate([
            'image' => 'nullable|string',
            'title' => 'required|string|max:255',
            'summary' => 'nullable|string',
            'description' => 'required|string',
            'date' => 'required|date',
            'category' => 'required|in:technical,nontechnical',
            'type' => 'required|string',
            'slug' => 'required|string|unique:blogs,slug,' . $id,
            'is_published' => 'boolean'
        ]);

        $blog->update($request->all());

        return response()->json(['message' => 'Blog updated successfully', 'blog' => $blog]);
    }

    // Delete blog (only if it's theirs)
    public function destroy($id)
    {
        $blog = Blog::where('id', $id)
            ->where('admin_id', auth()->id())
            ->firstOrFail();

        $blog->delete();

        return response()->json(['message' => 'Blog deleted successfully']);
    }
}
