export default async function CatchAllPage({ params }: { params: Promise<{ slug?: string[] }> }) {
  // Đợi params resolve (bắt buộc trong Next.js 15+)
  const resolvedParams = await params;
  
  // Biến mảng slug thành một chuỗi tên trang dễ đọc. Sử dụng optional chaining để tránh lỗi undefined.
  const pageName = resolvedParams.slug ? resolvedParams.slug.join(' / ').toUpperCase() : 'CHUYÊN MỤC';
  
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center animate-fade-in-up">
      <div className="w-24 h-24 mb-6 rounded-full bg-primary/20 flex items-center justify-center shadow-[0_0_30px_rgba(74,101,176,0.3)] mx-auto">
        <span className="text-4xl">🚧</span>
      </div>
      <h1 className="text-3xl font-display font-bold text-foreground mb-4 tracking-wide">
        CHUYÊN MỤC <span className="text-primary-light">{pageName}</span>
      </h1>
      <p className="text-foreground/60 max-w-md mx-auto text-sm leading-relaxed">
        Phần này hiện đang trong quá trình lập trình và hoàn thiện. Giao diện và dữ liệu thực tế sẽ sớm được cập nhật.
      </p>
    </div>
  );
}
