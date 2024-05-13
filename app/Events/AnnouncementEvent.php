<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class AnnouncementEvent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;   

    /**
     * Create a new event instance.
     */
    public function __construct(public $data)
    {
        $this->data = $data;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return array<int, \Illuminate\Broadcasting\Channel>
     */
    public function broadcastOn(): array
    {
        return [
            new Channel('channel'),
        ];
    }

    public function broadcastWith(): array
    {
     
        return [
            'data' => $this->data,
        ];
    }
}
