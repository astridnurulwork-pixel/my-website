"use server";
import { messages } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function deleteMessageAction(formData) {
    const id = Number(formData.get("id"));

    // Cari indeks pesan berdasarkan id lalu hapus dari array
    const index = messages.findIndex((msg) => msg.id === id);
    if (index !== -1) {
        messages.splice(index, 1);
    }

    // Memaksa halaman /messages memperbarui tampilannya secara otomatis tanpa refresh manual
    revalidatePath("/messages");
}