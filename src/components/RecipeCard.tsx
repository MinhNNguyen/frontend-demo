'use client';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import Link from 'next/link';
import { Recipe } from '@/types/recipe';

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Link href={`/recipes/${recipe.category}/${recipe.id}`} style={{ textDecoration: 'none' }}>
      <Card sx={{ height: '100%' }}>
        <CardMedia
          component="img"
          height="200"
          image={recipe.image}
          alt={recipe.title}
        />
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {recipe.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {recipe.description}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}