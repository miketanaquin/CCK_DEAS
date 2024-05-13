<?php

namespace App\Http\Controllers;

use Dotenv\Util\Str;
use Inertia\Inertia;
use App\Models\Announcement;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use App\Events\AnnouncementEvent;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use App\Models\AnnouncementDashboard;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Notification;
use App\Http\Requests\StoreAnnouncementRequest;
use App\Notifications\AnnouncementNotification;
use App\Http\Requests\UpdateAnnouncementRequest;

class AnnouncementController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $notifs = Announcement::whereNotNull('id')->whereDate('expired_at', '>=', Carbon::now())->get();
        // dd($notifs);
        return Inertia::render('Welcome', [
            'notifs' => $notifs,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAnnouncementRequest $request)
    {
        //   $request->validated();
        // $arr = [$request->date, $request->time];
        // $date_time = implode(" ", $arr);

        $data = Announcement::create([
            'title' => $request->title,
            'context' => $request->context,
            'expired_at' => $request->date,
        ]);

        AnnouncementEvent::dispatch($data->toArray());
        return to_route('dashboard.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Announcement $announcement)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)

    {
        // $announcement = Announcement::find($request->id);
        // $arr = [$request->date, $request->time];
        // $date_time = implode(" ", $arr);

        Announcement::where('id', $request->id)->update([
            'title' => $request->title,
            'context' => $request->context,
            'expired_at' => $request->date
        ]);
        AnnouncementEvent::dispatch('refresh');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $announcement = Announcement::findOrFail($id);

        $announcement->delete();

        AnnouncementEvent::dispatch('refresh');

        return to_route('dashboard.index');
    }
}
