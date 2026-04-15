import { Colors } from "@/constants/theme";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const categories = [
  "FURNITURE",
  "TEXTILES",
  "LIGHTING",
  "ART",
  "CERAMICS",
  "OBJECTS",
];

const conditions = [
  "Museum Grade (Mint)",
  "Excellent (Minor Patina)",
  "Good (Visible Wear)",
  "Fair (Requires Restoration)",
];

export const CreateListing = () => {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [description, setDescription] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("FURNITURE");
  const [selectedCondition, setSelectedCondition] = useState("");

  return (
    <View className="flex-1" style={{ backgroundColor: Colors.brand.neutral }}>
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        {/* Main Content Grid */}
        <View className="px-6 py-10 lg:grid lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Headline & Visual Documentation */}
          <View className="lg:col-span-5 mb-12 lg:mb-0">
            <View className="mb-12">
              <Text
                className="text-5xl lg:text-6xl font-playfair text-primary-900 leading-none mb-4"
                style={{ letterSpacing: -1 }}
              >
                Catalog New Object
              </Text>
              <Text className="text-base text-brand-tertiary leading-relaxed max-w-xs">
                Each entry in the archive is meticulously documented. Please
                provide high-resolution visual evidence and provenance details.
              </Text>
            </View>

            {/* Visual Documentation Section */}
            <View>
              <View className="flex-row items-center justify-between border-b border-border pb-2 mb-6">
                <Text className="text-[10px] font-bold uppercase tracking-widest">
                  Visual Documentation
                </Text>
                <Text className="text-[9px] text-brand-tertiary uppercase tracking-widest">
                  0 / 5 Images
                </Text>
              </View>

              {/* Primary Image Upload */}
              <TouchableOpacity
                className="aspect-[4/5] w-full border border-dashed border-border flex flex-col items-center justify-center mb-4"
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
                <Text className="text-[10px] font-bold uppercase tracking-widest mt-4">
                  Upload Primary Plate
                </Text>
                <Text className="text-[9px] text-brand-tertiary mt-2">
                  Front Profile View
                </Text>
              </TouchableOpacity>

              {/* Secondary Thumbnails */}
              <View className="flex-row flex-wrap gap-3">
                {[1, 2, 3, 4].map((item) => (
                  <TouchableOpacity
                    key={item}
                    className="w-[48%] h-[20%] aspect-square border border-dashed border-border flex items-center justify-center"
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

              <Text className="text-[11px] text-brand-tertiary italic mt-4">
                * Note: At least three distinct angles are required for initial
                {"\n"}authentication triage.
              </Text>
            </View>
          </View>

          {/* Right Column: Form Sections */}
          <View className="lg:col-span-7 lg:border-l lg:border-border lg:pl-0">
            {/* 01 Object Identity */}
            <View className="mb-10 pt-10 lg:pt-0">
              <View className="flex-row items-center gap-4 mb-4">
                <Text className="text-2xl font-playfair italic text-primary-900">
                  01
                </Text>
                <Text className="text-[10px] font-bold uppercase tracking-widest pt-1">
                  Object Identity
                </Text>
              </View>

              <View className="lg:grid lg:grid-cols-2 lg:gap-6">
                <View className="my-4">
                  <Text className="text-[10px] font-bold uppercase tracking-widest text-brand-tertiary mb-1">
                    Design/Object Name
                  </Text>
                  <TextInput
                    className="w-full py-2 border-b border-border bg-transparent text-brand-primary"
                    placeholder="e.g. Wassily Chair Model B3"
                    placeholderTextColor={Colors.brand.tertiary}
                    value={title}
                    onChangeText={setTitle}
                  />
                </View>
                <View className="my-4">
                  <Text className="text-[10px] font-bold uppercase tracking-widest text-brand-tertiary mb-1">
                    Origin Year
                  </Text>
                  <TextInput
                    className="w-full py-2 border-b border-border bg-transparent text-brand-primary"
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
              <View className="flex-row items-center gap-4 mb-4">
                <Text className="text-2xl font-playfair italic text-primary-900">
                  02
                </Text>
                <Text className="text-[10px] font-bold uppercase tracking-widest pt-1">
                  Provenance & History
                </Text>
              </View>

              <View className="my-4">
                <Text className="text-[10px] font-bold uppercase tracking-widest text-brand-tertiary mb-2">
                  Historical Narrative
                </Text>
                <TextInput
                  className="w-full p-4 border border-border bg-transparent text-brand-primary leading-relaxed"
                  placeholder="Document the object's journey, previous owners, and any restoration history..."
                  placeholderTextColor={Colors.brand.tertiary}
                  value={description}
                  onChangeText={setDescription}
                  multiline
                  numberOfLines={6}
                  textAlignVertical="top"
                  style={{ minHeight: 140 }}
                />
              </View>
            </View>

            {/* 03 Classification */}
            <View className="mb-10">
              <View className="flex-row items-center gap-4 mb-6">
                <Text className="text-2xl font-playfair italic text-primary-900">
                  03
                </Text>
                <Text className="text-[10px] font-bold uppercase tracking-widest pt-1">
                  Classification
                </Text>
              </View>

              <View>
                <Text className="text-[10px] font-bold uppercase tracking-widest text-brand-tertiary mb-4">
                  Category
                </Text>
                <View className="flex-row flex-wrap gap-2">
                  {categories.map((cat) => (
                    <TouchableOpacity
                      key={cat}
                      onPress={() => setSelectedCategory(cat)}
                      className="px-4 py-2 border"
                      style={{
                        backgroundColor:
                          selectedCategory === cat
                            ? Colors.brand.secondary
                            : "transparent",
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
                <Text className="text-[10px] font-bold uppercase tracking-widest text-brand-tertiary mb-4">
                  Condition
                </Text>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  className="overflow-visible"
                >
                  <View className="flex-row gap-2 py-2">
                    {conditions.map((condition) => (
                      <TouchableOpacity
                        key={condition}
                        onPress={() => setSelectedCondition(condition)}
                        className="px-4 py-2 border"
                        style={{
                          backgroundColor:
                            selectedCondition === condition
                              ? Colors.brand.secondary
                              : "transparent",
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
            <View className="pt-8 border-t border-border">
              <View className="lg:flex-row lg:justify-between lg:items-end gap-6">
                <View className="lg:flex-1 lg:pr-8">
                  <Text className="text-sm italic text-brand-tertiary mb-1">
                    Estimated appraisal time: 48-72 hours.
                  </Text>
                  <Text className="text-[10px] uppercase tracking-widest text-brand-tertiary">
                    A non-refundable listing fee of 2.5% applies upon sale.
                  </Text>
                </View>
                <TouchableOpacity
                  className="lg:w-auto lg:px-12 w-full py-5 flex items-center justify-center"
                  style={{ backgroundColor: Colors.brand.secondary }}
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
        className="px-6 pb-10 pt-4 border-t border-border"
        style={{ borderTopColor: Colors.light.border }}
      >
        <View className="lg:grid lg:grid-cols-4 flex-row justify-between">
          <View className="lg:col-span-2">
            <Text className="text-2xl font-playfair tracking-widest text-primary-900">
              THE ARCHIVIST
            </Text>
          </View>
          <View className="lg:col-span-2 flex-row lg:justify-end gap-6 mt-4 lg:mt-0">
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
