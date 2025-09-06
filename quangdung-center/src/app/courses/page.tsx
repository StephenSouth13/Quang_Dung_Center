import CourseCard from "../components/CourseCard";

const courses = [
  { level: "N5", desc: "Khóa cơ bản cho người mới bắt đầu", price: "2.000.000đ" },
  { level: "N4", desc: "Khóa nâng cao sau N5", price: "2.500.000đ" },
  { level: "N3", desc: "Trình độ trung cấp", price: "3.000.000đ" },
  { level: "N2", desc: "Trình độ cao cấp", price: "3.500.000đ" },
  { level: "N1", desc: "Trình độ chuyên sâu", price: "4.000.000đ" },
  { level: "Kỹ năng", desc: "Giao tiếp, phỏng vấn, kỹ năng mềm", price: "1.500.000đ" },
];

export default function CoursesPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-blue-700 mb-8">Các Khóa Học</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {courses.map((c) => (
          <CourseCard key={c.level} level={c.level} desc={c.desc} price={c.price} />
        ))}
      </div>
    </main>
  );
}
