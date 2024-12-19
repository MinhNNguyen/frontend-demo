'use client';
import { Grid2 as Grid } from '@mui/material';
import { Recipe } from '@/types/recipe';
import RecipeCard from './RecipeCard';

interface RecipeListProps {
  recipes: Recipe[];
}

export default function RecipeList({ recipes }: RecipeListProps) {
  return (
    <Grid container spacing={4}>
      {recipes.map((recipe) => (
        <Grid xs={12} md={4} key={recipe.id}>
          <RecipeCard recipe={recipe} />
        </Grid>
      ))}
    </Grid>
  );
}