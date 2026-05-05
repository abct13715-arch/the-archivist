import {supabase} from '@/lib/supabase';

interface GetListingsParameters {
  category_id?: number;
  minPrice?: number;
  maxPrice?: number;
  condition?: string;
  searchQuery?: string;
  rating?: number;
  page?: number;
}

const ITEMS_PER_PAGE = 6;

export const listingService = {
  getListings: async () => {
    return await supabase.from('listings').select(`
        *,
        category:categories(name),
        images:listing_images(*)
      `);
  },

  searchListings: async ({
    category_id,
    minPrice,
    maxPrice,
    condition,
    searchQuery,
    rating,
    page = 1,
  }: GetListingsParameters = {}) => {
    let query = supabase.from('listings').select(
      `
        *,
        category:categories(name),
        images:listing_images(*)
      `,
      {count: 'exact'},
    );

    if (category_id) {
      query = query.eq('category_id', category_id);
    }

    if (minPrice !== undefined) {
      query = query.gte('price', minPrice);
    }

    if (maxPrice !== undefined) {
      query = query.lte('price', maxPrice);
    }

    if (condition && condition !== 'All') {
      query = query.eq('condition', condition);
    }

    if (searchQuery) {
      query = query.ilike('title', `%${searchQuery}%`);
    }

    if (rating !== undefined) {
      query = query.gte('rating', rating);
    }

    const from = (page - 1) * ITEMS_PER_PAGE;
    const to = from + ITEMS_PER_PAGE - 1;

    return await query.range(from, to).order('created_at', {ascending: false});
  },

  getListingById: async (id: string) => {
    return await supabase
      .from('listings')
      .select(
        `
        *,
        archivist:users(*),
        images:listing_images(*),
        category:categories(name),
        reviews(*)
      `,
      )
      .eq('id', id)
      .single();
  },

  getRelatedListings: async (archivistId: string, excludeId: string) => {
    return await supabase
      .from('listings')
      .select(
        `
        *,
        images:listing_images(*)
      `,
      )
      .eq('archivist_id', archivistId)
      .neq('id', excludeId)
      .limit(4);
  },

  getListingsByArchivistId: async (archivistId: string) => {
    return await supabase
      .from('listings')
      .select('*')
      .eq('archivist_id', archivistId);
  },
};
