import React from "react";

export default function CustomerReviews() {
  const reviews = [
    { name: "PK", text: "Useless. And as a bonus Antagonistic.", date: "4 days ago", initial: "PK", isCustomImage: false },
    { name: "Deborah", text: "Every technician was very patient, professional, and knowledgeable. They took their time and corrected a myriad of discrepancies that were holding me open ..", date: "4 weeks ago", initial: "D", isCustomImage: false, hasSeeMore: true },
    { name: "Peg", text: "now my printer and computer is working fast", date: "a month ago", initial: "P", isCustomImage: false },
    { name: "James", text: "Experience was very informative and professional.", date: "2 months ago", initial: "J", color: "bg-orange-500" },
    { name: "Twina", text: "Printer drivers updated and network printing configured without issues. Technician was patient and explained troubleshooting tips clearly. Reliable ...", date: "2 months ago", initial: "T", color: "bg-purple-700", hasSeeMore: true },
    { name: "Shirley", text: "Geek Autobuzz took care of me in great fashion today! Thanks for the awesome help!!!", date: "2 months ago", initial: "S", color: "bg-rose-600" },
    { name: "Rod", text: "All About Driver has removed adware and optimized browser settings; browsing is faster and cleaner. Honest, professional, and helpful team.", date: "2 months ago", initial: "R", color: "bg-slate-400" },
  ];

  return (
    <section className="bg-[#FAFBFD] py-16 px-6 border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="flex flex-col items-center text-center space-y-2 mb-12">
          <div className="flex items-center gap-2">
            <span className="text-3xl">⭐</span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">What Our Customers Say!</h2>
            <button className="ml-4 bg-[#547DF3] hover:bg-[#0d3f8c] text-white text-sm font-semibold px-4 py-2 transition shadow-sm">
              Leave a review
            </button>
          </div>
          {/* Star Rating Icons */}
          <div className="flex text-amber-400 text-xl">★★★★★</div>
        </div>

        {/* Master Review Responsive Flex-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Social Proof Summary Card Left Side */}
          <div className="bg-gradient-to-br from-purple-100 via-sky-100 to-blue-100 rounded-2xl p-6 border border-purple-200/40 flex flex-col justify-between shadow-sm min-h-[260px]">
            <div className="space-y-3">
              <h3 className="font-bold text-slate-900 text-lg">Social proof summary</h3>
              <p className="text-slate-700 text-sm leading-relaxed font-normal">
                All About Driver has consistently impressed customers with their professional, efficient, and effective remote PC support services. Many users highlighted the clear...
              </p>
              <span className="text-xs font-bold text-slate-900 block cursor-pointer hover:underline">See more</span>
            </div>
            <div className="space-y-2">
              <div className="flex -space-x-2 overflow-hidden items-center">
                <span className="w-7 h-7 rounded-full bg-pink-400 border-2 border-white flex items-center justify-center text-[10px] text-white font-bold">♥</span>
                <span className="w-7 h-7 rounded-full bg-yellow-400 border-2 border-white flex items-center justify-center text-[10px] text-slate-800 font-bold">PK</span>
                <span className="w-7 h-7 rounded-full bg-slate-800 border-2 border-white flex items-center justify-center text-[10px] text-white font-bold">+96</span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium">based on 99 customer reviews</p>
            </div>
          </div>

          {/* Map Rest of Reviews dynamically */}
          {reviews.map((rev, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200/60 shadow-sm flex flex-col justify-between items-center text-center min-h-[260px]">
              
              {/* Google Brand Minimal Logo */}
              <div className="flex flex-col items-center space-y-1">
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                <span className="text-4xl font-serif text-slate-900 font-bold leading-none mt-2">“</span>
              </div>

              <p className="text-slate-700 text-sm leading-relaxed max-w-[220px] font-normal my-2">
                {rev.text}
              </p>

              {rev.hasSeeMore && (
                <span className="text-sm font-bold text-slate-900 block mb-2 cursor-pointer hover:underline">See more</span>
              )}

              {/* User Metadata */}
              <div className="flex flex-col items-center space-y-1 mt-auto">
                <div className={`w-8 h-8 rounded-full ${rev.color || 'bg-yellow-500'} flex items-center justify-center text-sm mt-2 font-bold text-white shadow-sm`}>
                  {rev.initial}
                </div>
                <h4 className="font-bold text-xs text-slate-900">{rev.name}</h4>
                <span className="text-xs text-slate-400 font-normal">{rev.date}</span>
              </div>

            </div>
          ))}

        </div>

        {/* Load More Button Bottom */}
        <div className="w-full flex justify-center mt-10">
          <button className="bg-[#1762C0] hover:bg-[#0d3f8c] text-white text-xs font-bold px-6 py-2.5 rounded transition shadow-md">
            Load more
          </button>
        </div>

      </div>
    </section>
  );
}