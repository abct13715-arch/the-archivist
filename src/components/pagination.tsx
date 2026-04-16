import {Text, TouchableOpacity, View} from 'react-native';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onNext: () => void;
  onPrev: () => void;
  onPagePress: (page: number) => void;
};

const getPageNumbers = (currentPage: number, totalPages: number) => {
  if (totalPages <= 5) {
    return Array.from({length: totalPages}, (_, i) => i + 1);
  }

  if (currentPage <= 3) {
    return [1, 2, 3, 4, '...', totalPages - 1, totalPages];
  }

  if (currentPage >= totalPages - 2) {
    return [
      1,
      2,
      '...',
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ];
  }

  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalPages,
  ];
};

export const Pagination = ({
  currentPage,
  totalPages,
  onNext,
  onPrev,
  onPagePress,
}: PaginationProps) => {
  const pages = getPageNumbers(currentPage, totalPages);

  return (
    <View className="mx-6 mb-10 border-t border-tertiary-100 pt-6">
      <View className="flex-row items-center justify-center gap-6">
        <TouchableOpacity
          onPress={onPrev}
          disabled={currentPage === 1}
          className="flex-row items-center gap-2 py-3"
        >
          <Text
            className={`text-xs font-bold tracking-label-lg ${currentPage === 1 ? 'text-tertiary-300' : 'text-primary-900'}`}
          >
            ← PREV
          </Text>
        </TouchableOpacity>

        <View className="flex-row items-center gap-4">
          {pages.map((page, index) =>
            page === '...' ? (
              <Text
                key={`dots-${index}`}
                className="text-xs font-bold text-tertiary-300"
              >
                ...
              </Text>
            ) : (
              <TouchableOpacity
                key={page}
                onPress={() => onPagePress(page as number)}
                className="items-center gap-1"
              >
                <Text
                  className={`text-xs font-bold tracking-label-lg ${page === currentPage ? 'text-secondary-500' : 'text-tertiary-300'}`}
                >
                  {String(page).padStart(2, '0')}
                </Text>
                {page === currentPage && (
                  <View className="h-px w-full bg-secondary-500" />
                )}
              </TouchableOpacity>
            ),
          )}
        </View>

        <TouchableOpacity
          onPress={onNext}
          disabled={currentPage === totalPages}
          className="flex-row items-center gap-2 py-3"
        >
          <Text
            className={`text-xs font-bold tracking-label-lg ${currentPage === totalPages ? 'text-tertiary-300' : 'text-primary-900'}`}
          >
            NEXT →
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
