<?php

namespace App\Http\Controllers\PageControllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TermsConditionsController extends Controller
{
    public function index()
    {
        return Inertia::render('MainPages/TermsConditions/TermsConditions');
    }
}
