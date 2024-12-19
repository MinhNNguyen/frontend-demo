import { Typography, Container } from '@mui/material';
import RecipeList from '@/components/RecipeList';
import { recipes } from '@/constants/data';

export default function CategoriesPage() {
  const categories = Array.from(new Set(recipes.map(recipe => recipe.category)));
  const categorizedRecipes = categories.map(category => ({
    id: category,
    title: `${category.charAt(0).toUpperCase() + category.slice(1)} Recipes`,
    description: `Explore our ${category} recipes`,
    image: `/categories/${category}.jpg`,
    category: category
  }));

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h1" gutterBottom>
        Recipe Categories
      </Typography>
      <RecipeList recipes={categorizedRecipes} />
    </Container>
  );
}