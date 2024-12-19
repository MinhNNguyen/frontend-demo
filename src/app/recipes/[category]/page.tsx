import { Container, Typography } from '@mui/material';
import RecipeList from '@/components/RecipeList';
import { recipes } from '@/constants/data';

export default function CategoryPage({ params }: { params: { category: string } }) {
  const categoryRecipes = recipes.filter(recipe => recipe.category === params.category);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h1" gutterBottom>
        {params.category.charAt(0).toUpperCase() + params.category.slice(1)} Recipes
      </Typography>
      <RecipeList recipes={categoryRecipes} />
    </Container>
  );
}