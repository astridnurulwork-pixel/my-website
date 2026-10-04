import { sql } from '@vercel/postgres';

// Fungsi untuk memastikan tabel messages sudah ada di database
export async function createTable() {
    try {
        await sql`
            CREATE TABLE IF NOT EXISTS messages (
                SERIAL PRIMARY KEY,
                id BIGINT UNIQUE NOT NULL,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                TEXT NOT NULL,
                createdAt VARCHAR(255) NOT NULL
            );
        `;
    } catch (error) {
        console.error('Gagal membuat tabel:', error);
    }
}