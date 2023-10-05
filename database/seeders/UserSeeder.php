<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = new User();
            $user->name='Admin';
            $user->email='emad@noemail.com';
            $user->password = bcrypt('123456');
            $user->save();
        $user->assignRole('Super Admin');
    }
}
