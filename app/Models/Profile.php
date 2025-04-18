<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    /**
     * The guarded attributes
     *
     * @var array
     */
    protected $guarded = [];

    /**
     * Get the user that owns the profile
     */
    
     // Profile.php
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
