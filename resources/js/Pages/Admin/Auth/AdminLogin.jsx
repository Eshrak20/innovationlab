import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';

export default function AdminLogin() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    return (
        <form onSubmit={submit} className="max-w-md mx-auto mt-10 p-4 bg-white rounded shadow">
            <h2 className="text-2xl mb-4">Admin Login</h2>

            <input type="email" value={data.email} onChange={(e) => setData('email', e.target.value)} placeholder="Email" className="block w-full mb-2" />
            <input type="password" value={data.password} onChange={(e) => setData('password', e.target.value)} placeholder="Password" className="block w-full mb-4" />
            <button disabled={processing} className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>

            {errors.email && <div className="text-red-600 mt-2">{errors.email}</div>}
        </form>
    );
}
