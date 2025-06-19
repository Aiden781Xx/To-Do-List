import React from 'react';

export default function About() {
  return (
    <div className="pt-20 min-h-screen">
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1513704519535-f5c81c8c5dfc?w=1600&q=80"
          alt="Pottery Workshop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-6xl font-bold text-white text-center">Our Story</h1>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg">
            <p className="text-xl leading-relaxed mb-8">
              Founded in 1970, our pottery studio has been at the forefront of ceramic artistry for over five decades. 
              What began as a small workshop has grown into a renowned establishment, recognized for its commitment 
              to excellence and innovation in pottery making.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
              <div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To create exceptional ceramic pieces that combine traditional craftsmanship with contemporary design, 
                  while nurturing the next generation of artisans through education and mentorship.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be the leading force in contemporary ceramics, setting new standards for quality, creativity, 
                  and sustainable practices in pottery making.
                </p>
              </div>
            </div>

            <div className="bg-neutral-50 p-8 rounded-xl my-16">
              <h3 className="text-2xl font-bold mb-6">Our Process</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-2">Design</h4>
                  <p className="text-gray-600">Each piece begins with careful consideration of form, function, and aesthetic appeal.</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Creation</h4>
                  <p className="text-gray-600">Master artisans bring designs to life using traditional techniques and modern tools.</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Finishing</h4>
                  <p className="text-gray-600">Meticulous attention to detail ensures every piece meets our high standards.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}