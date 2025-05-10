<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    protected $fillable = [
        'image',
        'title',
        'summary',
        'description',
        'date',
        'published_by',
        'profile_photo',
        'likes',
        'category',
        'type',
        'slug',
        'admin_id'
    ];
    public function admin()
    {
        return $this->belongsTo(User::class, 'admin_id');
    }
}
