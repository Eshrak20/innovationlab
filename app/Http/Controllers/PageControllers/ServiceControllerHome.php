<?php

namespace App\Http\Controllers\PageControllers;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ServiceControllerHome extends Controller
{
    public function index()
    {
        $service = Service::all();
        return Inertia::render('MainPages/Services/ServicesMain', [
            'service' => $service
        ]);
    }
}
