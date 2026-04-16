import {Colors} from '@/constants/theme';
import {Text, TouchableOpacity, View} from 'react-native';

type CuratorTabsProps = {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
};

export const CuratorTabs = ({
  tabs,
  activeTab,
  onTabChange,
}: CuratorTabsProps) => {
  return (
    <View
      style={{borderBottomColor: Colors.light.border}}
      className="flex-row border-b"
    >
      {tabs.map(tab => (
        <TouchableOpacity
          key={tab}
          onPress={() => onTabChange(tab)}
          className="flex-1 items-center py-4"
          style={{
            borderBottomWidth: activeTab === tab ? 2 : 0,
            borderBottomColor: Colors.light.text,
          }}
        >
          <Text
            style={{
              color:
                activeTab === tab
                  ? Colors.light.text
                  : Colors.light.textSecondary,
              letterSpacing: 2,
            }}
            className="text-xs font-bold"
          >
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
