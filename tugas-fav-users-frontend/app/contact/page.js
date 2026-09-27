export default function ContactPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen p-8 text-white">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">Contact Us</h1>
        <p className="text-gray-400 mb-6">
          Punya pertanyaan? Silakan hubungi tim dukungan kami.
        </p>
        <div className="max-w-md bg-[#111] p-6 rounded-xl border border-gray-800">
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Nama" className="p-2 bg-black border border-gray-700 rounded-md text-white" />
            <input type="email" placeholder="Email" className="p-2 bg-black border border-gray-700 rounded-md text-white" />
            <textarea placeholder="Pesan" rows="4" className="p-2 bg-black border border-gray-700 rounded-md text-white"></textarea>
            <button type="button" className="bg-white text-black font-medium py-2 rounded-md hover:bg-gray-200">Kirim Pesan</button>
          </form>
        </div>
      </div>
    </div>
  );
}