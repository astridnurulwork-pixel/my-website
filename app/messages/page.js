import { sql } from '@vercel/postgres';

export const dynamic = 'force-dynamic';

export default async function MessagesPage() {
    let messages = [];

    try {
        // Ambil semua data pesan dari database
        const result = await sql`SELECT * FROM messages ORDER BY id DESC`;
        messages = result.rows;
    } catch (error) {
        console.error('Gagal mengambil pesan:', error);
    }

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Daftar Pesan</h1>
            {messages.length === 0 ? (
                <p>Belum ada pesan yang masuk.</p>
            ) : (
                <ul className="space-y-4">
                    {messages.map((msg) => (
                        <li key={msg.id} className="border p-4 rounded shadow">
                            <p><strong>Nama:</strong> {msg.name}</p>
                            <p><strong>Email:</strong> {msg.email}</p>
                            <p><strong>Pesan:</strong> {msg.message}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}