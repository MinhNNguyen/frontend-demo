import { Recipe } from '@/types/recipe';

export const recipes: Recipe[] = [
  {
    id: 'banana-bread',
    title: 'Whole-Grain Banana Bread',
    description: 'A moist and flavorful one-bowl banana bread using simple ingredients.',
    fullDescription: "This one-bowl banana bread — our 2018 Recipe of the Year — uses the simplest ingredients, but is incredibly moist and flavorful. While the recipe calls for a 50/50 mix of flours (all-purpose and whole wheat), we often make the bread 100% whole wheat, and honestly? No one can tell, it's that good! And not only is this bread delicious — it's versatile.",
    image: '/banana-bread.jpg',
    prepTime: '10 mins',
    bakeTime: '1 hr to 1 hr 15 mins',
    totalTime: '1 hr 10 mins',
    yield: '1 loaf, 12 generous servings',
    category: 'bread',
    type: 'quick-bread'
  },
  {
    id: 'quick-bread',
    title: 'Classic Quick Bread',
    description: 'A simple and versatile quick bread recipe ready in under an hour.',
    image: '/quick-bread.jpg',
    category: 'bread',
    type: 'quick-bread'
  },
  {
    id: 'croissant',
    title: 'Buttery Croissants',
    description: 'Traditional French croissants with perfectly flaky layers.',
    image: '/croissant.jpg',
    category: 'bread',
    type: 'pastry'
  }
];