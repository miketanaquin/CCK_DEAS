<?php

use Inertia\Inertia;
use App\Models\Announcement;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\AnnouncementController;
use App\Http\Controllers\AnnouncementDashboardController;
use App\Http\Controllers\DashboardController;
use SebastianBergmann\CodeCoverage\Report\Html\Dashboard;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::middleware('guest')->group(function () {
//     Route::get('/', [AnnouncementController::class, 'index'])->name('announcement.index'); 
// });

// Route::get('/dashboard', function () {
//      return Inertia::render('Dashboard');
//  })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');


    Route::post('/dashboard/save', [AnnouncementController::class, 'store'])->name('dashboard.save');
    Route::patch('/dashboard/update', [AnnouncementController::class, 'update'])->name('dashboard.update');

    Route::delete('/dashboard/destroy/{id}', [AnnouncementController::class, 'destroy'])->name('dashboard.destroy');


    Route::get('/dashboard/store', [DashboardController::class, 'store'])->name('dashboard.store');
    Route::get('/dashboard/edit/{id}', [DashboardController::class, 'edit'])->name('dashboard.edit');
    Route::get('/dashboard/{id?}', [DashboardController::class, 'index'])->name('dashboard.index');
});

Route::get('/', [AnnouncementController::class, 'index'])->name('announcement.index');


require __DIR__ . '/auth.php';
