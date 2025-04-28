<?php

namespace App\Http\Controllers\PageControllers;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogControllerView extends Controller
{
    public function index()
    {
        $blogInfo = Blog::all();
        return Inertia::render('MainPages/Blog/Blog', [
            'blogInfo' => $blogInfo
        ]);
    }
}
