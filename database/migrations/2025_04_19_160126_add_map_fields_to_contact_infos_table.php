<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('contact_infos', function (Blueprint $table) {
            $table->text('mapRoad')->nullable()->after('phone');
            $table->text('mapDefault')->nullable()->after('mapRoad');
        });
    }

    public function down(): void
    {
        Schema::table('contact_infos', function (Blueprint $table) {
            $table->dropColumn(['mapRoad', 'mapDefault']);
        });
    }
};
