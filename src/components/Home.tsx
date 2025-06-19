import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function VaseModel() {
  return (
    <mesh>
      <cylinderGeometry args={[1, 1.2, 3, 32]} />
      <meshStandardMaterial color="#8B4513" roughness={0.5} metalness={0.2} />
    </mesh>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img
          src="https://images.unsplash.com/photo-1705789640170-5ef7c2f1c3ac"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Luxury Pottery"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">Artisan Crafted Excellence</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Discover our collection of meticulously handcrafted pottery, where tradition meets contemporary design.
            </p>
            <button className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-all transform hover:scale-105">
              Explore Collection
            </button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="h-[600px]">
              <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <VaseModel />
                <OrbitControls enableZoom={false} />
              </Canvas>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Interactive Experience</h2>
              <p className="text-lg text-gray-600 mb-8">
                Explore our pieces in stunning 3D detail. Each creation is a unique masterpiece, 
                crafted with precision and care by our master artisans.
              </p>
              <button className="flex items-center space-x-2 text-lg font-medium text-gray-900 hover:text-gray-600">
                <span>Learn about our process</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Featured Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={`https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80`}
                    className="w-full h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-500"
                    alt={`Collection ${item}`}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Minimalist Collection</h3>
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="text-gray-600">4.9 (128 reviews)</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}