export default function RegisterPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6">
      <h1 className="text-3xl font-bold mb-6">Đăng ký</h1>
      <form className="space-y-4 w-full max-w-sm">
        <input type="text" placeholder="Họ và tên" className="w-full px-4 py-2 border rounded-lg" />
        <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-lg" />
        <input type="password" placeholder="Mật khẩu" className="w-full px-4 py-2 border rounded-lg" />
        <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
          Đăng ký
        </button>
      </form>
    </main>
  );
}
