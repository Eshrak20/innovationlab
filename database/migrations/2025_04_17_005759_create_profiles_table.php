<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('profiles', function (Blueprint $table) {
            // Core Columns
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();

            // Professional Info
            $table->string('title')->nullable();
            $table->string('subtitle')->nullable();
            $table->integer('experience_years')->nullable();
            $table->text('specialization')->nullable();

            // Skills & Certifications (Arrays)
            $table->json('skills')->nullable();
            $table->json('certifications')->nullable();

            // Personal Details
            $table->integer('age')->nullable();
            $table->string('education')->nullable();
            $table->string('location')->nullable();
            $table->string('language_preference')->nullable();

            // Social & Contact
            $table->string('linkedin')->nullable();
            $table->string('github')->nullable();
            $table->string('portfolio_url')->nullable();

            // Technical Preferences
            $table->string('current_stack')->nullable();
            $table->json('tools')->nullable();
            $table->json('programming_languages')->nullable();

            // Availability
            $table->string('employment_type')->nullable();

            // Projects
            $table->json('projects')->nullable();

            // Metadata
            $table->integer('hourly_rate')->nullable();
            $table->text('bio')->nullable();
            $table->string('security_clearance')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('profiles');
    }
};
