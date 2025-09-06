export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-12 bg-gradient-to-b from-blue-50 to-white">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-700">
        Trung Tâm Nhật Ngữ Quang Dũng
      </h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
        Học tiếng Nhật từ N5 đến N1 cùng giảng viên giàu kinh nghiệm. 
        Chúng tôi đồng hành cùng bạn trên con đường chinh phục tiếng Nhật.
      </p>
      <a
        href="/courses"
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Xem các khóa học
      </a>
    </main>
  );
}
