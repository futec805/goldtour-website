import { useState } from 'react';
import { Sparkles, ArrowLeft, ArrowRight, Check, MessageCircle, RefreshCw } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { siteContent } from '../data/siteContent';
import { sendLeadToJivo } from '../utils/jivoBridge';

export default function TourQuiz() {
  const { t } = useLanguage();
  const { quiz, company } = siteContent;
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [jivoResult, setJivoResult] = useState(null);

  const totalSteps = quiz.steps.length;
  const isLastStep = currentStep === totalSteps - 1;
  const progress = ((currentStep + 1) / totalSteps) * 100;

  const selectOption = (stepIndex, optionLabel) => {
    setAnswers((prev) => ({ ...prev, [stepIndex]: optionLabel }));
    if (!isLastStep) {
      setTimeout(() => setCurrentStep((s) => s + 1), 300);
    }
  };

  const handleSubmit = () => {
    if (answers[currentStep] && phone) {
      const quizSummary = quiz.steps
        .map((s, idx) => `${t(s.question)}: ${answers[idx] || '—'}`)
        .join(' | ');
      const res = sendLeadToJivo({
        source: 'Квиз по подбору тура',
        phone,
        preferredContact: 'WhatsApp / Звонок',
        tourSummary: quizSummary,
        message: `Результаты квиза:\n${quizSummary}`,
      });
      setJivoResult(res);
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setPhone('');
    setSubmitted(false);
    setJivoResult(null);
  };

  if (submitted) {
    return (
      <section id="quiz" className="scroll-mt-20 py-20 bg-navy-950">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-navy-900 border border-white/10 rounded-2xl p-10 sm:p-12">
            <div className="text-6xl mb-5">🎉</div>
            <h3 className="text-2xl font-heading font-bold text-white mb-5">
              {t(quiz.successMessage)}
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {jivoResult?.formattedMessage && (
                <a
                  href={`${company.whatsappUrl}?text=${encodeURIComponent(jivoResult.formattedMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
                >
                  <MessageCircle size={15} />
                  {t({ ru: 'Дублировать в WhatsApp', en: 'Also send via WhatsApp' })}
                </a>
              )}
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white/80 text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
              >
                <RefreshCw size={15} />
                {t({ ru: 'Пройти квиз заново', en: 'Retake Quiz' })}
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const step = quiz.steps[currentStep];

  return (
    <section id="quiz" className="scroll-mt-20 py-20 bg-navy-950">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-gold-500/10 text-gold-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Sparkles size={16} />
            {t(quiz.sectionTitle)}
          </div>
          <p className="text-white/60 max-w-xl mx-auto text-sm">
            {t(quiz.sectionSubtitle)}
          </p>
        </div>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between text-xs text-white/40 mb-2">
            <span>{t({ ru: 'Шаг', en: 'Step' })} {currentStep + 1} / {totalSteps}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-gold-500 to-gold-400 rounded-full transition-all duration-500"
                 style={{ width: `${progress}%` }} />
          </div>
        </div>

        {/* Quiz card */}
        <div className="bg-navy-900 border border-white/10 rounded-2xl p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-6 text-center">
            {t(step.question)}
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
            {step.options.map((opt, i) => {
              const label = t(opt.label);
              const selected = answers[currentStep] === label;
              return (
                <button key={i}
                        onClick={() => selectOption(currentStep, label)}
                        className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all text-center
                          ${selected
                            ? 'border-gold-500 bg-gold-500/10 text-gold-400 scale-105'
                            : 'border-white/10 hover:border-white/30 text-white/70 hover:text-white'
                          }`}>
                  <span className="text-2xl">{opt.icon}</span>
                  <span className="text-sm font-medium">{label}</span>
                  {selected && <Check size={16} className="text-gold-400" />}
                </button>
              );
            })}
          </div>

          {/* Phone input on last step */}
          {isLastStep && answers[currentStep] && (
            <div className="mt-6 space-y-4">
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={t(quiz.contactPlaceholder)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-gold-500 transition-colors text-center text-lg"
              />
              <button onClick={handleSubmit}
                      disabled={!phone}
                      className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 disabled:opacity-40 text-navy-950 font-bold py-3.5 rounded-full transition-all shadow-lg shadow-gold-500/20 text-lg">
                {t(quiz.submitButton)}
              </button>
            </div>
          )}

          <div className="flex justify-between mt-6">
            <button onClick={() => setCurrentStep((s) => Math.max(0, s - 1))}
                    disabled={currentStep === 0}
                    className="flex items-center gap-2 text-white/40 hover:text-white disabled:opacity-20 transition-colors text-sm">
              <ArrowLeft size={16} /> {t({ ru: 'Назад', en: 'Back' })}
            </button>
            {!isLastStep && answers[currentStep] && (
              <button onClick={() => setCurrentStep((s) => s + 1)}
                      className="flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors text-sm">
                {t({ ru: 'Далее', en: 'Next' })} <ArrowRight size={16} />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
