import React, { useState } from 'react';
import { ThumbsUp, MessageSquare, Bookmark, Star, Heart, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { Review } from '../types';

interface ReviewsSectionProps {
  reviews: Review[];
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ reviews }) => {
  const [activeReviewIdx, setActiveReviewIdx] = useState(0);
  const [likedMap, setLikedMap] = useState<Record<string, boolean>>({});
  const [likesCount, setLikesCount] = useState<Record<string, number>>({
    'rev-1': 142,
    'rev-2': 98,
    'rev-3': 74,
  });
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showAddReview, setShowAddReview] = useState(false);
  const [newReviewText, setNewReviewText] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [allReviews, setAllReviews] = useState<Review[]>(reviews);

  const currentReview = allReviews[activeReviewIdx] || allReviews[0];
  const isCurrentLiked = likedMap[currentReview.id] || false;
  const currentLikes = likesCount[currentReview.id] ?? currentReview.likes;

  const handleToggleLike = (id: string) => {
    const isLiked = likedMap[id];
    setLikedMap((prev) => ({ ...prev, [id]: !isLiked }));
    setLikesCount((prev) => ({
      ...prev,
      [id]: (prev[id] ?? currentReview.likes) + (isLiked ? -1 : 1),
    }));
  };

  const handleNextReview = () => {
    setActiveReviewIdx((prev) => (prev + 1) % allReviews.length);
  };

  const handlePrevReview = () => {
    setActiveReviewIdx((prev) => (prev - 1 + allReviews.length) % allReviews.length);
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewText.trim() || !newAuthor.trim()) return;

    const created: Review = {
      id: `rev-${Date.now()}`,
      name: newAuthor,
      role: 'Cliente Verificado',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
      rating: 5,
      comment: newReviewText,
      likes: 1,
      date: 'Justo ahora',
    };

    setAllReviews([created, ...allReviews]);
    setActiveReviewIdx(0);
    setNewReviewText('');
    setNewAuthor('');
    setShowAddReview(false);
  };

  return (
    <section className="py-20 relative bg-[#f0b90b] overflow-hidden">
      
      {/* Background Watermark Outlined Typography */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-10">
        <span
          className="font-display text-[120px] sm:text-[180px] font-black tracking-tight text-transparent uppercase whitespace-nowrap"
          style={{ WebkitTextStroke: '3px black' }}
        >
          TASTY BURGUER
        </span>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Main Review Card (faithful to screenshot) */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border-2 border-black/10 max-w-xl mx-auto transition-all duration-300">
          
          {/* Header Row: Avatar, Name, Role & Star Rating */}
          <div className="flex items-center justify-between gap-4 mb-5">
            <div className="flex items-center gap-3.5">
              <div className="w-13 h-13 rounded-full overflow-hidden border-2 border-[#f0b90b] shadow-md bg-neutral-200">
                <img
                  src={currentReview.avatar}
                  alt={currentReview.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h4 className="font-display text-lg font-black text-black leading-tight flex items-center gap-1.5">
                  <span>{currentReview.name}</span>
                </h4>
                <p className="text-xs font-semibold text-neutral-500">
                  {currentReview.role} • {currentReview.date}
                </p>
              </div>
            </div>

            {/* 5 Gold Stars */}
            <div className="flex items-center text-amber-500">
              {[...Array(currentReview.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-500" />
              ))}
            </div>
          </div>

          {/* Testimonial Text */}
          <p className="text-base sm:text-lg font-medium text-neutral-800 leading-relaxed">
            {currentReview.comment}
          </p>

          {/* Action Row: Thumbs Up / Comment / Bookmark */}
          <div className="mt-8 pt-5 border-t border-neutral-100 flex items-center justify-between">
            <div className="flex items-center gap-4">
              
              {/* Like Button */}
              <button
                onClick={() => handleToggleLike(currentReview.id)}
                className={`flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full transition-colors ${
                  isCurrentLiked
                    ? 'bg-amber-100 text-amber-900 font-extrabold'
                    : 'text-neutral-600 hover:bg-neutral-100'
                }`}
                aria-label="Dar me gusta"
              >
                <ThumbsUp className={`w-4 h-4 ${isCurrentLiked ? 'fill-amber-600 text-amber-600' : ''}`} />
                <span className="tabular-nums">{currentLikes}</span>
              </button>

              {/* Comment Button */}
              <button
                onClick={() => setShowAddReview(!showAddReview)}
                className="flex items-center gap-1.5 text-xs font-bold text-neutral-600 hover:bg-neutral-100 px-3 py-1.5 rounded-full transition-colors"
                title="Dejar un comentario"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Dejar reseña</span>
              </button>

              {/* Bookmark Button */}
              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`p-1.5 rounded-full transition-colors ${
                  isBookmarked ? 'text-black bg-neutral-100' : 'text-neutral-500 hover:bg-neutral-100'
                }`}
                title="Guardar reseña"
              >
                <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-black' : ''}`} />
              </button>
            </div>

            {/* Slider Navigation for Reviews */}
            <div className="flex items-center gap-1">
              <button
                onClick={handlePrevReview}
                className="p-1.5 rounded-full hover:bg-neutral-100 text-neutral-600"
                aria-label="Reseña anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-[11px] font-bold text-neutral-400 tabular-nums">
                {activeReviewIdx + 1}/{allReviews.length}
              </span>
              <button
                onClick={handleNextReview}
                className="p-1.5 rounded-full hover:bg-neutral-100 text-neutral-600"
                aria-label="Siguiente reseña"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Inline Add Review Form */}
          {showAddReview && (
            <form onSubmit={handleSubmitReview} className="mt-5 pt-5 border-t border-neutral-200 space-y-3 animate-in fade-in duration-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Tu nombre"
                  value={newAuthor}
                  onChange={(e) => setNewAuthor(e.target.value)}
                  className="w-1/2 px-3 py-2 text-xs rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-black"
                  required
                />
                <span className="text-xs text-amber-500 flex items-center font-bold">
                  ★★★★★
                </span>
              </div>
              <textarea
                placeholder="¿Qué tal estuvo tu experiencia con Tasty Burguer?"
                value={newReviewText}
                onChange={(e) => setNewReviewText(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-black"
                rows={2}
                required
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddReview(false)}
                  className="px-3 py-1.5 text-xs font-bold text-neutral-600 hover:text-black"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 bg-black text-[#f0b90b] text-xs font-black rounded-lg shadow hover:bg-neutral-800"
                >
                  Publicar Opinión
                </button>
              </div>
            </form>
          )}

        </div>

      </div>
    </section>
  );
};
