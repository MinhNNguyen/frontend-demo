'use client';
import { Box, Typography, Button, Container } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { Recipe } from '@/types/recipe';

interface RecipeDetailProps {
  recipe: Recipe;
}

export default function RecipeDetail({ recipe }: RecipeDetailProps) {
  return (
    <Container maxWidth="lg">
      <Box sx={{ display: 'flex', gap: 4, flexDirection: { xs: 'column', md: 'row' } }}>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            {recipe.title}
          </Typography>
          <Typography variant="body1" paragraph>
            {recipe.fullDescription}
          </Typography>
          
          <Box sx={{ my: 4 }}>
            <Box sx={{ display: 'flex', gap: 4, mb: 2 }}>
              <Box>
                <Typography variant="subtitle2" sx={{ mb: 1 }}>PREP</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <AccessTimeIcon sx={{ mr: 1 }} />
                  <Typography>{recipe.prepTime}</Typography>
                </Box>
              </Box>
              <Box>
                <Typography variant="subtitle2" sx={{ mb: 1 }}>BAKE</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <AccessTimeIcon sx={{ mr: 1 }} />
                  <Typography>{recipe.bakeTime}</Typography>
                </Box>
              </Box>
              <Box>
                <Typography variant="subtitle2" sx={{ mb: 1 }}>TOTAL</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <AccessTimeIcon sx={{ mr: 1 }} />
                  <Typography>{recipe.totalTime}</Typography>
                </Box>
              </Box>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
              <RestaurantIcon sx={{ mr: 1 }} />
              <Typography variant="subtitle2">YIELD: {recipe.yield}</Typography>
            </Box>
            
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button variant="outlined">SAVE RECIPE</Button>
              <Button variant="outlined">PRINT</Button>
            </Box>
          </Box>
        </Box>
        
        <Box sx={{ flex: 1 }}>
          <img
            src={recipe.image}
            alt={recipe.title}
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px'
            }}
          />
        </Box>
      </Box>
    </Container>
  );
}