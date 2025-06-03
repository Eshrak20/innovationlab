<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Gallery;
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
}
