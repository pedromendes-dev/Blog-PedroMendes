export interface Post {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  tags: string[];
  published: boolean;
  pub_date: string;
  created_at: string;
  updated_at: string;
}
