type CourseCardProps = {
  level: string;
  desc: string;
  price: string;
};

export default function CourseCard({ level, desc, price }: CourseCardProps) {
  return (
    <div className="p-6 bg-white border rounded-xl shadow hover:shadow-lg transition flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-semibold text-blue-700 mb-2">Khóa {level}</h2>
        <p className="text-gray-600 mb-4">{desc}</p>
      </div>
      <p className="text-lg font-bold text-blue-600">{price}</p>
    </div>
  );
}
