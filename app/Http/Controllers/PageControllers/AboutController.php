<?php


namespace App\Http\Controllers\PageControllers;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class AboutController extends Controller
{
    public function index()
    {
        return Inertia::render('MainPages/About/About');
    }
}
