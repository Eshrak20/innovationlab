<?php

namespace App\Http\Controllers\PageControllers;

use App\Http\Controllers\Controller;
use App\Models\ContactInfo;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function index()
    {
        $contactInfo = ContactInfo::all();
        return Inertia::render('MainPages/Contact/Contact', [
            'contactInfo' => $contactInfo
        ]);
    }
}
