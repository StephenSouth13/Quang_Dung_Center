export default function LoginPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6">
      <h1 className="text-3xl font-bold mb-6">Đăng nhập</h1>
      <form className="space-y-4 w-full max-w-sm">
        <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-lg" />
        <input type="password" placeholder="Mật khẩu" className="w-full px-4 py-2 border rounded-lg" />
        <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
          Đăng nhập
        </button>
      </form>
    </main>
  );
}
