import {supabase} from '@/lib/supabase';

export const savedItemService = {
  getSavedListings: async (userId: string) => {
    return await supabase
      .from('saved_items')
      .select(
        '*, listing:listings(*, listing_images(*), archivist:users(id, display_name, avatar_path))',
      )
      .eq('user_id', userId);
  },

  getSavedCollections: async (userId: string) => {
    return await supabase
      .from('saved_collections')
      .select(
        '*, collection:collections(*, archivist:users(id, display_name, avatar_path))',
      )
      .eq('user_id', userId);
  },

  toggleSavedItem: async (userId: string, listingId: string) => {
    try {
      const {data: existing, error: fetchError} = await supabase
        .from('saved_items')
        .select('id')
        .eq('user_id', userId)
        .eq('listing_id', listingId)
        .maybeSingle();

      if (fetchError) {
        return {error: fetchError};
      }

      if (existing) {
        return await supabase
          .from('saved_items')
          .delete()
          .eq('user_id', userId)
          .eq('listing_id', listingId);
      }
      return await supabase.from('saved_items').insert({
        user_id: userId,
        listing_id: listingId,
      });
    } catch (error) {
      console.error('Service: Unexpected error in toggleSavedItem:', error);
      return {error};
    }
  },

  toggleSavedCollection: async (userId: string, collectionId: string) => {
    try {
      const {data: existing, error: fetchError} = await supabase
        .from('saved_collections')
        .select('id')
        .eq('user_id', userId)
        .eq('collection_id', collectionId)
        .maybeSingle();

      if (fetchError) {
        return {error: fetchError};
      }

      if (existing) {
        return await supabase
          .from('saved_collections')
          .delete()
          .eq('user_id', userId)
          .eq('collection_id', collectionId);
      }
      const {data, error} = await supabase.from('saved_collections').insert({
        user_id: userId,
        collection_id: collectionId,
      }).select();

      if (error) {
        console.error('Service: Error in toggleSavedCollection insert:', error);
        return {error};
      }
      return {data, error: null};
    } catch (error) {
      console.error(
        'Service: Unexpected error in toggleSavedCollection:',
        error,
      );
      return {error: error};
    }
  },

  isItemSaved: async (
    userId: string,
    itemId: string,
    type: 'listing' | 'collection',
  ) => {
    try {
      const table = type === 'listing' ? 'saved_items' : 'saved_collections';
      const column = type === 'listing' ? 'listing_id' : 'collection_id';

      const {data, error} = await supabase
        .from(table)
        .select('id')
        .eq('user_id', userId)
        .eq(column, itemId)
        .maybeSingle();

      if (error) {
        return {error};
      }

      return {data: !!data};
    } catch (error) {
      console.error('Service: Unexpected error in isItemSaved:', error);
      return {error: error};
    }
  },
};
