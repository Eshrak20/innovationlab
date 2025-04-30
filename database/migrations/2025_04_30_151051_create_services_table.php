<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('services', function (Blueprint $table) {
            $table->id();
            $table->string('title');                 // e.g. "Web Development"
            $table->text('short_description')->nullable(); // small intro
            $table->longText('description')->nullable();   // full content
            $table->string('icon')->nullable();      // e.g. icon class or image URL
            $table->string('image')->nullable();     // banner or thumbnail
            $table->boolean('is_featured')->default(false); // to highlight on homepage
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('services');
    }
};
