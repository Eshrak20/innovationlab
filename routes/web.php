<?php

use App\Http\Controllers\PageControllers\AboutController;
use App\Http\Controllers\PageControllers\ContactController;
use App\Http\Controllers\PageControllers\HomeController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\AdminAuthController;
use App\Http\Controllers\Admin\BlogController;
use App\Http\Controllers\Admin\ContactInfoController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\ExperienceStatusController;
use App\Http\Controllers\Admin\FormController;
use App\Http\Controllers\Admin\ManagementController;
use App\Http\Controllers\Admin\MissionController;
use App\Http\Controllers\Admin\ProfileController;
use App\Http\Controllers\PageControllers\BlogControllerView;
use App\Http\Controllers\PageControllers\PrivacyPolicyController;
use App\Http\Controllers\PageControllers\TermsConditionsController;

Route::get('/', [HomeController::class, 'index']);
Route::get('/about', [AboutController::class, 'index']);
Route::get('/blog', [BlogControllerView::class, 'index']);
Route::get('/contact', [ContactController::class, 'index']);
Route::post('/forms', [FormController::class, 'store'])->name('forms.store');
Route::get('/privacy', [PrivacyPolicyController::class, 'index']);
Route::get('/terms', [TermsConditionsController::class, 'index']);


Route::middleware('guest')->group(function () {
    Route::get('/login', [AdminAuthController::class, 'showLogin'])->name('login');
    Route::get('/register', [AdminAuthController::class, 'showRegister'])->name('register');

    Route::post('/register', [AdminAuthController::class, 'register']);
    Route::post('/login', [AdminAuthController::class, 'login']);
});

Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::post('/logout', [AdminAuthController::class, 'logout'])->name('logout');
    Route::resource('/blogs', BlogController::class);
    Route::resource('/experienceStatuses', ExperienceStatusController::class);
    Route::resource('/contactInfo', ContactInfoController::class);
    Route::resource('/mission', MissionController::class);
    Route::resource('/managementData', ManagementController::class);
    Route::resource('/profile', ProfileController::class);
    Route::resource('/forms', FormController::class);
});
