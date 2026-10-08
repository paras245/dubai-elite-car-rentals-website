import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const categoryPathMap: Record<string, string> = {
  '/hypercars': 'hypercars',
  '/sports-cars': 'supercars',
  '/luxury-cars': 'luxury-sedans',
  '/suvs': 'luxury-suvs',
  '/convertibles': 'convertibles',
  '/electric-cars': 'electric',
  '/economy-cars': 'economy',
  '/chauffeur-services': 'chauffeur-vans',
};

export const CategoryRedirect: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const matchedCategory = categoryPathMap[location.pathname] || 'all';
    navigate(`/fleet?category=${matchedCategory}`, { replace: true });
  }, [location.pathname, navigate]);

  return null;
};
