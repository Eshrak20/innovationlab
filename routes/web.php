<?php

use App\Http\Controllers\PageControllers\AboutController;
use App\Http\Controllers\PageControllers\ContactController;
use App\Http\Controllers\PageControllers\HomeController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\AdminAuthController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\ExperienceStatusController;
use App\Http\Controllers\Admin\ProfileController;

Route::get('/', [HomeController::class, 'index']);
Route::get('/about', [AboutController::class, 'index']);
Route::get('/contact', [ContactController::class, 'index']);


Route::middleware('guest')->group(function () {
    Route::get('/login', [AdminAuthController::class, 'showLogin'])->name('login');
    Route::get('/register', [AdminAuthController::class, 'showRegister'])->name('register');

    Route::post('/register', [AdminAuthController::class, 'register']);
    Route::post('/login', [AdminAuthController::class, 'login']);
});

Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::post('/logout', [AdminAuthController::class, 'logout'])->name('logout');

    Route::resource('/experience-statuses', ExperienceStatusController::class);
    Route::resource('/profile', ProfileController::class);
    
});

