import {useState} from 'react';
import {Colors} from '@/constants/theme';
import {MaterialIcons} from '@expo/vector-icons';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const categories = [
  'FURNITURE',
  'TEXTILES',
  'LIGHTING',
  'ART',
  'CERAMICS',
  'OBJECTS',
];

const conditions = [
  'Museum Grade (Mint)',
  'Excellent (Minor Patina)',
  'Good (Visible Wear)',
  'Fair (Requires Restoration)',
];

export const CreateListing = () => {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [description, setDescription] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('FURNITURE');
  const [selectedCondition, setSelectedCondition] = useState('');

  return (
    <View className="flex-1" style={{backgroundColor: Colors.brand.neutral}}>
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        {/* Main Content Grid */}
        <View className="px-6 py-10 lg:grid lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Headline & Visual Documentation */}
          <View className="mb-12 lg:col-span-5 lg:mb-0">
            <View className="mb-12">
              <Text
                className="mb-4 font-playfair text-5xl leading-none text-primary-900 lg:text-6xl"
                style={{letterSpacing: -1}}
              >
                Catalog New Object
              </Text>
              <Text className="max-w-xs text-base leading-relaxed text-brand-tertiary">
                Each entry in the archive is meticulously documented. Please
                provide high-resolution visual evidence and provenance details.
              </Text>
            </View>

            {/* Visual Documentation Section */}
            <View>
              <View className="mb-6 flex-row items-center justify-between border-b border-border pb-2">
                <Text className="text-[10px] font-bold uppercase tracking-widest">
                  Visual Documentation
                </Text>
                <Text className="text-[9px] uppercase tracking-widest text-brand-tertiary">
                  0 / 5 Images
                </Text>
              </View>

              {/* Primary Image Upload */}
              <TouchableOpacity
                className="mb-4 flex aspect-[4/5] w-full flex-col items-center justify-center border border-dashed border-border"
                style={{
                  borderColor: Colors.light.border,
                  backgroundColor: Colors.light.surface,
                }}
                activeOpacity={0.7}
              >
                <MaterialIcons
                  name="add-photo-alternate"
                  size={40}
                  color={Colors.brand.tertiary}
                />
                <Text className="mt-4 text-[10px] font-bold uppercase tracking-widest">
                  Upload Primary Plate
                </Text>
                <Text className="mt-2 text-[9px] text-brand-tertiary">
                  Front Profile View
                </Text>
              </TouchableOpacity>

              {/* Secondary Thumbnails */}
              <View className="flex-row flex-wrap gap-3">
                {[1, 2, 3, 4].map(item => (
                  <TouchableOpacity
                    key={item}
                    className="flex aspect-square h-[20%] w-[48%] items-center justify-center border border-dashed border-border"
                    style={{
                      borderColor: Colors.light.border,
                      backgroundColor: Colors.light.surface,
                    }}
                    activeOpacity={0.7}
                  >
                    <MaterialIcons
                      name="add-photo-alternate"
                      size={20}
                      color={Colors.brand.tertiary}
                    />
                  </TouchableOpacity>
                ))}
              </View>

              <Text className="mt-4 text-[11px] italic text-brand-tertiary">
                * Note: At least three distinct angles are required for initial
                {'\n'}authentication triage.
              </Text>
            </View>
          </View>

          {/* Right Column: Form Sections */}
          <View className="lg:col-span-7 lg:border-l lg:border-border lg:pl-0">
            {/* 01 Object Identity */}
            <View className="mb-10 pt-10 lg:pt-0">
              <View className="mb-4 flex-row items-center gap-4">
                <Text className="font-playfair text-2xl italic text-primary-900">
                  01
                </Text>
                <Text className="pt-1 text-[10px] font-bold uppercase tracking-widest">
                  Object Identity
                </Text>
              </View>

              <View className="lg:grid lg:grid-cols-2 lg:gap-6">
                <View className="my-4">
                  <Text className="mb-1 text-[10px] font-bold uppercase tracking-widest text-brand-tertiary">
                    Design/Object Name
                  </Text>
                  <TextInput
                    className="w-full border-b border-border bg-transparent py-2 text-brand-primary"
                    placeholder="e.g. Wassily Chair Model B3"
                    placeholderTextColor={Colors.brand.tertiary}
                    value={title}
                    onChangeText={setTitle}
                  />
                </View>
                <View className="my-4">
                  <Text className="mb-1 text-[10px] font-bold uppercase tracking-widest text-brand-tertiary">
                    Origin Year
                  </Text>
                  <TextInput
                    className="w-full border-b border-border bg-transparent py-2 text-brand-primary"
                    placeholder="YYYY"
                    placeholderTextColor={Colors.brand.tertiary}
                    value={year}
                    onChangeText={setYear}
                    maxLength={4}
                    keyboardType="number-pad"
                  />
                </View>
              </View>
            </View>

            {/* 02 Provenance & History */}
            <View className="mb-10">
              <View className="mb-4 flex-row items-center gap-4">
                <Text className="font-playfair text-2xl italic text-primary-900">
                  02
                </Text>
                <Text className="pt-1 text-[10px] font-bold uppercase tracking-widest">
                  Provenance & History
                </Text>
              </View>

              <View className="my-4">
                <Text className="mb-2 text-[10px] font-bold uppercase tracking-widest text-brand-tertiary">
                  Historical Narrative
                </Text>
                <TextInput
                  className="w-full border border-border bg-transparent p-4 leading-relaxed text-brand-primary"
                  placeholder="Document the object's journey, previous owners, and any restoration history..."
                  placeholderTextColor={Colors.brand.tertiary}
                  value={description}
                  onChangeText={setDescription}
                  multiline
                  numberOfLines={6}
                  textAlignVertical="top"
                  style={{minHeight: 140}}
                />
              </View>
            </View>

            {/* 03 Classification */}
            <View className="mb-10">
              <View className="mb-6 flex-row items-center gap-4">
                <Text className="font-playfair text-2xl italic text-primary-900">
                  03
                </Text>
                <Text className="pt-1 text-[10px] font-bold uppercase tracking-widest">
                  Classification
                </Text>
              </View>

              <View>
                <Text className="mb-4 text-[10px] font-bold uppercase tracking-widest text-brand-tertiary">
                  Category
                </Text>
                <View className="flex-row flex-wrap gap-2">
                  {categories.map(cat => (
                    <TouchableOpacity
                      key={cat}
                      onPress={() => setSelectedCategory(cat)}
                      className="border px-4 py-2"
                      style={{
                        backgroundColor:
                          selectedCategory === cat
                            ? Colors.brand.secondary
                            : 'transparent',
                        borderColor:
                          selectedCategory === cat
                            ? Colors.brand.secondary
                            : Colors.light.border,
                      }}
                      activeOpacity={0.7}
                    >
                      <Text
                        className="text-[9px] font-bold uppercase tracking-widest"
                        style={{
                          color:
                            selectedCategory === cat
                              ? Colors.dark.text
                              : Colors.brand.primary,
                        }}
                      >
                        {cat}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>

              <View className="mt-6">
                <Text className="mb-4 text-[10px] font-bold uppercase tracking-widest text-brand-tertiary">
                  Condition
                </Text>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  className="overflow-visible"
                >
                  <View className="flex-row gap-2 py-2">
                    {conditions.map(condition => (
                      <TouchableOpacity
                        key={condition}
                        onPress={() => setSelectedCondition(condition)}
                        className="border px-4 py-2"
                        style={{
                          backgroundColor:
                            selectedCondition === condition
                              ? Colors.brand.secondary
                              : 'transparent',
                          borderColor:
                            selectedCondition === condition
                              ? Colors.brand.secondary
                              : Colors.light.border,
                        }}
                        activeOpacity={0.7}
                      >
                        <Text
                          className="text-[9px] font-bold uppercase tracking-widest"
                          style={{
                            color:
                              selectedCondition === condition
                                ? Colors.dark.text
                                : Colors.brand.primary,
                          }}
                        >
                          {condition}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </ScrollView>
              </View>
            </View>

            {/* Submit Section */}
            <View className="border-t border-border pt-8">
              <View className="gap-6 lg:flex-row lg:items-end lg:justify-between">
                <View className="lg:flex-1 lg:pr-8">
                  <Text className="mb-1 text-sm italic text-brand-tertiary">
                    Estimated appraisal time: 48-72 hours.
                  </Text>
                  <Text className="text-[10px] uppercase tracking-widest text-brand-tertiary">
                    A non-refundable listing fee of 2.5% applies upon sale.
                  </Text>
                </View>
                <TouchableOpacity
                  className="flex w-full items-center justify-center py-5 lg:w-auto lg:px-12"
                  style={{backgroundColor: Colors.brand.secondary}}
                  activeOpacity={0.8}
                >
                  <Text className="text-[12px] font-bold uppercase tracking-[0.25em] text-white">
                    Submit for Authentication
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Footer */}
      <View
        className="border-t border-border px-6 pb-10 pt-4"
        style={{borderTopColor: Colors.light.border}}
      >
        <View className="flex-row justify-between lg:grid lg:grid-cols-4">
          <View className="lg:col-span-2">
            <Text className="font-playfair text-2xl tracking-widest text-primary-900">
              THE ARCHIVIST
            </Text>
          </View>
          <View className="mt-4 flex-row gap-6 lg:col-span-2 lg:mt-0 lg:justify-end">
            <TouchableOpacity>
              <Text className="text-[10px] uppercase tracking-widest text-brand-tertiary">
                Guidelines
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text className="text-[10px] uppercase tracking-widest text-brand-tertiary">
                Contact
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
