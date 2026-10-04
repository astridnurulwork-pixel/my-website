import { messages } from "@/lib/db";
import { deleteMessageAction } from "./actions";

export default function MessagesPage() {
    return (
        <section className="mx-auto max-w-3xl px-6 py-20 text-white min-h-screen">
            <h1 className="text-3xl font-bold">Pesan Masuk</h1>
            <div className="mt-8 space-y-4">
                {messages.length === 0 ? (
                    <p className="text-gray-400">Belum ada pesan masuk.</p>
                ) : (
                    messages.map((msg) => (
                        <div key={msg.id} className="rounded-lg border border-gray-800 bg-[#111] p-4 flex justify-between items-center">
                            <div>
                                <p className="font-medium text-white">{msg.name} - {msg.email}</p>
                                <p className="mt-1 text-sm text-gray-400">{msg.message}</p>
                            </div>
                            <form action={deleteMessageAction}>
                                <input type="hidden" name="id" value={msg.id} />
                                <button
                                    type="submit"
                                    className="bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2 rounded-md font-medium transition"
                                >
                                    Hapus
                                </button>
                            </form>
                        </div>
                    ))
                )}
            </div>
        </section>
    );
}