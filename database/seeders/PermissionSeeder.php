<?php

namespace Database\Seeders;

use Spatie\Permission\Models\Permission;
use Spatie\Permission\PermissionRegistrar;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        $permissions = [
            '*.*',

            'users.index',
            'users.store',
            'users.update',
            'users.delete',
            'users.*',

            'settings.*',

        ];

        foreach( $permissions as $permit )
        {
            Permission::create(['name' => $permit, 'guard_name' => 'web']);
        }
    }
}
