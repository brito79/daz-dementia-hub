// Shared Types
// TypeScript interfaces and types shared between frontend and backend

export interface DementiaArticle {
  id: string;
  title: string;
  content: string;
  author: string;
  category: 'symptoms' | 'prevention' | 'treatment' | 'research' | 'awareness';
  tags: string[];
  imageUrl?: string;
  publishedAt: Date;
  updatedAt: Date;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  createdAt: Date;
}

export interface MembershipApplication {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  membershipType: 'individual' | 'family' | 'organization';
  status: 'pending' | 'approved' | 'rejected';
  createdAt: Date;
}
