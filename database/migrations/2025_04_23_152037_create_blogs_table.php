<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('blogs', function (Blueprint $table) {
            $table->id();
            $table->string('image')->nullable();
            $table->string('title');
            $table->text('summary')->nullable();
            $table->longText('description');
            $table->date('date');
            $table->string('published_by');
            $table->integer('likes')->default(0);
            $table->enum('category', ['technical', 'nontechnical']);
            $table->string('type'); // Or use enum if types are fixed
            $table->string('slug')->unique();
            $table->unsignedBigInteger('admin_id');
            $table->timestamps();
        });
    }

    public function down(): void {
        Schema::dropIfExists('blogs');
    }
};
