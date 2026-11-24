import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { siteContent } from '../data/siteContent';

export default function Reviews() {
  const { t } = useLanguage();
  const { reviews } = siteContent;

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy-950 mb-3">
            {t(reviews.sectionTitle)}
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            {t(reviews.sectionSubtitle)}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.items.map((review, i) => (
            <div key={i}
                 className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-shadow relative">
              <Quote size={32} className="text-gold-200 absolute top-4 right-4" />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} size={16} className="text-gold-500 fill-gold-500" />
                ))}
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-5 italic">
                &ldquo;{t(review.text)}&rdquo;
              </p>

              <div className="border-t border-slate-200 pt-4">
                <div className="font-heading font-bold text-navy-950">{t(review.name)}</div>
                <div className="text-sm text-slate-400">
                  {t(review.destination)} · {t(review.date)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
