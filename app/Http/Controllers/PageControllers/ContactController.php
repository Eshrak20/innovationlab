<?php

namespace App\Http\Controllers\PageControllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function index()
    {
        return Inertia::render('MainPages/Contact/Contact');
    }
}
