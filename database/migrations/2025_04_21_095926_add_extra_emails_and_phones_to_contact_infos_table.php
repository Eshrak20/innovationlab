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
        Schema::table('contact_infos', function (Blueprint $table) {
            $table->string('email2')->nullable()->after('email');
            $table->string('email3')->nullable()->after('email2');
            $table->string('phone2')->nullable()->after('phone');
            $table->string('phone3')->nullable()->after('phone2');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('contact_infos', function (Blueprint $table) {
            $table->dropColumn(['email2', 'email3', 'phone2', 'phone3']);
        });
    }
};
