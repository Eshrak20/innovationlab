<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    public function admin() {
        return $this->belongsTo(User::class, 'admin_id');
    }
    
}
