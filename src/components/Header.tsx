
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 py-4 px-6 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-reborn-600 font-libre text-xl md:text-2xl font-bold">Bebê Reborn</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#sobre" className="text-gray-700 hover:text-reborn-600 transition-colors">
            Sobre o E-book
          </a>
          <a href="#conteudo" className="text-gray-700 hover:text-reborn-600 transition-colors">
            Conteúdo
          </a>
          <a href="#autora" className="text-gray-700 hover:text-reborn-600 transition-colors">
            Autora
          </a>
          <Button className="bg-reborn-500 hover:bg-reborn-600 text-white rounded-full px-6">
            Adquirir
          </Button>
        </nav>

        {/* Mobile Navigation Button */}
        <button className="md:hidden text-gray-800" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-b-lg mt-2 py-4 px-6 absolute left-0 right-0">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#sobre" 
              className="text-gray-700 hover:text-reborn-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre o E-book
            </a>
            <a 
              href="#conteudo" 
              className="text-gray-700 hover:text-reborn-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Conteúdo
            </a>
            <a 
              href="#autora" 
              className="text-gray-700 hover:text-reborn-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Autora
            </a>
            <Button 
              className="bg-reborn-500 hover:bg-reborn-600 text-white rounded-full px-6 w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Adquirir
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
