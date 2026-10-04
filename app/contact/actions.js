'use server';

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';

export async function handleContactSubmit(formData) {
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    const id = Date.now();
    const createdAt = new Date().toISOString();

    try {
        // Masukkan data ke tabel messages di database
        await sql`
            INSERT INTO messages (id, name, email, message, createdat) 
            VALUES (${id}, ${name}, ${email}, ${message}, ${createdAt})
        `;

        // Refresh halaman messages agar data terbaru langsung muncul
        revalidatePath('/messages');
    } catch (error) {
        console.error('Gagal menyimpan pesan:', error);
    }
}