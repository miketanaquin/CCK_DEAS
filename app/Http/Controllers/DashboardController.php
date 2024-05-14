<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Inertia\Inertia;
use App\Models\Announcement;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $notifs = Announcement::whereNotNull('id')->whereDate('expired_at', '>=', Carbon::now())->orderBy('id', 'desc')->get();

        return Inertia::render('Dashboard/Index', [
            'notifs' => $notifs,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return Inertia::render('Dashboard/Store');
    }

    /**
     * Display the specified resource.
     */
    public function edit($id)
    {
        $item = Announcement::findOrFail($id);
        $exp = explode(" ", $item->expired_at);
        $date = $exp[0];
        return Inertia::render('Dashboard/Edit', [
            'item' => $item,
            'date' => $date,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
