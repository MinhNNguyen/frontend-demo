import { Container, Typography, Box, Breadcrumbs } from '@mui/material';
import Link from 'next/link';

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link href="/recipes">RECIPES</Link>
          <Link href="/recipes/bread">BREAD</Link>
          <Typography color="text.primary">QUICK BREAD</Typography>
        </Breadcrumbs>
      </Box>
      <Typography variant="h1" component="h1" gutterBottom>
        Welcome to Our Recipe Collection
      </Typography>
      <Typography variant="body1">
        Discover delicious recipes and cooking inspiration.
      </Typography>
    </Container>
  );
}