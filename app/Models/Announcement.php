<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Prunable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Builder;

class Announcement extends Model
{
    use HasFactory, Notifiable, Prunable;

    protected $fillable = [
        'title',
        'context',
        'expired_at',
    ];

    public function prunable(): Builder
    {
        return static::where('expired_at', '<=', now()->subMonth());
    }
}
