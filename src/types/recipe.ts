export interface Recipe {
    id: string;
    title: string;
    description: string;
    fullDescription?: string;
    image: string;
    prepTime?: string;
    bakeTime?: string;
    totalTime?: string;
    yield?: string;
    category: string;
    type?: string;
  }