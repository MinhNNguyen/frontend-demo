import { Container } from '@mui/material';
import RecipeDetail from '@/components/RecipeDetail';
import { recipes } from '@/constants/data';

export default function RecipePage({ params }: { params: { id: string } }) {
  const recipe = recipes.find(r => r.id === params.id);
  
  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <RecipeDetail recipe={recipe} />
    </Container>
  );
}