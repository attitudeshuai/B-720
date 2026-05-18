import React, { useState } from 'react';
import { questions } from '../data/questionnaire';
import { RefreshCcw, CheckCircle, XCircle, HelpCircle, ArrowRight } from 'lucide-react';

type ResultType = '保留' | '丢弃' | '待定' | null;

const DeclutterGuide: React.FC = () => {
  const [currentQuestionId, setCurrentQuestionId] = useState(1);
  const [result, setResult] = useState<ResultType>(null);
  const [history, setHistory] = useState<number[]>([]);

  const currentQuestion = questions.find(q => q.id === currentQuestionId);

  const handleOptionClick = (nextId?: number, res?: ResultType) => {
    if (res) {
      setResult(res);
    } else if (nextId) {
      setHistory([...history, currentQuestionId]);
      setCurrentQuestionId(nextId);
    }
  };

  const resetTest = () => {
    setCurrentQuestionId(1);
    setResult(null);
    setHistory([]);
  };

  return (
    <div className="grid md:grid-cols-2 gap-12 items-start">
      {/* Guide Content */}
      <div className="space-y-8 animate-fade-in-up">
        <h2 className="text-3xl font-light text-[var(--color-primary)]">断舍离的艺术</h2>
        <div className="prose prose-stone text-[var(--color-secondary)]">
          <p className="leading-relaxed">
            极简主义不仅仅是一无所有，而是为你真正珍视的事物腾出空间。
            当我们清理物理空间杂物的同时，也在清理内心的杂念。
          </p>
          <h3 className="text-xl font-medium text-[var(--color-primary)] mt-6 mb-3">三个黄金法则</h3>
          <ul className="space-y-4 list-none pl-0">
            <li className="flex gap-3">
              <span className="text-[var(--color-morandi-green)] font-bold">01.</span>
              <span>如果你一年内没有用过它，那你大概率再也不会用到它了。</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[var(--color-morandi-blue)] font-bold">02.</span>
              <span>它是否让你怦然心动？如果不是，感谢它的陪伴，然后放手。</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[var(--color-morandi-pink)] font-bold">03.</span>
              <span>不要为了“以防万一”而保留。相信你在需要时总能找到解决办法。</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Interactive Tool */}
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-[var(--color-morandi-beige)] sticky top-8">
        <div className="mb-6 pb-6 border-b border-gray-100 flex justify-between items-center">
          <h3 className="text-xl font-medium text-[var(--color-primary)]">物品去留筛选测试</h3>
          <button onClick={resetTest} className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors hover:cursor-pointer" title="重置测试">
            <RefreshCcw size={18} />
          </button>
        </div>

        {!result ? (
          <div className="space-y-8 animate-fade-in">
            {currentQuestion && (
              <>
                <p className="text-lg font-medium text-gray-700">{currentQuestion.text}</p>
                <div className="space-y-3">
                  {currentQuestion.options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleOptionClick(option.nextId, option.result)}
                      className="w-full text-left px-6 py-4 rounded-xl border border-gray-200 hover:border-[var(--color-primary)] hover:bg-gray-50 transition-all flex justify-between items-center group cursor-pointer"
                    >
                      <span className="text-gray-600 group-hover:text-gray-900">{option.text}</span>
                      <ArrowRight size={16} className="text-gray-300 group-hover:text-[var(--color-primary)]" />
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        ) : (
          <div className="text-center py-8 animate-scale-in">
            <div className="mb-6 flex justify-center">
              {result === '保留' && <CheckCircle size={64} className="text-[var(--color-morandi-green)]" />}
              {result === '丢弃' && <XCircle size={64} className="text-[var(--color-morandi-pink)]" />}
              {result === '待定' && <HelpCircle size={64} className="text-[var(--color-morandi-blue)]" />}
            </div>
            
            <h4 className="text-2xl font-bold text-gray-800 mb-2">{result}!</h4>
            
            <p className="text-gray-600 mb-8">
              {result === '保留' && "这个物品能为你的生活增值。请安心保留它。"}
              {result === '丢弃' && "是时候说再见了。感谢它的服务，然后让它离开。"}
              {result === '待定' && "把它放进“待定箱”。如果3个月内你没有打开箱子，就处理掉它。"}
            </p>

            <button 
              onClick={resetTest}
              className="px-8 py-3 bg-[var(--color-primary)] text-white rounded-full hover:opacity-90 transition-opacity cursor-pointer"
            >
              测试下一件物品
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeclutterGuide;
